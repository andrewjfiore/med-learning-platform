#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const validators = [
  'content-linter.js',
  'rule-validator.js', 
  'consistency-checker.js',
  'quiz-validator.js',
];

let failures = 0;
for (const v of validators) {
  console.log(`\n▶ Running ${v}...`);
  try {
    execSync(`node ${path.join(__dirname, v)}`, { stdio: 'inherit' });
  } catch (e) {
    failures++;
  }
}

console.log(`\n${'='.repeat(40)}`);
if (failures === 0) {
  console.log('✅ ALL VALIDATORS PASSED');
} else {
  console.log(`❌ ${failures} VALIDATOR(S) FAILED`);
  process.exit(1);
}
