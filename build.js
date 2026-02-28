#!/usr/bin/env node
/**
 * Build Script — generates self-contained JSX apps from shared KB
 * 
 * Reads knowledge-base.json and injects verified data into both apps.
 * Output: neuro/neuro-app.jsx and msk/msk-platform.jsx (self-contained)
 */
const fs = require('fs');
const path = require('path');

const KB = JSON.parse(fs.readFileSync(path.join(__dirname, 'shared/knowledge-base.json'), 'utf8'));

// Read original app templates
const neuroTemplate = fs.readFileSync(path.join(__dirname, '../neuro-app.jsx'), 'utf8');
const mskTemplate = fs.readFileSync(path.join(__dirname, '../msk-platform.jsx'), 'utf8');

console.log('Building apps from shared KB...');
console.log(`KB version: ${KB.version}, last updated: ${KB.lastUpdated}`);

// ─── Generate Neuro Data Block ─────────────────────────────────────────────

function generateNeuroTracts() {
  const tractColors = {
    'tract_dorsal_column': '#5B8A9A',
    'tract_spinothalamic': '#C97070', 
    'tract_corticospinal': '#7B68AE',
    'tract_spinocerebellar': '#6BAF7B',
  };
  const tractKeys = {
    'tract_dorsal_column': 'dorsalColumns',
    'tract_spinothalamic': 'spinothalamic',
    'tract_corticospinal': 'corticospinal',
    'tract_spinocerebellar': 'spinocerebellar',
  };
  
  const tracts = {};
  for (const t of KB.tracts) {
    const key = tractKeys[t.id];
    tracts[key] = {
      name: t.name, short: t.shortName, color: tractColors[t.id],
      origin: t.origin,
      decussation: `${t.decussation.structure} in ${t.decussation.level}`,
      synapses: t.synapses.map(s => `${s.order}${ordSuffix(s.order)}: ${s.location}`).join('. '),
      function: t.function.join(', '),
      lesion: t.lesionDeficits.map(d => `${cap(d.side)} ${d.detail}`).join('. '),
      diseases: t.associatedDiseases,
      highYield: t.highYield,
      position: t.position,
      fasciculi: t.id === 'tract_dorsal_column' ? ['gracilis', 'cuneatus'] : undefined,
    };
  }
  return tracts;
}

function generateLesions() {
  const lesionKeys = {
    'lesion_brown_sequard': 'hemisection',
    'lesion_central_cord': 'centralCord',
    'lesion_anterior_cord': 'anteriorCord',
    'lesion_tabes_dorsalis': 'tabesDorsalis',
    'lesion_b12_deficiency': 'b12Deficiency',
    'lesion_syringomyelia': 'syringomyelia',
  };
  const regionMap = {
    'lesion_brown_sequard': ['left-lateral', 'left-posterior', 'left-anterior'],
    'lesion_central_cord': ['center'],
    'lesion_anterior_cord': ['anterior-bilateral'],
    'lesion_tabes_dorsalis': ['posterior'],
    'lesion_b12_deficiency': ['posterior', 'lateral-bilateral'],
    'lesion_syringomyelia': ['center'],
  };
  
  const lesions = {};
  for (const l of KB.lesionSyndromes) {
    const key = lesionKeys[l.id];
    lesions[key] = {
      name: l.name, aka: l.synonyms?.[0] || l.name,
      description: l.description,
      deficits: l.deficits.map(d => ({type: d.type, side: d.side, detail: d.detail})),
      regions: regionMap[l.id] || [],
    };
  }
  return lesions;
}

function generateCranialNerves() {
  return KB.cranialNerves.map(cn => ({
    num: cn.number, name: cn.name,
    modality: cn.modality.map(m => m.replace(/_/g, ' ')).join(' + '),
    exit: cn.exit,
    nuclei: cn.nuclei.join(', '),
    reflex: cn.reflexes.length > 0 ? cn.reflexes.join(', ') : 'None',
    lesion: cn.lesionFindings,
    hy: cn.highYield,
  }));
}

function generateAutonomic() {
  const mapDiv = (div, name) => ({
    name: name,
    outflow: div.outflow,
    pre: div.preganglionicNT,
    post: div.postganglionicNT,
    chain: div.ganglia.join(', '),
    effects: div.effects,
    clinical: div.clinicalConditions,
  });
  return {
    sympathetic: mapDiv(KB.autonomics.sympathetic, 'Sympathetic (Thoracolumbar)'),
    parasympathetic: mapDiv(KB.autonomics.parasympathetic, 'Parasympathetic (Craniosacral)'),
    receptors: KB.receptors.map(r => ({
      name: r.name, location: r.location, effect: r.effect, mechanism: r.mechanism,
    })),
  };
}

function generateBrainRegions() {
  const colors = {
    'region_frontal': '#9EC8CF', 'region_parietal': '#AEBBD0',
    'region_temporal': '#C9BFD5', 'region_occipital': '#B8D6C2',
    'region_thalamus': '#D7C3CF', 'region_basal_ganglia': '#E8E1B3',
  };
  const keys = {
    'region_frontal': 'frontal', 'region_parietal': 'parietal',
    'region_temporal': 'temporal', 'region_occipital': 'occipital',
    'region_thalamus': 'thalamus', 'region_basal_ganglia': 'basalGanglia',
  };
  const regions = {};
  for (const br of KB.brainRegions) {
    regions[keys[br.id]] = {
      name: br.name, color: colors[br.id],
      areas: br.areas.map(a => ({
        name: a.name,
        detail: a.detail + (a.brodmannArea ? ` Brodmann area ${a.brodmannArea}.` : ''),
      })),
      clinical: br.clinicalCorrelations,
    };
  }
  return regions;
}

