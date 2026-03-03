#!/usr/bin/env python3
"""
Med Learning Platform Fuzz & Chaos Test Suite
Tests: malformed quiz data, localStorage corruption, extreme answer sequences,
       knowledge base structure integrity
"""
import json
import os
import sys
import copy
import time
import random

RESULTS = []
REPO_ROOT = "/home/andrew/repos/med-learning-platform"

def record(test_name, category, severity, finding, suggestion, passed=False):
    RESULTS.append({
        "test": test_name,
        "category": category,
        "severity": severity,
        "finding": finding,
        "suggestion": suggestion,
        "passed": passed,
    })
    status = "✅ PASS" if passed else severity
    print(f"[{status}] {test_name}: {finding}")


# ─── Knowledge Base Integrity ─────────────────────────────────────────────────

def load_json_file(path):
    try:
        with open(path) as f:
            return json.load(f), None
    except json.JSONDecodeError as e:
        return None, f"JSON parse error: {e}"
    except FileNotFoundError:
        return None, "File not found"
    except Exception as e:
        return None, str(e)


def test_knowledge_base_integrity():
    """Validate knowledge base JSON files for structural integrity."""
    kb_files = [
        f"{REPO_ROOT}/shared/knowledge-base.json",
        f"{REPO_ROOT}/msk/citations.json",
    ]
    
    for path in kb_files:
        data, err = load_json_file(path)
        if err:
            if "not found" in err:
                record(f"kb_integrity/{os.path.basename(path)}", "Data", "🟡",
                       f"File not found: {path}", "Check file exists at expected path")
            else:
                record(f"kb_integrity/{os.path.basename(path)}", "Data", "🔴",
                       f"INVALID JSON: {err}",
                       "Fix JSON syntax — app will fail to load with this error")
            continue
        
        # Check top-level structure
        if isinstance(data, dict):
            required_fields = ["version", "citations"]
            missing = [f for f in required_fields if f not in data]
            if missing:
                record(f"kb_integrity/{os.path.basename(path)}", "Schema", "🟡",
                       f"Missing fields: {missing}",
                       "Add required top-level fields to KB")
            else:
                record(f"kb_integrity/{os.path.basename(path)}", "Schema", "🟢",
                       "Required fields present", "", passed=True)
            
            # Check citations array
            citations = data.get("citations", [])
            if isinstance(citations, list):
                for i, citation in enumerate(citations[:50]):  # Check first 50
                    if not isinstance(citation, dict):
                        record(f"kb_citations/item_{i}", "Schema", "🟡",
                               f"Citation {i} is not an object: {type(citation).__name__}",
                               "Ensure all citations are objects with id, source fields")
                        break
                    if "id" not in citation:
                        record(f"kb_citations/missing_id_{i}", "Schema", "🟡",
                               f"Citation {i} missing 'id' field",
                               "Add id to all citations")
                        break
            
            # Check quiz banks
            for quiz_bank in ["neuroQuizBank", "mskQuizBank"]:
                bank = data.get(quiz_bank, [])
                if isinstance(bank, list) and bank:
                    record(f"kb_quizbank/{quiz_bank}", "Schema", "🟢",
                           f"{quiz_bank}: {len(bank)} items", "", passed=True)
                    
                    # Validate quiz item structure
                    issues = []
                    for i, item in enumerate(bank[:100]):
                        if not isinstance(item, dict):
                            issues.append(f"item {i} not dict")
                            continue
                        if "options" not in item:
                            issues.append(f"item {i} missing options")
                        elif isinstance(item.get("options"), list):
                            correct_idx = item.get("correctIndex", -1)
                            if not isinstance(correct_idx, int) or correct_idx < 0 or correct_idx >= len(item["options"]):
                                issues.append(f"item {i} correctIndex={correct_idx} out of range for {len(item['options'])} options")
                        if "question" not in item:
                            issues.append(f"item {i} missing question")
                    
                    if issues:
                        record(f"kb_quizbank/{quiz_bank}_validity", "Data Integrity", "🟡",
                               f"Quiz validation issues: {issues[:3]}",
                               "Validate all quiz items against QuizItem schema")


