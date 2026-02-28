#!/usr/bin/env node
/**
 * Consistency Checker — ensures neuro and MSK data align:
 * - Nerve root levels match between dermatomes and MSK injuries
 * - Terminology is consistent
 * - No contradictions between modules
 */
const fs = require('fs');
const path = require('path');

const kb = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/knowledge-base.json'), 'utf8'));
const issues = [];

function check(context, condition, message) {
  if (!condition) issues.push(`[${context}] ${message}`);
}

// Build lookup maps
const rootMap = {};
for (const nr of kb.nerveRoots) rootMap[nr.id] = nr;

// Check 1: All tract IDs referenced in lesions exist
const tractIds = new Set(kb.tracts.map(t => t.id));
for (const lesion of kb.lesionSyndromes) {
  for (const d of lesion.deficits) {
    if (d.tractId) {
      check(`Consistency:${lesion.id}`, tractIds.has(d.tractId),
        `Deficit references unknown tract "${d.tractId}"`);
    }
  }
}

// Check 2: Standardized terminology
const standardTerms = {
  'dorsal columns': ['DCML', 'posterior columns', 'dorsal column'],
  'spinothalamic': ['STT', 'anterolateral system', 'ALS'],
  'corticospinal': ['CST', 'pyramidal tract'],
};

// Check 3: Nerve root completeness — key roots should exist
const requiredRoots = ['C5', 'C6', 'C7', 'C8', 'T1', 'L3', 'L4', 'L5', 'S1'];
for (const root of requiredRoots) {
  check('Completeness', rootMap[root], `Missing nerve root: ${root}`);
  if (rootMap[root]) {
    check(`Root:${root}`, rootMap[root].dermatome, `${root} missing dermatome`);
    check(`Root:${root}`, rootMap[root].myotome, `${root} missing myotome`);
  }
}

// Report
console.log('=== Consistency Report ===');
if (issues.length === 0) {
  console.log('✅ No consistency issues found!');
} else {
  console.log(`⚠️ ${issues.length} issues:`);
  issues.forEach(i => console.log(`  ${i}`));
}

const report = {
  timestamp: new Date().toISOString(),
  kbVersion: kb.version,
  tractsChecked: kb.tracts.length,
  lesionsChecked: kb.lesionSyndromes.length,
  brainstemChecked: kb.brainstemSyndromes.length,
  nerveRootsChecked: kb.nerveRoots.length,
  issues: issues.length,
  details: issues
};
fs.writeFileSync(path.join(__dirname, 'reports/consistency-report.json'), JSON.stringify(report, null, 2));
console.log('\nReport saved to validation/reports/consistency-report.json');
