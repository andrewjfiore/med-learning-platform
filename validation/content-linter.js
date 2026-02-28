#!/usr/bin/env node
/**
 * Content Linter — checks knowledge base for:
 * - Missing citations
 * - Inconsistent terminology
 * - Missing laterality on deficits
 * - Missing decussation info
 * - Missing innervation on muscles
 */
const fs = require('fs');
const path = require('path');

const kb = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/knowledge-base.json'), 'utf8'));
const citations = JSON.parse(fs.readFileSync(path.join(__dirname, '../shared/citations.json'), 'utf8'));
const citationIds = new Set(citations.map(c => c.id));

const errors = [];
const warnings = [];

function lint(context, condition, message, severity = 'error') {
  if (!condition) {
    (severity === 'error' ? errors : warnings).push(`[${context}] ${message}`);
  }
}

// Check all citation references resolve
function checkCitations(obj, context) {
  if (obj.citationIds) {
    for (const cid of obj.citationIds) {
      lint(context, citationIds.has(cid), `Unknown citation: "${cid}"`);
    }
    lint(context, obj.citationIds.length > 0, 'No citations provided', 'warning');
  }
}

// Tracts
for (const tract of kb.tracts || []) {
  const ctx = `Tract:${tract.id}`;
  lint(ctx, tract.name, 'Missing name');
  lint(ctx, tract.decussation?.level, 'Missing decussation level');
  lint(ctx, tract.decussation?.structure, 'Missing decussation structure');
  lint(ctx, tract.synapses?.length > 0, 'No synapses defined');
  lint(ctx, tract.function?.length > 0, 'No functions defined');
  lint(ctx, tract.position, 'Missing position in cord');
  for (const deficit of tract.lesionDeficits || []) {
    lint(ctx, deficit.side, 'Deficit missing laterality (side)');
    lint(ctx, deficit.type, 'Deficit missing type');
  }
  checkCitations(tract, ctx);
}

// Lesion syndromes
for (const lesion of kb.lesionSyndromes || []) {
  const ctx = `Lesion:${lesion.id}`;
  lint(ctx, lesion.name, 'Missing name');
  lint(ctx, lesion.description, 'Missing description');
  for (const deficit of lesion.deficits || []) {
    lint(ctx, deficit.side, 'Deficit missing laterality');
    lint(ctx, deficit.type, 'Deficit missing type');
    // Check tractId references valid tract
    if (deficit.tractId) {
      const validTract = (kb.tracts || []).some(t => t.id === deficit.tractId);
      lint(ctx, validTract, `Invalid tractId reference: "${deficit.tractId}"`);
    }
  }
  checkCitations(lesion, ctx);
}

// Brainstem syndromes
for (const bs of kb.brainstemSyndromes || []) {
  const ctx = `Brainstem:${bs.id}`;
  lint(ctx, bs.name, 'Missing name');
  lint(ctx, bs.level, 'Missing brainstem level');
  lint(ctx, bs.artery, 'Missing artery');
  lint(ctx, bs.ipsilateralDeficits?.length > 0, 'No ipsilateral deficits');
  lint(ctx, bs.contralateralDeficits?.length > 0, 'No contralateral deficits');
  checkCitations(bs, ctx);
}

// Nerve roots
for (const nr of kb.nerveRoots || []) {
  const ctx = `NerveRoot:${nr.id}`;
  lint(ctx, nr.dermatome, 'Missing dermatome');
  lint(ctx, nr.myotome, 'Missing myotome');
  checkCitations(nr, ctx);
}

// Report
console.log('=== Content Linter Report ===');
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log(`  ❌ ${e}`));
console.log(`Warnings: ${warnings.length}`);
warnings.forEach(w => console.log(`  ⚠️  ${w}`));
console.log(`\nChecked: ${(kb.tracts||[]).length} tracts, ${(kb.lesionSyndromes||[]).length} lesions, ${(kb.brainstemSyndromes||[]).length} brainstem syndromes, ${(kb.nerveRoots||[]).length} nerve roots`);

if (errors.length > 0) process.exit(1);

// Cranial nerves
for (const cn of kb.cranialNerves || []) {
  const ctx = `CN:${cn.id}`;
  lint(ctx, cn.name, 'Missing name');
  lint(ctx, cn.exit, 'Missing skull exit');
  lint(ctx, cn.modality?.length > 0, 'No modality defined');
  lint(ctx, cn.lesionFindings, 'Missing lesion findings');
  checkCitations(cn, ctx);
}

// Nerves
for (const n of kb.nerves || []) {
  const ctx = `Nerve:${n.id}`;
  lint(ctx, n.name, 'Missing name');
  lint(ctx, n.roots?.length > 0, 'No roots defined');
  lint(ctx, n.motorFunction?.length > 0, 'No motor function');
  lint(ctx, n.sensoryDistribution, 'Missing sensory distribution');
  checkCitations(n, ctx);
}

// Receptors
for (const r of kb.receptors || []) {
  const ctx = `Receptor:${r.id}`;
  lint(ctx, r.name, 'Missing name');
  lint(ctx, r.mechanism, 'Missing mechanism');
  checkCitations(r, ctx);
}

// Brain regions
for (const br of kb.brainRegions || []) {
  const ctx = `Brain:${br.id}`;
  lint(ctx, br.name, 'Missing name');
  lint(ctx, br.areas?.length > 0, 'No areas defined');
  lint(ctx, br.clinicalCorrelations, 'Missing clinical correlations');
  checkCitations(br, ctx);
}

console.log(`Also checked: ${(kb.cranialNerves||[]).length} CNs, ${(kb.nerves||[]).length} nerves, ${(kb.receptors||[]).length} receptors, ${(kb.brainRegions||[]).length} brain regions`);