// ─── Generate MSK Data Block ───────────────────────────────────────────────

function generateDermatomeMap() {
  const m = {};
  for (const nr of KB.nerveRoots) m[nr.id] = nr.dermatome;
  return m;
}

function generateMyotomeMap() {
  const m = {};
  for (const nr of KB.nerveRoots) if (nr.myotome) m[nr.id] = nr.myotome;
  return m;
}

function generateReflexMap() {
  const m = {};
  for (const nr of KB.nerveRoots) if (nr.reflex) m[nr.id] = nr.reflex;
  return m;
}

// ─── Inject into Neuro App ─────────────────────────────────────────────────

let neuroOutput = neuroTemplate;

// Replace TRACTS data
const tractsJS = JSON.stringify(generateNeuroTracts(), null, 2);
neuroOutput = neuroOutput.replace(
  /const TRACTS = \{[\s\S]*?\n\};/,
  `/* ───────── TRACT DATA (Generated from shared KB v${KB.version}) ───────── */\nconst TRACTS = ${tractsJS};`
);

// Replace LESIONS data
const lesionsJS = JSON.stringify(generateLesions(), null, 2);
neuroOutput = neuroOutput.replace(
  /const LESIONS = \{[\s\S]*?\n\};/,
  `/* ───────── LESION DATA (Generated from shared KB v${KB.version}) ───────── */\nconst LESIONS = ${lesionsJS};`
);

// Replace CRANIAL_NERVES
const cnJS = JSON.stringify(generateCranialNerves(), null, 2);
neuroOutput = neuroOutput.replace(
  /const CRANIAL_NERVES = \[[\s\S]*?\n\];/,
  `/* ───────── CRANIAL NERVE DATA (Generated from shared KB v${KB.version}) ───────── */\nconst CRANIAL_NERVES = ${cnJS};`
);

// Replace AUTONOMIC
const autoJS = JSON.stringify(generateAutonomic(), null, 2);
neuroOutput = neuroOutput.replace(
  /const AUTONOMIC = \{[\s\S]*?(?=\/\* ─)/,
  `/* ───────── AUTONOMIC DATA (Generated from shared KB v${KB.version}) ───────── */\nconst AUTONOMIC = ${autoJS};\n\n`
);

// Replace BRAIN_REGIONS
const brainJS = JSON.stringify(generateBrainRegions(), null, 2);
neuroOutput = neuroOutput.replace(
  /const BRAIN_REGIONS = \{[\s\S]*?(?=\/\* ─)/,
  `/* ───────── BRAIN REGIONS DATA (Generated from shared KB v${KB.version}) ───────── */\nconst BRAIN_REGIONS = ${brainJS};\n\n`
);

// Add KB version comment at top
neuroOutput = `/* Generated from shared Knowledge Base v${KB.version} (${KB.lastUpdated})\n * Source: med-learning-platform/shared/knowledge-base.json\n * Run: node build.js to regenerate\n */\n` + neuroOutput;

fs.writeFileSync(path.join(__dirname, 'neuro/neuro-app.jsx'), neuroOutput);
console.log(`✅ neuro-app.jsx: ${neuroOutput.length} chars`);

// ─── Inject into MSK App ───────────────────────────────────────────────────

let mskOutput = mskTemplate;

// Replace DERMATOME_MAP
const dermaJS = JSON.stringify(generateDermatomeMap(), null, 2);
mskOutput = mskOutput.replace(
  /const DERMATOME_MAP = \{[\s\S]*?\n\};/,
  `/* (Generated from shared KB v${KB.version}) */\nconst DERMATOME_MAP = ${dermaJS};`
);

// Replace MYOTOME_MAP
const myoJS = JSON.stringify(generateMyotomeMap(), null, 2);
mskOutput = mskOutput.replace(
  /const MYOTOME_MAP = \{[\s\S]*?\n\};/,
  `/* (Generated from shared KB v${KB.version}) */\nconst MYOTOME_MAP = ${myoJS};`
);

// Replace REFLEX_MAP
const refJS = JSON.stringify(generateReflexMap(), null, 2);
mskOutput = mskOutput.replace(
  /const REFLEX_MAP = \{[\s\S]*?\n\};/,
  `/* (Generated from shared KB v${KB.version}) */\nconst REFLEX_MAP = ${refJS};`
);

// Add KB version comment at top
mskOutput = `/* Generated from shared Knowledge Base v${KB.version} (${KB.lastUpdated})\n * Source: med-learning-platform/shared/knowledge-base.json\n * Run: node build.js to regenerate\n */\n` + mskOutput;

fs.writeFileSync(path.join(__dirname, 'msk/msk-platform.jsx'), mskOutput);
console.log(`✅ msk-platform.jsx: ${mskOutput.length} chars`);

// ─── Helpers ───────────────────────────────────────────────────────────────
function ordSuffix(n) { const s=['th','st','nd','rd']; const v=n%100; return s[(v-20)%10]||s[v]||s[0]; }
function cap(s) { return s.charAt(0).toUpperCase()+s.slice(1); }

console.log('\nBuild complete. Both apps now use shared KB data.');
