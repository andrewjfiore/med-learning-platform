/**
 * Knowledge Base Loader
 * Transforms the shared KB JSON into the data structures expected by both apps.
 * This is the single import point — both apps use this.
 */

import KB from './knowledge-base.json';

// ─── Neuro App Data ────────────────────────────────────────────────────────

export function getTractData() {
  const tracts = {};
  for (const t of KB.tracts) {
    const key = t.id.replace('tract_', '').replace(/_/g, '');
    // Map to legacy format expected by neuro app
    tracts[key === 'dorsalcolumn' ? 'dorsalColumns' : key] = {
      name: t.name,
      short: t.shortName,
      color: getColorForTract(t.id),
      origin: t.origin,
      decussation: `${t.decussation.structure} in ${t.decussation.level}`,
      synapses: t.synapses.map(s => `${s.order}${getOrdinalSuffix(s.order)}: ${s.location}`).join('. '),
      function: t.function.join(', '),
      lesion: t.lesionDeficits.map(d => `${capitalize(d.side)} ${d.detail}`).join('. '),
      diseases: t.associatedDiseases,
      highYield: t.highYield,
      position: t.position,
      citationIds: t.citationIds,
    };
  }
  return tracts;
}

export function getLesionData() {
  const lesions = {};
  for (const l of KB.lesionSyndromes) {
    const key = l.id.replace('lesion_', '').replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    lesions[key] = {
      name: l.name,
      aka: l.synonyms?.[0] || l.name,
      description: l.description,
      deficits: l.deficits.map(d => ({
        type: d.type,
        side: d.side,
        detail: d.detail,
      })),
      regions: getLesionRegions(l.id),
      citationIds: l.citationIds,
    };
  }
  return lesions;
}

export function getCranialNerveData() {
  return KB.cranialNerves.map(cn => ({
    num: cn.number,
    name: cn.name,
    modality: cn.modality.join(', ').replace(/_/g, ' '),
    exit: cn.exit,
    nuclei: cn.nuclei.join(', '),
    reflex: cn.reflexes.join(', ') || 'None',
    lesion: cn.lesionFindings,
    hy: cn.highYield,
    citationIds: cn.citationIds,
  }));
}

export function getAutonomicData() {
  const mapDiv = (div) => ({
    name: div.division === 'sympathetic' ? 'Sympathetic (Thoracolumbar)' : 'Parasympathetic (Craniosacral)',
    outflow: div.outflow,
    pre: `${div.preganglionicNT.includes('Long') ? 'Long' : 'Short'} preganglionic (${div.preganglionicNT})`,
    post: `${div.postganglionicNT.includes('Long') ? 'Long' : 'Short'} postganglionic (${div.postganglionicNT})`,
    chain: div.ganglia.join(', '),
    effects: div.effects,
    clinical: div.clinicalConditions,
    citationIds: div.citationIds,
  });
  return {
    sympathetic: mapDiv(KB.autonomics.sympathetic),
    parasympathetic: mapDiv(KB.autonomics.parasympathetic),
    receptors: KB.receptors.map(r => ({
      name: r.name,
      location: r.location,
      effect: r.effect,
      mechanism: r.mechanism,
    })),
  };
}

export function getBrainRegionData() {
  const regions = {};
  for (const br of KB.brainRegions) {
    const key = br.id.replace('region_', '');
    regions[key] = {
      name: br.name,
      color: getColorForRegion(br.id),
      areas: br.areas.map(a => ({
        name: a.name,
        detail: a.detail + (a.brodmannArea ? ` (Brodmann area ${a.brodmannArea})` : ''),
      })),
      clinical: br.clinicalCorrelations,
      citationIds: br.citationIds,
    };
  }
  return regions;
}

export function getBrainstemSyndromeData() {
  return KB.brainstemSyndromes.map(bs => ({
    name: bs.name,
    level: bs.level,
    artery: bs.artery,
    ipsilateral: bs.ipsilateralDeficits,
    contralateral: bs.contralateralDeficits,
  }));
}

export function getQuizBank() {
  // Return from KB if present, otherwise signal to use legacy
  return KB.neuroQuizBank || null;
}

// ─── MSK App Data ──────────────────────────────────────────────────────────

export function getNerveData() {
  return KB.nerves.map(n => ({
    name: n.name,
    roots: n.roots.join('-'),
    course: n.course,
    fracture: n.commonInjuries.join(', '),
    motor: n.motorFunction.join(', '),
    sensory: n.sensoryDistribution,
    exam: `Injury findings for ${n.name}`,
    icon: getNerveIcon(n.id),
    citationIds: n.citationIds,
  }));
}

export function getDermatomeMap() {
  const map = {};
  for (const nr of KB.nerveRoots) {
    map[nr.id] = nr.dermatome;
  }
  return map;
}

export function getMyotomeMap() {
  const map = {};
  for (const nr of KB.nerveRoots) {
    if (nr.myotome) map[nr.id] = nr.myotome;
  }
  return map;
}

export function getReflexMap() {
  const map = {};
  for (const nr of KB.nerveRoots) {
    if (nr.reflex) map[nr.id] = nr.reflex;
  }
  return map;
}

export function getCompartmentData() {
  return KB.compartments.map(c => ({
    region: c.region,
    muscles: c.muscles,
    nerve: c.nerve,
    artery: c.artery,
    action: c.action,
    syndrome: c.compartmentSyndromeFindings,
  }));
}

// ─── Shared Helpers ────────────────────────────────────────────────────────

export function getCitations() {
  return KB.citations || [];
}

export function getKBVersion() {
  return KB.version;
}

// ─── Internal Helpers ──────────────────────────────────────────────────────

function getColorForTract(id) {
  const colors = {
    'tract_dorsal_column': '#5B8A9A',
    'tract_spinothalamic': '#C97070',
    'tract_corticospinal': '#7B68AE',
    'tract_spinocerebellar': '#6BAF7B',
  };
  return colors[id] || '#888';
}

function getColorForRegion(id) {
  const colors = {
    'region_frontal': '#9EC8CF',
    'region_parietal': '#AEBBD0',
    'region_temporal': '#C9BFD5',
    'region_occipital': '#B8D6C2',
    'region_thalamus': '#D7C3CF',
    'region_basal_ganglia': '#E8E1B3',
  };
  return colors[id] || '#888';
}

function getNerveIcon(id) {
  const icons = {
    'nerve_radial': '🤚', 'nerve_median': '✋', 'nerve_ulnar': '🤏',
    'nerve_axillary': '💪', 'nerve_musculocutaneous': '💪',
    'nerve_femoral': '🦵', 'nerve_sciatic': '🦶', 'nerve_common_peroneal': '🦶',
  };
  return icons[id] || '🔵';
}

function getLesionRegions(id) {
  const regionMap = {
    'lesion_brown_sequard': ['left-lateral', 'left-posterior', 'left-anterior'],
    'lesion_central_cord': ['center'],
    'lesion_anterior_cord': ['anterior-bilateral'],
    'lesion_tabes_dorsalis': ['posterior'],
    'lesion_b12_deficiency': ['posterior', 'lateral-bilateral'],
    'lesion_syringomyelia': ['center'],
  };
  return regionMap[id] || [];
}

function getOrdinalSuffix(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