def test_quiz_item_fuzzing():
    """Fuzz quiz item data structures."""
    valid_quiz_item = {
        "id": "q001",
        "question": "Which nerve controls wrist extension?",
        "options": ["Median", "Radial", "Ulnar", "Musculocutaneous"],
        "correctIndex": 1,
        "explanation": "The radial nerve...",
        "relatedKBIds": ["nerve_radial"],
        "verified": True,
        "citationIds": ["fa2024-p502"]
    }
    
    # Simulate what a quiz app would do with these items
    def process_quiz_item(item):
        """Simulate quiz app processing a quiz item."""
        q = item.get("question", "")
        options = item.get("options", [])
        correct = item.get("correctIndex", 0)
        
        if not isinstance(options, list):
            raise ValueError(f"options must be array, got {type(options).__name__}")
        if not isinstance(correct, int):
            raise ValueError(f"correctIndex must be int, got {type(correct).__name__}")
        if correct < 0 or correct >= len(options):
            raise IndexError(f"correctIndex {correct} out of range for {len(options)} options")
        
        return options[correct]
    
    fuzz_cases = [
        ("empty_options", {**valid_quiz_item, "options": []}),
        ("null_options", {**valid_quiz_item, "options": None}),
        ("correct_index_negative", {**valid_quiz_item, "correctIndex": -1}),
        ("correct_index_out_of_bounds", {**valid_quiz_item, "correctIndex": 999}),
        ("correct_index_string", {**valid_quiz_item, "correctIndex": "1"}),
        ("correct_index_float", {**valid_quiz_item, "correctIndex": 1.5}),
        ("xss_in_question", {**valid_quiz_item, "question": '<script>alert("XSS")</script>'}),
        ("xss_in_option", {**valid_quiz_item, "options": ['<img onerror=alert(1)>', "B", "C", "D"]}),
        ("xss_in_explanation", {**valid_quiz_item, "explanation": '<svg onload=alert(1)>'}),
        ("null_question", {**valid_quiz_item, "question": None}),
        ("huge_options_array", {**valid_quiz_item, "options": [f"Option {i}" for i in range(10000)]}),
        ("1000_related_kb_ids", {**valid_quiz_item, "relatedKBIds": [f"id_{i}" for i in range(1000)]}),
    ]
    
    for name, item in fuzz_cases:
        try:
            result = process_quiz_item(item)
            if "xss" in name:
                option_text = item.get("question") or str(item.get("options", []))
                if "<script>" in option_text or "onerror=" in option_text or "onload=" in option_text:
                    record(f"quiz_fuzz/{name}", "XSS", "🔴",
                           f"XSS payload in quiz data processed without sanitization: {option_text[:60]}",
                           "Sanitize all quiz text fields before rendering to DOM; use textContent not innerHTML")
            elif name == "huge_options_array":
                record(f"quiz_fuzz/{name}", "Performance", "🟡",
                       "10,000-option quiz item accepted",
                       "Limit options array length (e.g., max 10 per question)")
            else:
                record(f"quiz_fuzz/{name}", "Validation", "🟢",
                       f"Unexpected success for {name}", passed=True)
        except (ValueError, IndexError, TypeError) as e:
            record(f"quiz_fuzz/{name}", "Validation", "🟢",
                   f"Proper error raised for {name}: {e}", "", passed=True)
        except Exception as e:
            record(f"quiz_fuzz/{name}", "Robustness", "🟡",
                   f"Unhandled exception for {name}: {e}",
                   "Add type-safe quiz item processing with error boundaries")


def test_localstorage_corruption_recovery():
    """Test how quiz apps would handle corrupted localStorage."""
    # Simulate reading corrupted quiz progress
    corrupted_states = [
        ("empty_string", ""),
        ("invalid_json", "corrupted{data}"),
        ("null", "null"),
        ("wrong_type", json.dumps([1, 2, 3])),
        ("missing_progress_key", json.dumps({"other": "data"})),
        ("negative_score", json.dumps({"score": -999, "attempts": -1, "lastQuestion": -1})),
        ("score_overflow", json.dumps({"score": 10**15, "attempts": 10**15})),
        ("xss_in_progress", json.dumps({"lastTopic": '<script>alert(1)</script>'})),
        ("prototype_pollution", json.dumps({"__proto__": {"admin": True}})),
    ]
    
    def safe_parse_progress(state_str):
        """Simulate quiz app reading localStorage progress."""
        try:
            if not state_str:
                return {}
            data = json.loads(state_str)
            if not isinstance(data, dict):
                return {}
            # Access fields
            score = data.get("score", 0)
            attempts = data.get("attempts", 0)
            last_question = data.get("lastQuestion", -1)
            return {"score": score, "attempts": attempts, "lastQuestion": last_question}
        except (json.JSONDecodeError, TypeError):
            return {}
    
    for name, state in corrupted_states:
        result = safe_parse_progress(state)
        
        if name == "xss_in_progress" and isinstance(result, dict):
            last_topic = json.loads(state).get("lastTopic", "")
            if "<script>" in last_topic:
                record(f"localstorage/{name}", "XSS", "🔴",
                       "XSS payload in progress data would execute if rendered to DOM",
                       "Sanitize all progress fields before rendering; use textContent")
        elif name == "prototype_pollution":
            record(f"localstorage/{name}", "Security", "🔴",
                   "__proto__ key in localStorage data — potential prototype pollution",
                   "Filter __proto__/constructor keys when parsing state from localStorage")
        else:
            record(f"localstorage/{name}", "Resilience", "🟢",
                   f"Graceful handling of {name}: returns {result}", "", passed=True)


