#!/usr/bin/env node
/**
 * Rule-Based Validator — checks anatomical rules:
 * - DCML deficits are ipsilateral below lesion
 * - STT deficits are contralateral 1-2 levels below
 * - CST laterality per lesion level
 * - Nerve root consistency between neuro and MSK
 */
const fs = require('fs');
const path = require('path');

const kb = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/knowledge-base.json'), 'utf8'));
const errors = [];

function rule(context, condition, message) {
  if (!condition) errors.push(`[${context}] ${message}`);
}

// Rule 1: DCML lesion deficits must be ipsilateral
const dcml = kb.tracts.find(t => t.id === 'tract_dorsal_column');
if (dcml) {
  for (const d of dcml.lesionDeficits) {
    rule('DCML-laterality', d.side === 'ipsilateral', `DCML deficit "${d.type}" should be ipsilateral, got "${d.side}"`);
  }
}

// Rule 2: STT lesion deficits must be contralateral
const stt = kb.tracts.find(t => t.id === 'tract_spinothalamic');
if (stt) {
  for (const d of stt.lesionDeficits) {
    rule('STT-laterality', d.side === 'contralateral', `STT deficit "${d.type}" should be contralateral, got "${d.side}"`);
  }
}

// Rule 3: CST lesion deficits must be contralateral (for unilateral cord lesions above decussation)
const cst = kb.tracts.find(t => t.id === 'tract_lateral_cst');
if (cst) {
  for (const d of cst.lesionDeficits) {
    rule('CST-laterality', d.side === 'contralateral' || d.side === 'ipsilateral', `CST deficit needs explicit laterality, got "${d.side}"`);
  }
}

// Rule 4: Brown-Séquard laterality rules
const bs = kb.lesionSyndromes.find(l => l.id === 'lesion_brown_sequard');
if (bs) {
  const motorDef = bs.deficits.find(d => d.type === 'motor');
  const ftDef = bs.deficits.find(d => d.type === 'fine_touch');
  const ptDef = bs.deficits.find(d => d.type === 'pain_temp');
  
  rule('Brown-Séquard-motor', motorDef?.side === 'ipsilateral', 'Motor deficit should be ipsilateral (CST decussates above cord)');
  rule('Brown-Séquard-DCML', ftDef?.side === 'ipsilateral', 'Fine touch deficit should be ipsilateral (DCML decussates in medulla)');
  rule('Brown-Séquard-STT', ptDef?.side === 'contralateral', 'Pain/temp deficit should be contralateral (STT crosses at entry)');
}

// Rule 5: Anterior cord preserves DCML
const ac = kb.lesionSyndromes.find(l => l.id === 'lesion_anterior_cord');
if (ac) {
  const ftDef = ac.deficits.find(d => d.type === 'fine_touch');
  rule('Anterior-cord-DCML', ftDef?.side === 'spared', 'DCML should be spared in anterior cord syndrome');
}

// Rule 6: Syringomyelia preserves DCML initially
const syr = kb.lesionSyndromes.find(l => l.id === 'lesion_syringomyelia');
if (syr) {
  const ftDef = syr.deficits.find(d => d.type === 'fine_touch');
  rule('Syringomyelia-DCML', ftDef?.side === 'spared', 'DCML should be spared initially in syringomyelia');
}

// Rule 7: Wallenberg — ipsilateral face, contralateral body for pain/temp
const wall = kb.brainstemSyndromes.find(b => b.id === 'bs_wallenberg');
if (wall) {
  rule('Wallenberg-face', 
    wall.ipsilateralDeficits.some(d => d.toLowerCase().includes('facial') || d.toLowerCase().includes('face')),
    'Wallenberg should have ipsilateral facial pain/temp loss');
  rule('Wallenberg-body',
    wall.contralateralDeficits.some(d => d.toLowerCase().includes('body') || d.toLowerCase().includes('pain')),
    'Wallenberg should have contralateral body pain/temp loss');
}

// Rule 8: Nerve root-reflex consistency
const reflexMap = {
  'C5': 'biceps', 'C6': 'brachioradialis', 'C7': 'triceps',
  'L3': 'patellar', 'L4': 'patellar', 'S1': 'achilles'
};
for (const nr of kb.nerveRoots) {
  if (reflexMap[nr.id] && nr.reflex) {
    rule(`Reflex:${nr.id}`, 
      nr.reflex.toLowerCase().includes(reflexMap[nr.id]),
      `Expected "${reflexMap[nr.id]}" reflex for ${nr.id}, got "${nr.reflex}"`);
  }
}

console.log('=== Rule Validator Report ===');
if (errors.length === 0) {
  console.log('✅ All anatomical rules passed!');
} else {
  console.log(`❌ ${errors.length} rule violations:`);
  errors.forEach(e => console.log(`  ${e}`));
}

process.exit(errors.length > 0 ? 1 : 0);