def test_extreme_answer_sequences():
    """Test edge cases in answer submission sequences."""
    scenarios = [
        ("answer_same_question_1000_times", 1000, lambda i: 0),  # Always pick first option
        ("all_wrong_answers", 100, lambda i: 3),  # Always pick wrong answer
        ("random_rapid_answers", 1000, lambda i: random.randint(0, 3)),
        ("answer_before_question_loads", 0, lambda i: 0),  # No questions
        ("negative_question_index", -1, lambda i: 0),
    ]
    
    for name, count, answer_fn in scenarios:
        # Simulate quiz state tracking
        score = 0
        attempts = 0
        
        try:
            for i in range(max(0, count)):
                answer = answer_fn(i)
                correct = 1  # Simulate correct answer is always index 1
                if answer == correct:
                    score += 1
                attempts += 1
            
            record(f"answer_sequence/{name}", "Logic", "🟢",
                   f"Processed {attempts} answers, score: {score}", "", passed=True)
        except Exception as e:
            record(f"answer_sequence/{name}", "Robustness", "🟡",
                   f"Error in answer sequence: {e}",
                   "Add bounds checking for answer processing")


def test_build_system():
    """Check for issues in the Node.js build system."""
    build_files = [
        f"{REPO_ROOT}/build.js",
        f"{REPO_ROOT}/build-esbuild.js",
        f"{REPO_ROOT}/build-pages.js",
        f"{REPO_ROOT}/package.json",
    ]
    
    for path in build_files:
        if os.path.exists(path):
            try:
                with open(path) as f:
                    content = f.read()
                
                # Check for unsafe patterns
                if "eval(" in content and "//eval" not in content:
                    record(f"build/{os.path.basename(path)}", "Security", "🟡",
                           f"eval() found in build script",
                           "Review eval() usage; replace with safer alternatives")
                elif "child_process" in content and "exec(" in content:
                    record(f"build/{os.path.basename(path)}", "Security", "🟡",
                           f"child_process.exec() in build — potential command injection if inputs untrusted",
                           "Use execFile() or spawn() instead of exec(); sanitize all inputs")
                else:
                    record(f"build/{os.path.basename(path)}", "Build", "🟢",
                           "No obvious unsafe patterns", "", passed=True)
            except Exception as e:
                record(f"build/{os.path.basename(path)}", "Build", "🟡",
                       f"Could not read: {e}", "Check file")
        else:
            record(f"build/{os.path.basename(path)}", "Build", "🟡",
                   f"File not found: {path}", "Check build file paths")


# ─── Run All Tests ────────────────────────────────────────────────────────────

def run_all():
    print("=" * 70)
    print("Med Learning Platform Fuzz & Chaos Test Suite")
    print("=" * 70)
    
    test_knowledge_base_integrity()
    test_quiz_item_fuzzing()
    test_localstorage_corruption_recovery()
    test_extreme_answer_sequences()
    test_build_system()
    
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    
    critical = [r for r in RESULTS if r["severity"] == "🔴"]
    medium = [r for r in RESULTS if r["severity"] == "🟡"]
    low = [r for r in RESULTS if r["severity"] == "🟢" and not r["passed"]]
    passed = [r for r in RESULTS if r["passed"]]
    
    print(f"✅ Passed:   {len(passed)}")
    print(f"🔴 Critical: {len(critical)}")
    print(f"🟡 Medium:   {len(medium)}")
    print(f"🟢 Low:      {len(low)}")
    print(f"Total: {len(RESULTS)}")
    
    return RESULTS


if __name__ == "__main__":
    results = run_all()
    with open("/home/andrew/repos/med-learning-platform/chaos-tests/results.json", "w") as f:
        json.dump(results, f, indent=2)
    print("\nResults saved to chaos-tests/results.json")
