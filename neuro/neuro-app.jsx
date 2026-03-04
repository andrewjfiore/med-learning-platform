/* Generated from shared Knowledge Base v1.0.0 (2026-02-28)
 * Source: med-learning-platform/shared/knowledge-base.json
 * Run: node build.js to regenerate
 */
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

/* ───────── SM-2 Spaced Repetition Engine ─────────
 * Based on SuperMemo-2 algorithm (Wozniak, 1987).
 * Card state: { interval, repetitions, easeFactor, dueDate }
 * Quality: 0-5 (0-2 = fail, 3-5 = pass)
 * ─────────────────────────────────────────────── */
function sm2Update(card, quality) {
  const q = Math.min(5, Math.max(0, quality));
  let { interval = 0, repetitions = 0, easeFactor = 2.5 } = card || {};
  if (q >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  const dueDate = Date.now() + interval * 24 * 60 * 60 * 1000;
  return { interval, repetitions, easeFactor, dueDate };
}

function getSmCards() {
  try { return JSON.parse(localStorage.getItem("neuro_sm2") || "{}"); } catch { return {}; }
}
function saveSmCards(cards) {
  try { localStorage.setItem("neuro_sm2", JSON.stringify(cards)); } catch {} 
}
function getDueCards(allCards, quizBank) {
  const now = Date.now();
  return quizBank.filter(q => {
    const card = allCards[q.id || q.q];
    return !card || !card.dueDate || card.dueDate <= now;
  });
}
/* ─────────────────────────────────────────────── */

/* ───────── CITATION FOOTER (Generated from shared KB) ───────── */
const CITATIONS = [
  {
    "id": "fa2024",
    "source": "First Aid for the USMLE Step 1 2024",
    "page": "various"
  },
  {
    "id": "statpearls-dcml",
    "source": "StatPearls: Neuroanatomy, Posterior Column",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK507888/"
  },
  {
    "id": "statpearls-cst",
    "source": "StatPearls: Neuroanatomy, Corticospinal Cord Tract",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK535423/"
  },
  {
    "id": "statpearls-pyramid",
    "source": "StatPearls: Neuroanatomy, Pyramidal Tract Lesions",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK540976/"
  },
  {
    "id": "kenhub-dcml",
    "source": "Kenhub: DCML Pathway",
    "url": "https://www.kenhub.com/en/library/anatomy/posterior-column-medial-lemniscus-pathway"
  },
  {
    "id": "kenhub-cst",
    "source": "Kenhub: Pyramidal Tracts",
    "url": "https://www.kenhub.com/en/library/anatomy/corticobulbar-corticospinal-pathways"
  },
  {
    "id": "physiopedia-dcml",
    "source": "Physiopedia: DCML Pathway",
    "url": "https://www.physio-pedia.com/Dorsal_Column_Medial_Lemniscal_Pathway"
  },
  {
    "id": "physiopedia-cst",
    "source": "Physiopedia: Corticospinal Tract",
    "url": "https://www.physio-pedia.com/Corticospinal_Tract"
  },
  {
    "id": "teachme-ascending",
    "source": "TeachMeAnatomy: Ascending Tracts",
    "url": "https://teachmeanatomy.info/neuroanatomy/pathways/ascending-tracts-sensory/"
  },
  {
    "id": "statpearls-stt",
    "source": "StatPearls: Neuroanatomy, Spinothalamic Tract",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK507824/"
  },
  {
    "id": "statpearls-sct",
    "source": "StatPearls: Neuroanatomy, Spinocerebellar Tract",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK539866/"
  },
  {
    "id": "statpearls-cn",
    "source": "StatPearls: Cranial Nerve series",
    "url": "https://www.ncbi.nlm.nih.gov/books/"
  },
  {
    "id": "netter",
    "source": "Netter's Atlas of Human Anatomy, 8th ed.",
    "page": "various"
  },
  {
    "id": "moore-anatomy",
    "source": "Moore's Clinically Oriented Anatomy, 9th ed.",
    "page": "various"
  },
  {
    "id": "statpearls-brownsequard",
    "source": "StatPearls: Brown-Sequard Syndrome",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK499944/"
  },
  {
    "id": "statpearls-syringomyelia",
    "source": "StatPearls: Syringomyelia",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK537111/"
  },
  {
    "id": "statpearls-wallenb",
    "source": "StatPearls: Wallenberg Syndrome",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK532297/"
  },
  {
    "id": "orthobullets",
    "source": "Orthobullets.com",
    "url": "https://www.orthobullets.com/"
  },
  {
    "id": "hopkinsmsk",
    "source": "Johns Hopkins Orthopedic Surgery",
    "url": "https://www.hopkinsmedicine.org/orthopaedic-surgery"
  },
  {
    "id": "statpearls-acl",
    "source": "StatPearls: ACL Injuries",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK499848/"
  },
  {
    "id": "statpearls-carpal",
    "source": "StatPearls: Carpal Tunnel Syndrome",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK448179/"
  },
  {
    "id": "statpearls-caudaeq",
    "source": "StatPearls: Cauda Equina Syndrome",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK559278/"
  }
];

const CitationFooter = ({ citationIds = [] }) => {
  if (!citationIds || citationIds.length === 0) return null;
  const citeMap = {};
  for (const c of CITATIONS) citeMap[c.id] = c;
  const refs = citationIds.map(id => citeMap[id]).filter(Boolean);
  if (refs.length === 0) return null;
  return (
    <div style={{ marginTop: 12, padding: "8px 12px", background: "rgba(0,0,0,0.02)", borderRadius: 8, borderLeft: "3px solid #AEBBD0" }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>Sources</div>
      {refs.map((r, i) => (
        <div key={i} style={{ fontSize: 11, color: "#666", lineHeight: 1.4 }}>
          {r.url ? <a href={r.url} target="_blank" rel="noopener" style={{ color: "#5A7D8F", textDecoration: "none" }}>{r.source}</a> : r.source}
          {r.page ? ` (${r.page})` : ""}
        </div>
      ))}
    </div>
  );
};
const KB_VERSION = "1.0.0";


/* ───────────────────────────── CONSTANTS & DATA ───────────────────────────── */
const COLORS = {
  teal: "#9EC8CF", blue: "#AEBBD0", lavender: "#C9BFD5", pink: "#D7C3CF",
  blush: "#E0C3C3", beige: "#E6D2B8", paleYellow: "#E8E1B3", sage: "#B8D6C2",
  text: "#1F2933", textLight: "#4A5568", bg: "#F7F5F0", white: "#FFFFFF",
  accent: "#5B8A9A", accentDark: "#3D6B7A", success: "#6BAF7B", error: "#C97070",
  gold: "#D4A855", xpBar: "#7CB5BF",
};

const FONTS = `'DM Sans', 'Nunito', sans-serif`;

/* ───────── TRACT DATA ───────── */
/* ───────── TRACT DATA (Generated from shared KB v1.0.0, 14 tracts) ───────── */
const TRACTS = {
  "dorsalColumns": {
    "name": "Dorsal Columns (DCML)",
    "short": "DCML",
    "color": "#5B8A9A",
    "origin": "Peripheral sensory neurons (1st order) → dorsal root ganglia",
    "decussation": "Internal arcuate fibers (Caudal medulla)",
    "synapses": "1: DRG → nucleus gracilis (legs, below T6) / nucleus cuneatus (arms, above T6) in medulla. 2: Medulla nuclei → VPL thalamus (via medial lemniscus). 3: VPL thalamus → primary somatosensory cortex (postcentral gyrus)",
    "function": "Fine touch, Vibration, Proprioception, Two-point discrimination",
    "lesion": "IPSILATERAL: Loss of fine touch, vibration, proprioception below lesion level",
    "diseases": [
      "Tabes dorsalis (tertiary syphilis)",
      "B12 deficiency (subacute combined degeneration)",
      "Friedreich ataxia"
    ],
    "highYield": "Romberg sign positive. Gracilis = legs (medial). Cuneatus = arms (lateral). Tests: tuning fork (vibration), monofilament (fine touch)",
    "position": "posterior"
  },
  "spinothalamic": {
    "name": "Spinothalamic Tract (ALS)",
    "short": "STT",
    "color": "#C97070",
    "origin": "Peripheral nociceptors/thermoreceptors → DRG → dorsal horn",
    "decussation": "Anterior white commissure (Anterior white commissure, 1-2 levels above entry)",
    "synapses": "1: DRG → dorsal horn (substantia gelatinosa, Rexed laminae I-II). 2: Dorsal horn → VPL thalamus (crosses via anterior white commissure). 3: VPL thalamus → somatosensory cortex",
    "function": "Pain (lateral STT), Temperature (lateral STT), Crude touch (anterior STT), Pressure (anterior STT)",
    "lesion": "CONTRALATERAL: Loss of pain/temperature 1-2 levels below lesion",
    "diseases": [
      "Syringomyelia (bilateral cape-like distribution)",
      "Anterior cord syndrome",
      "Brown-Séquard syndrome (contralateral loss)"
    ],
    "highYield": "Decussates at anterior white commissure. Somatotopy: sacral = lateral, cervical = medial. Syringomyelia disrupts crossing fibers → bilateral loss at level",
    "position": "anterolateral"
  },
  "lateralCST": {
    "name": "Lateral Corticospinal Tract",
    "short": "LCST",
    "color": "#7B68AE",
    "origin": "Primary motor cortex (precentral gyrus) → Betz cells",
    "decussation": "Pyramidal decussation (85-90% of CST fibers) (Caudal medulla)",
    "synapses": "1: UMN: Motor cortex → anterior horn (contralateral). 2: LMN: Anterior horn → skeletal muscle",
    "function": "Voluntary skilled distal limb movement (fine motor)",
    "lesion": "IPSILATERAL: UMN signs below lesion: spasticity, hyperreflexia, Babinski+, clonus (ipsilateral because tract already crossed)",
    "diseases": [
      "ALS",
      "MS",
      "Stroke",
      "B12 deficiency"
    ],
    "highYield": "85-90% of CST. Crosses at pyramidal decussation. Path: corona radiata → posterior limb internal capsule → cerebral peduncle → basis pontis → medullary pyramids → decussation. Controls fine distal movements.",
    "position": "lateral"
  },
  "anteriorCST": {
    "name": "Anterior Corticospinal Tract",
    "short": "ACST",
    "color": "#9B88CE",
    "origin": "Primary motor cortex → ipsilateral anterior funiculus",
    "decussation": "Anterior white commissure (crosses segmentally) (At level of target segment)",
    "synapses": "1: UMN: Motor cortex → anterior horn (ipsilateral, crosses at segment). 2: LMN: Anterior horn → axial/proximal muscles",
    "function": "Axial and proximal limb motor control, Bilateral postural muscles",
    "lesion": "BILATERAL: Minimal deficit (proximal/axial muscles receive bilateral innervation)",
    "diseases": [
      "Usually compensated by LCST"
    ],
    "highYield": "10-15% of CST. Does NOT cross at pyramidal decussation — stays ipsilateral, crosses at segmental level. Controls proximal/axial muscles. Small clinical significance alone.",
    "position": "anterior"
  },
  "dorsalSCT": {
    "name": "Dorsal (Posterior) Spinocerebellar Tract",
    "short": "DSCT",
    "color": "#6BAF7B",
    "origin": "Muscle spindles/GTOs → DRG → Clarke's nucleus (C8-L2)",
    "decussation": "Ipsilateral throughout (None)",
    "synapses": "1: DRG → Clarke's nucleus (C8-L2). 2: Clarke's nucleus → ipsilateral ICP → cerebellar cortex",
    "function": "Unconscious proprioception from LOWER body, Ipsilateral limb position sense to cerebellum",
    "lesion": "IPSILATERAL: Ipsilateral limb ataxia, dysmetria",
    "diseases": [
      "Friedreich ataxia",
      "Spinocerebellar ataxias"
    ],
    "highYield": "Enters cerebellum via ICP (inferior cerebellar peduncle). Clarke's nucleus C8-L2. For levels ABOVE C8 → cuneocerebellar tract (equivalent). Carries lower body proprioception.",
    "position": "posterolateral"
  },
  "ventralSCT": {
    "name": "Ventral (Anterior) Spinocerebellar Tract",
    "short": "VSCT",
    "color": "#4BAF6B",
    "origin": "Spinal border cells → crosses twice (net ipsilateral)",
    "decussation": "Anterior white commissure (1st cross), then SCP (2nd cross) (Double cross — at cord level AND at cerebellum)",
    "synapses": "1: Spinal border cells → cross in cord. 2: Ascend → SCP → cross again in cerebellum (net ipsilateral)",
    "function": "Unconscious proprioception from LOWER body, Whole-limb movement coordination feedback",
    "lesion": "IPSILATERAL: Ipsilateral coordination deficit (net ipsilateral due to double cross)",
    "diseases": [
      "Friedreich ataxia"
    ],
    "highYield": "Enters cerebellum via SCP (superior cerebellar peduncle). Double cross = net ipsilateral. Monitors entire lower limb movements vs DSCT which monitors individual muscles.",
    "position": "anterolateral"
  },
  "rubrospinal": {
    "name": "Rubrospinal Tract",
    "short": "RST",
    "color": "#CC7070",
    "origin": "Red nucleus (midbrain tegmentum)",
    "decussation": "Ventral tegmental decussation (Midbrain)",
    "synapses": "1: Red nucleus → crosses in midbrain → descends in lateral funiculus. 2: Lateral cord → interneurons → LMN",
    "function": "Facilitates flexor motor neurons, Upper limb motor control (rudimentary in humans)",
    "lesion": "CONTRALATERAL: Minimal in humans; may contribute to flexor posturing (decorticate)",
    "diseases": [
      "Decorticate posturing (flexion) — red nucleus above lesion intact"
    ],
    "highYield": "Runs alongside LCST in lateral funiculus. Clinically minor in humans vs animals. Red nucleus receives cerebellar and cortical input. Decorticate posture: flexion of upper limbs (rubrospinal intact).",
    "position": "lateral"
  },
  "lateralReticulospinal": {
    "name": "Lateral (Medullary) Reticulospinal Tract",
    "short": "Lat-RetST",
    "color": "#D4A870",
    "origin": "Medullary reticular formation",
    "decussation": "Descends in lateral funiculus (Bilateral (mostly ipsilateral))",
    "synapses": "1: Medullary reticular formation → lateral funiculus → interneurons",
    "function": "Inhibits extensor motor neurons, Facilitates flexor reflexes, Modulates muscle tone",
    "lesion": "IPSILATERAL: Loss of extensor inhibition → contributes to spasticity",
    "diseases": [
      "Spasticity (loss of inhibition)",
      "Decerebrate posturing"
    ],
    "highYield": "Inhibitory to extensors. Loss → unopposed extensor tone (contributes to UMN spasticity pattern). Works opposite to medial (pontine) reticulospinal.",
    "position": "lateral"
  },
  "medialReticulospinal": {
    "name": "Medial (Pontine) Reticulospinal Tract",
    "short": "Med-RetST",
    "color": "#B4A870",
    "origin": "Pontine reticular formation",
    "decussation": "Descends in anterior funiculus (Ipsilateral)",
    "synapses": "1: Pontine reticular formation → anterior funiculus → interneurons/LMN",
    "function": "Facilitates extensor motor neurons, Axial posture maintenance, Antigravity muscles",
    "lesion": "IPSILATERAL: Reduced extensor tone",
    "diseases": [
      "Decerebrate posturing (pontine reticulospinal intact below lesion)"
    ],
    "highYield": "Excitatory to extensors (antigravity). Decerebrate posture: extension of all limbs = pontine reticulospinal unopposed when cortical/rubrospinal influence lost. Pontine above medullary.",
    "position": "anterior"
  },
  "vestibulospinal": {
    "name": "Vestibulospinal Tract",
    "short": "VeST",
    "color": "#5BAACC",
    "origin": "Lateral vestibular nucleus (Deiters' nucleus)",
    "decussation": "Descends in anterior funiculus (Ipsilateral)",
    "synapses": "1: Lateral vestibular nucleus → anterior funiculus → extensor LMN",
    "function": "Facilitates ipsilateral extensors, Balance and postural adjustments, Head/neck stabilization",
    "lesion": "IPSILATERAL: Imbalance, falling toward lesion side",
    "diseases": [
      "Vestibular disorders",
      "Contributes to decerebrate posturing"
    ],
    "highYield": "Lateral VST: whole cord, excites extensors. Medial VST: cervical only, head position (via MLF). Important for postural reflexes and righting responses.",
    "position": "anterior"
  },
  "tectospinal": {
    "name": "Tectospinal Tract",
    "short": "TeST",
    "color": "#CC8888",
    "origin": "Superior colliculus (midbrain tectum)",
    "decussation": "Dorsal tegmental decussation (Midbrain)",
    "synapses": "1: Superior colliculus → crosses in midbrain → descends in anterior funiculus (cervical only)",
    "function": "Reflexive head turning toward visual/auditory stimuli, Only reaches cervical cord",
    "lesion": "CONTRALATERAL: Impaired reflex orientation to stimuli (minor)",
    "diseases": [
      "Parinaud syndrome (dorsal midbrain — affects superior colliculus)"
    ],
    "highYield": "Only descends to cervical levels. Mediates reflex head turning toward stimuli. Superior colliculus = visual reflexes. Inferior colliculus = auditory relay.",
    "position": "anterior"
  },
  "lissauer": {
    "name": "Lissauer's Tract (Dorsolateral Fasciculus)",
    "short": "Lissauer",
    "color": "#E8A060",
    "origin": "Small-diameter pain/temperature afferents (Aδ and C fibers)",
    "decussation": "Fibers ascend/descend 1-2 segments before entering dorsal horn (None at this level)",
    "synapses": "1: Dorsal root entry → ascend/descend 1-2 segments in Lissauer's tract → synapse in substantia gelatinosa (Rexed II)",
    "function": "Short relay zone for pain/temperature fibers before entering dorsal horn, Allows spread across 1-2 segments",
    "lesion": "IPSILATERAL: Segmental loss of pain/temperature at that level",
    "diseases": [
      "Relevant in syringomyelia progression"
    ],
    "highYield": "Located at dorsolateral tip of dorsal horn. Pain fibers travel 1-2 segments here before synapsing → this is why STT loss starts 1-2 levels below lesion. Gate control theory: large fibers in dorsal columns can inhibit pain transmission here.",
    "position": "posterolateral"
  },
  "fasciculusProprius": {
    "name": "Fasciculus Proprius",
    "short": "FP",
    "color": "#A09888",
    "origin": "Spinal cord interneurons (surrounds gray matter)",
    "decussation": "Immediately surrounds gray matter (Segmental (short intersegmental connections))",
    "synapses": "1: Interneurons → short ascending/descending connections between adjacent segments",
    "function": "Intersegmental reflexes, Coordination between spinal segments, Propriospinal pathways",
    "lesion": "BILATERAL: Loss of intersegmental spinal reflexes",
    "diseases": [
      "Spinal cord injury — disrupts intersegmental coordination"
    ],
    "highYield": "Surrounds gray matter like a collar. Short propriospinal neurons coordinate reflexes across segments. Important for rhythmic activities (locomotion CPG).",
    "position": "pericentral"
  },
  "cuneocerebellar": {
    "name": "Cuneocerebellar Tract",
    "short": "CCT",
    "color": "#8FCF9F",
    "origin": "Lateral cuneate nucleus (medulla) — upper body equivalent of DSCT",
    "decussation": "Ipsilateral via ICP (None)",
    "synapses": "1: Upper body (above C8) proprioceptors → cuneate fasciculus → lateral cuneate nucleus. 2: Lateral cuneate nucleus → ICP → cerebellum",
    "function": "Unconscious proprioception from UPPER body (above C8), Upper limb equivalent of DSCT",
    "lesion": "IPSILATERAL: Upper limb ataxia",
    "diseases": [
      "Same as DSCT pathology"
    ],
    "highYield": "Clarke's nucleus only C8-L2, so upper body (above C8) uses cuneocerebellar tract instead. Same function as DSCT but for arms/upper trunk. Enters via ICP like DSCT.",
    "position": "posterolateral"
  }
};

/* ───────── LESION DATA ───────── */
/* ───────── LESION DATA (Generated from shared KB v1.0.0) ───────── */
const LESIONS = {
  "hemisection": {
    "name": "Brown-Séquard Syndrome",
    "aka": "Hemisection syndrome",
    "description": "Lateral hemisection of spinal cord (penetrating trauma, tumor)",
    "deficits": [
      {
        "type": "motor",
        "side": "ipsilateral",
        "detail": "UMN signs below lesion"
      },
      {
        "type": "fine_touch",
        "side": "ipsilateral",
        "detail": "Loss of DCML below lesion"
      },
      {
        "type": "pain_temp",
        "side": "contralateral",
        "detail": "Loss 1-2 levels below lesion"
      },
      {
        "type": "lmn",
        "side": "ipsilateral",
        "detail": "LMN signs at level of lesion only"
      }
    ],
    "regions": [
      "left-lateral",
      "left-posterior",
      "left-anterior"
    ]
  },
  "centralCord": {
    "name": "Central Cord Syndrome",
    "aka": "Syringomyelia pattern",
    "description": "Central canal damage (hyperextension in elderly with spondylosis, syrinx in young)",
    "deficits": [
      {
        "type": "motor",
        "side": "bilateral",
        "detail": "Upper extremity > lower extremity weakness (due to somatotopy of CST)"
      },
      {
        "type": "pain_temp",
        "side": "bilateral",
        "detail": "Cape-like loss at level (anterior white commissure disruption)"
      },
      {
        "type": "fine_touch",
        "side": "spared",
        "detail": "DCML relatively preserved (posterior location)"
      }
    ],
    "regions": [
      "center"
    ]
  },
  "anteriorCord": {
    "name": "Anterior Cord Syndrome",
    "aka": "Anterior spinal artery occlusion",
    "description": "Anterior 2/3 ischemia from anterior spinal artery occlusion, sparing dorsal columns",
    "deficits": [
      {
        "type": "motor",
        "side": "bilateral",
        "detail": "Complete paralysis below lesion"
      },
      {
        "type": "pain_temp",
        "side": "bilateral",
        "detail": "Complete loss below lesion"
      },
      {
        "type": "fine_touch",
        "side": "spared",
        "detail": "Preserved fine touch, vibration, proprioception (posterior spinal artery supply)"
      }
    ],
    "regions": [
      "anterior-bilateral"
    ]
  },
  "tabesDorsalis": {
    "name": "Tabes Dorsalis",
    "aka": "Posterior column syndrome",
    "description": "Tertiary syphilis → demyelination of dorsal columns and dorsal roots",
    "deficits": [
      {
        "type": "fine_touch",
        "side": "bilateral",
        "detail": "Loss of proprioception, vibration, fine touch"
      },
      {
        "type": "motor",
        "side": "spared",
        "detail": "Motor function preserved"
      },
      {
        "type": "pain_temp",
        "side": "spared",
        "detail": "Pain/temperature preserved"
      },
      {
        "type": "other",
        "side": "bilateral",
        "detail": "Sensory ataxia, Romberg+, Argyll Robertson pupils, lancinating pains"
      }
    ],
    "regions": [
      "posterior"
    ]
  },
  "b12Deficiency": {
    "name": "Subacute Combined Degeneration",
    "aka": "B12 deficiency myelopathy",
    "description": "Demyelination of dorsal columns + lateral corticospinal tracts",
    "deficits": [
      {
        "type": "fine_touch",
        "side": "bilateral",
        "detail": "Loss of vibration, proprioception"
      },
      {
        "type": "motor",
        "side": "bilateral",
        "detail": "UMN signs — spastic paraparesis"
      },
      {
        "type": "other",
        "side": "bilateral",
        "detail": "Megaloblastic anemia, peripheral neuropathy, dementia"
      }
    ],
    "regions": [
      "posterior",
      "lateral-bilateral"
    ]
  },
  "syringomyelia": {
    "name": "Syringomyelia",
    "aka": "Central canal syrinx",
    "description": "Fluid-filled cavity expanding in central canal, often cervical. Associated with Chiari I malformation.",
    "deficits": [
      {
        "type": "pain_temp",
        "side": "bilateral",
        "detail": "Cape-like loss of pain/temp at level of syrinx (crossing STT fibers disrupted)"
      },
      {
        "type": "fine_touch",
        "side": "spared",
        "detail": "Preserved initially (dorsal columns spared)"
      },
      {
        "type": "motor",
        "side": "bilateral",
        "detail": "Late: LMN signs at level (anterior horn), UMN below (lateral CST) as syrinx expands"
      }
    ],
    "regions": [
      "center"
    ]
  }
};

/* ───────── AUTONOMIC DATA ───────── */
/* ───────── AUTONOMIC DATA (Generated from shared KB v1.0.0) ───────── */
const AUTONOMIC = {
  "sympathetic": {
    "name": "Sympathetic (Thoracolumbar)",
    "outflow": "T1-L2 (intermediolateral cell column)",
    "pre": "ACh → nicotinic receptors at ganglia",
    "post": "NE → adrenergic receptors (except sweat glands → ACh muscarinic)",
    "chain": "Paravertebral sympathetic chain, Celiac ganglion, Superior mesenteric ganglion, Inferior mesenteric ganglion",
    "effects": [
      {
        "organ": "Heart",
        "effect": "↑ HR, ↑ contractility",
        "receptor": "β1"
      },
      {
        "organ": "Blood vessels",
        "effect": "Vasoconstriction (most)",
        "receptor": "α1"
      },
      {
        "organ": "Lungs",
        "effect": "Bronchodilation",
        "receptor": "β2"
      },
      {
        "organ": "Pupils",
        "effect": "Mydriasis (dilator pupillae)",
        "receptor": "α1"
      },
      {
        "organ": "GI",
        "effect": "↓ motility, sphincter contraction",
        "receptor": "α/β"
      },
      {
        "organ": "Adrenal medulla",
        "effect": "Epi + NE release (preganglionic directly)",
        "receptor": "Nicotinic"
      }
    ],
    "clinical": [
      "Pheochromocytoma",
      "Horner syndrome (ptosis, miosis, anhidrosis)",
      "Sympathectomy for hyperhidrosis"
    ]
  },
  "parasympathetic": {
    "name": "Parasympathetic (Craniosacral)",
    "outflow": "CN III, VII, IX, X + S2-S4",
    "pre": "ACh → nicotinic at ganglion",
    "post": "ACh → muscarinic (M1-M3)",
    "chain": "Ciliary (CN III), Pterygopalatine (CN VII), Submandibular (CN VII), Otic (CN IX), Organ wall ganglia (CN X, S2-S4)",
    "effects": [
      {
        "organ": "Heart",
        "effect": "↓ HR (vagus)",
        "receptor": "M2"
      },
      {
        "organ": "Lungs",
        "effect": "Bronchoconstriction, ↑ secretions",
        "receptor": "M3"
      },
      {
        "organ": "Pupils",
        "effect": "Miosis (sphincter pupillae)",
        "receptor": "M3"
      },
      {
        "organ": "GI",
        "effect": "↑ motility, ↑ secretions",
        "receptor": "M3"
      },
      {
        "organ": "Bladder",
        "effect": "Detrusor contraction (voiding)",
        "receptor": "M3"
      },
      {
        "organ": "Glands",
        "effect": "↑ secretion (lacrimal, salivary)",
        "receptor": "M3"
      }
    ],
    "clinical": [
      "Vagal syncope",
      "Atropine poisoning (anti-muscarinic)",
      "Pilocarpine for glaucoma (M3 agonist)"
    ]
  },
  "receptors": [
    {
      "name": "α1",
      "location": "Vascular smooth muscle, pupil dilator, bladder sphincter",
      "effect": "Vasoconstriction, mydriasis, urinary retention",
      "mechanism": "Gq → IP3/DAG → ↑Ca²⁺"
    },
    {
      "name": "α2",
      "location": "Presynaptic nerve terminals, CNS",
      "effect": "↓ NE release, ↓ sympathetic outflow",
      "mechanism": "Gi → ↓cAMP"
    },
    {
      "name": "β1",
      "location": "Heart, JG cells of kidney",
      "effect": "↑ HR, ↑ contractility, ↑ renin",
      "mechanism": "Gs → ↑cAMP"
    },
    {
      "name": "β2",
      "location": "Bronchial smooth muscle, uterus, vasculature",
      "effect": "Bronchodilation, vasodilation, tocolysis",
      "mechanism": "Gs → ↑cAMP"
    },
    {
      "name": "M1",
      "location": "CNS, gastric parietal cells",
      "effect": "↑ gastric acid, CNS excitation",
      "mechanism": "Gq → IP3/DAG"
    },
    {
      "name": "M2",
      "location": "Heart (SA/AV nodes)",
      "effect": "↓ HR, ↓ conduction",
      "mechanism": "Gi → ↓cAMP, ↑K⁺ efflux"
    },
    {
      "name": "M3",
      "location": "Smooth muscle, glands, endothelium",
      "effect": "Contraction, secretion, NO release",
      "mechanism": "Gq → IP3/DAG"
    },
    {
      "name": "Nicotinic (Nn)",
      "location": "Autonomic ganglia, adrenal medulla",
      "effect": "Postganglionic activation, epi/NE release",
      "mechanism": "Ligand-gated Na⁺/K⁺ channel"
    },
    {
      "name": "Nicotinic (Nm)",
      "location": "Neuromuscular junction",
      "effect": "Skeletal muscle contraction",
      "mechanism": "Ligand-gated Na⁺/K⁺ channel"
    }
  ]
};

/* ───────── CRANIAL NERVE DATA ───────── */
/* ───────── CRANIAL NERVE DATA (Generated from shared KB v1.0.0) ───────── */
const CRANIAL_NERVES = [
  {
    "num": "I",
    "name": "Olfactory",
    "modality": "special sensory",
    "exit": "Cribriform plate",
    "nuclei": "Olfactory bulb",
    "reflex": "Sneeze reflex",
    "lesion": "Anosmia (frontal lobe tumor, cribriform plate fracture)",
    "hy": "Foster Kennedy syndrome: ipsilateral anosmia + optic atrophy + contralateral papilledema (olfactory groove meningioma)"
  },
  {
    "num": "II",
    "name": "Optic",
    "modality": "special sensory",
    "exit": "Optic canal",
    "nuclei": "Lateral geniculate nucleus (thalamus)",
    "reflex": "Pupillary light reflex (afferent limb)",
    "lesion": "Visual field defects depend on lesion location",
    "hy": "Marcus Gunn pupil (RAPD) = afferent pupillary defect. Optic neuritis in MS. Visual field defects: optic nerve → monocular loss; chiasm → bitemporal hemianopia; tract → contralateral homonymous hemianopia"
  },
  {
    "num": "III",
    "name": "Oculomotor",
    "modality": "motor + parasympathetic",
    "exit": "Superior orbital fissure (midbrain)",
    "nuclei": "Oculomotor nucleus, Edinger-Westphal nucleus",
    "reflex": "Pupillary light reflex (efferent), Accommodation reflex",
    "lesion": "Down-and-out eye, ptosis, mydriasis (fixed dilated pupil)",
    "hy": "PCA/PComm aneurysm → CN III compression with pupil involvement (parasympathetics run on outside). Diabetic CN III palsy → pupil SPARING (vasa nervorum ischemia affects core, spares peripheral parasympathetics)"
  },
  {
    "num": "IV",
    "name": "Trochlear",
    "modality": "motor",
    "exit": "Superior orbital fissure (dorsal midbrain)",
    "nuclei": "Trochlear nucleus (midbrain)",
    "reflex": "None",
    "lesion": "Difficulty looking down-and-in, head tilt away from lesion",
    "hy": "Only CN to exit dorsally. Longest intracranial course. Most commonly injured CN in head trauma. Superior oblique: SO4 (SO = CN IV)"
  },
  {
    "num": "V",
    "name": "Trigeminal",
    "modality": "sensory + motor",
    "exit": "V1: SOF, V2: foramen rotundum, V3: foramen ovale",
    "nuclei": "Chief sensory nucleus, Spinal nucleus of V, Mesencephalic nucleus, Motor nucleus of V",
    "reflex": "Corneal reflex (afferent V1), Jaw jerk reflex (V3)",
    "lesion": "Trigeminal neuralgia, loss of facial sensation, weakness of mastication",
    "hy": "V1 ophthalmic, V2 maxillary, V3 mandibular. Motor = muscles of mastication (masseter, temporalis, pterygoids) via V3 ONLY. Jaw deviates toward lesion side."
  },
  {
    "num": "VI",
    "name": "Abducens",
    "modality": "motor",
    "exit": "Superior orbital fissure (pontomedullary junction)",
    "nuclei": "Abducens nucleus (pons)",
    "reflex": "None",
    "lesion": "Medial deviation (cannot abduct eye), diplopia worst at distance",
    "hy": "Long intracranial course → vulnerable to raised ICP (false localizing sign). Dorello canal compression. LR6 (Lateral Rectus = CN VI)"
  },
  {
    "num": "VII",
    "name": "Facial",
    "modality": "motor + sensory + parasympathetic",
    "exit": "Internal acoustic meatus → stylomastoid foramen (pontomedullary junction)",
    "nuclei": "Facial motor nucleus, Superior salivatory nucleus, Nucleus solitarius (taste)",
    "reflex": "Corneal reflex (efferent), Stapedial reflex",
    "lesion": "LMN (Bell palsy): entire ipsilateral face. UMN: contralateral lower face only (forehead spared due to bilateral UMN innervation)",
    "hy": "LMN vs UMN distinction is HIGH YIELD. Taste anterior 2/3 tongue via chorda tympani. Chorda tympani also carries parasympathetics to submandibular/sublingual glands."
  },
  {
    "num": "VIII",
    "name": "Vestibulocochlear",
    "modality": "special sensory",
    "exit": "Internal acoustic meatus (pontomedullary junction)",
    "nuclei": "Cochlear nuclei, Vestibular nuclei",
    "reflex": "Vestibulo-ocular reflex",
    "lesion": "Sensorineural hearing loss, vertigo, nystagmus",
    "hy": "Schwannoma (acoustic neuroma) at cerebellopontine angle → CN VIII (hearing loss) + CN VII (facial weakness) + CN V (numbness). Weber/Rinne tests differentiate sensorineural vs conductive."
  },
  {
    "num": "IX",
    "name": "Glossopharyngeal",
    "modality": "motor + sensory + parasympathetic",
    "exit": "Jugular foramen (medulla)",
    "nuclei": "Nucleus ambiguus, Inferior salivatory nucleus, Nucleus solitarius",
    "reflex": "Gag reflex (afferent), Carotid sinus reflex",
    "lesion": "Loss of gag reflex (afferent), loss of taste posterior 1/3 tongue",
    "hy": "Only motor: stylopharyngeus. Parotid gland via otic ganglion. Glossopharyngeal neuralgia: severe throat/ear pain."
  },
  {
    "num": "X",
    "name": "Vagus",
    "modality": "motor + sensory + parasympathetic",
    "exit": "Jugular foramen (medulla)",
    "nuclei": "Nucleus ambiguus, Dorsal motor nucleus of vagus, Nucleus solitarius",
    "reflex": "Gag reflex (efferent), Cough reflex",
    "lesion": "Hoarseness (recurrent laryngeal nerve), uvula deviates AWAY from lesion, dysphagia",
    "hy": "Left recurrent laryngeal loops under aortic arch (longer, more vulnerable). Vagal tone → decreased HR. All intrinsic laryngeal muscles except cricothyroid (external branch of SLN). Nucleus ambiguus = motor to pharynx/larynx."
  },
  {
    "num": "XI",
    "name": "Spinal Accessory",
    "modality": "motor",
    "exit": "Jugular foramen (medulla + spinal cord C1-C5)",
    "nuclei": "Spinal accessory nucleus (C1-C5)",
    "reflex": "None",
    "lesion": "Weakness of SCM (turn head to contralateral side) and trapezius (shoulder shrug)",
    "hy": "SCM turns head contralateral → lesion = weakness turning AWAY from lesion. Trapezius = shoulder shrug/abduction >90°. Risk during posterior triangle surgery, IJV line placement."
  },
  {
    "num": "XII",
    "name": "Hypoglossal",
    "modality": "motor",
    "exit": "Hypoglossal canal (medulla)",
    "nuclei": "Hypoglossal nucleus (medulla)",
    "reflex": "None",
    "lesion": "LMN: tongue deviates TOWARD lesion ('licks the wound'), fasciculations, atrophy. UMN: tongue deviates AWAY.",
    "hy": "LMN = toward (ipsilateral genioglossus weakness). UMN = away (contralateral genioglossus unopposed). LMN signs: fasciculations, atrophy."
  }
];

/* ───────── BRAIN REGIONS DATA ───────── */
/* ───────── BRAIN REGIONS DATA (Generated from shared KB v1.0.0) ───────── */
const BRAIN_REGIONS = {
  "frontal": {
    "name": "Frontal Lobe",
    "color": "#9EC8CF",
    "areas": [
      {
        "name": "Primary Motor Cortex",
        "detail": "Precentral gyrus. Motor homunculus. UMN for voluntary movement. Somatotopy: leg medial, face lateral. Brodmann area 4."
      },
      {
        "name": "Broca's Area",
        "detail": "Dominant hemisphere (usually left). Motor speech production. Lesion → nonfluent/expressive aphasia with preserved comprehension. Brodmann area 44-45."
      },
      {
        "name": "Prefrontal Cortex",
        "detail": "Executive function, working memory, judgment, personality. Orbitofrontal: impulse control. Dorsolateral: planning. Brodmann area 9-12, 46."
      },
      {
        "name": "Frontal Eye Fields",
        "detail": "Voluntary saccades. Lesion → eyes deviate toward lesion. Seizure → eyes deviate away. Brodmann area 8."
      }
    ],
    "clinical": "ACA stroke → contralateral leg weakness, personality changes. MCA stroke → face/arm weakness, Broca's aphasia (dominant)."
  },
  "parietal": {
    "name": "Parietal Lobe",
    "color": "#AEBBD0",
    "areas": [
      {
        "name": "Primary Somatosensory Cortex",
        "detail": "Postcentral gyrus. Receives VPL (body) and VPM (face). Sensory homunculus. Brodmann area 3,1,2."
      },
      {
        "name": "Gerstmann Syndrome Area",
        "detail": "Dominant parietal. Tetrad: agraphia, acalculia, finger agnosia, left-right confusion. Brodmann area 39 (angular gyrus)."
      },
      {
        "name": "Hemispatial Neglect Area",
        "detail": "Non-dominant (usually right). Patient ignores contralateral space. Line bisection test. Brodmann area 7 (posterior parietal)."
      }
    ],
    "clinical": "Dominant: Gerstmann syndrome, apraxia. Non-dominant: hemispatial neglect, anosognosia."
  },
  "temporal": {
    "name": "Temporal Lobe",
    "color": "#C9BFD5",
    "areas": [
      {
        "name": "Primary Auditory Cortex",
        "detail": "Heschl's gyrus. Tonotopic. Bilateral input → unilateral lesion causes mild deficit. Brodmann area 41-42."
      },
      {
        "name": "Wernicke's Area",
        "detail": "Dominant posterior superior temporal. Language comprehension. Lesion → fluent/receptive aphasia (word salad, poor comprehension). Brodmann area 22."
      },
      {
        "name": "Hippocampus",
        "detail": "Memory consolidation. Bilateral damage → anterograde amnesia. Most sensitive to hypoxia. Brodmann area medial temporal."
      }
    ],
    "clinical": "HSV encephalitis → temporal lobe necrosis. Temporal lobe epilepsy → déjà vu, olfactory hallucinations."
  },
  "occipital": {
    "name": "Occipital Lobe",
    "color": "#B8D6C2",
    "areas": [
      {
        "name": "Primary Visual Cortex",
        "detail": "Calcarine sulcus. Retinotopic. Upper bank = inferior field, lower bank = superior field. Brodmann area 17."
      }
    ],
    "clinical": "PCA stroke → contralateral homonymous hemianopia with macular sparing. Bilateral → cortical blindness (Anton syndrome)."
  },
  "thalamus": {
    "name": "Thalamus",
    "color": "#D7C3CF",
    "areas": [
      {
        "name": "VPL",
        "detail": "Body sensory relay. Receives DCML + STT → projects to somatosensory cortex."
      },
      {
        "name": "VPM",
        "detail": "Face sensory relay. Receives trigeminal → projects to somatosensory cortex."
      },
      {
        "name": "LGN",
        "detail": "Vision relay. Optic tract → primary visual cortex."
      },
      {
        "name": "MGN",
        "detail": "Hearing relay. Inferior colliculus → auditory cortex."
      },
      {
        "name": "VA/VL",
        "detail": "Motor relay. Receives basal ganglia + cerebellum → motor cortex."
      }
    ],
    "clinical": "Thalamic stroke → contralateral hemisensory loss. Thalamic pain syndrome (Déjerine-Roussy)."
  },
  "basalGanglia": {
    "name": "Basal Ganglia",
    "color": "#E8E1B3",
    "areas": [
      {
        "name": "Direct Pathway",
        "detail": "Cortex → striatum (D1) → inhibit GPi → thalamus released → movement facilitated."
      },
      {
        "name": "Indirect Pathway",
        "detail": "Cortex → striatum (D2) → inhibit GPe → STN disinhibited → excite GPi → thalamus inhibited → movement suppressed."
      },
      {
        "name": "Substantia Nigra pars compacta",
        "detail": "Dopaminergic → striatum. Loss → Parkinson's. DA excites direct (D1), inhibits indirect (D2)."
      }
    ],
    "clinical": "Parkinson's: SNc loss → tremor, rigidity, bradykinesia. Huntington's: caudate atrophy → chorea. Hemiballismus: contralateral STN lesion."
  },
  "cerebellum": {
    "name": "Cerebellum",
    "color": "#6BAF7B",
    "areas": [
      { "name": "Cerebrocerebellum (Lateral)", "detail": "Largest region. Planning/coordination of limb movements. Input from cortex via middle cerebellar peduncle. Lesion → intention tremor, dysmetria, dysdiadochokinesia." },
      { "name": "Spinocerebellum (Vermis/Paravermal)", "detail": "Vermis: trunk/proximal limb coordination, gait. Paravermis: distal limb coordination. Receives proprioception via DSCT/VSCT. Lesion → truncal ataxia (vermis), limb ataxia (paravermal)." },
      { "name": "Vestibulocerebellum (Flocculonodular)", "detail": "Balance and vestibulo-ocular reflex. Input from vestibular nuclei via inferior cerebellar peduncle. Lesion → nystagmus, vertigo, truncal ataxia, wide-based gait." },
      { "name": "Deep Cerebellar Nuclei", "detail": "Dentate (largest, lateral → planning), Emboliform + Globose (interposed → limb coordination), Fastigial (medial → balance/gait). Remember: Don't Eat Greasy Food." },
      { "name": "Cerebellar Peduncles", "detail": "Superior (SCP): output to red nucleus/thalamus. Middle (MCP): largest, input from contralateral cortex. Inferior (ICP): input from spinal cord/vestibular." }
    ],
    "clinical": "Cerebellar lesions are IPSILATERAL (unlike cerebral). Alcohol → vermis atrophy → gait ataxia. Medulloblastoma in kids → 4th ventricle compression. Friedrich's ataxia → spinocerebellar degeneration."
  },
  "spinalCord": {
    "name": "Spinal Cord",
    "color": "#C97070",
    "areas": [
      { "name": "Dorsal Horn (Laminae I-VI)", "detail": "Sensory processing. Substantia gelatinosa (II): pain modulation. Nucleus proprius (III-IV): crude touch. Clarke's nucleus (VII, C8-L2): DSCT origin." },
      { "name": "Ventral Horn (Lamina IX)", "detail": "LMN cell bodies. Medial: axial/proximal muscles. Lateral: distal limb muscles (only in enlargements). Alpha motor neurons → extrafusal. Gamma → intrafusal (spindle)." },
      { "name": "Lateral Horn (T1-L2)", "detail": "Intermediolateral cell column (IML). Sympathetic preganglionic neurons. Only present T1-L2. Lesion → ipsilateral Horner syndrome (T1)." },
      { "name": "Central Canal & Commissures", "detail": "Anterior white commissure: where STT fibers decussate. Syringomyelia → central canal dilation → bilateral cape-like pain/temp loss (suspended sensory level)." },
      { "name": "Conus Medullaris & Cauda Equina", "detail": "Conus: cord terminates L1-L2 (adult). S2-S4 parasympathetics. Cauda equina: nerve roots below conus. Conus lesion → symmetric, sudden. Cauda equina → asymmetric, gradual." }
    ],
    "clinical": "Brown-Séquard (hemisection): ipsilateral motor+proprioception loss, contralateral pain/temp loss. Anterior cord: bilateral motor+pain/temp loss, preserved proprioception. Subacute combined degeneration (B12): dorsal columns + lateral CST."
  }
};

/* ───────── QUIZ QUESTIONS ───────── */
/* ───────── QUIZ BANK (Generated from shared KB v1.0.0, 144 verified items) ───────── */
const QUIZ_BANK = [
  {
    "q": "A 45-year-old male presents with loss of pain and temperature sensation on the right side below T10. Vibration and proprioception are intact. Where is the lesion?",
    "opts": [
      "Right dorsal column",
      "Left anterolateral cord",
      "Right anterolateral cord",
      "Left dorsal column"
    ],
    "correct": 1,
    "explain": "The spinothalamic tract decussates 1-2 levels above entry, so a left anterolateral lesion causes contralateral (right) loss of pain/temperature below the lesion.",
    "tract": "tract_spinothalamic"
  },
  {
    "q": "A patient with tertiary syphilis presents with positive Romberg sign, loss of proprioception, and lancinating pains. Which tract is primarily affected?",
    "opts": [
      "Spinothalamic tract",
      "Corticospinal tract",
      "Dorsal columns",
      "Spinocerebellar tract"
    ],
    "correct": 2,
    "explain": "Tabes dorsalis affects the dorsal columns, causing loss of proprioception and vibration sense. Positive Romberg sign indicates dorsal column dysfunction.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "A 60-year-old presents after a fall with weakness that is worse in the upper extremities than lower, with preserved dorsal column function. What syndrome is this?",
    "opts": [
      "Brown-Séquard",
      "Anterior cord syndrome",
      "Central cord syndrome",
      "Posterior cord syndrome"
    ],
    "correct": 2,
    "explain": "Central cord syndrome classically presents with upper > lower extremity weakness, often from hyperextension injury in elderly with cervical spondylosis. DCML is spared.",
    "tract": "lesion_central_cord"
  },
  {
    "q": "In Brown-Séquard syndrome, pain and temperature loss is found on which side relative to the lesion?",
    "opts": [
      "Ipsilateral",
      "Contralateral",
      "Bilateral",
      "Neither — pain/temp is preserved"
    ],
    "correct": 1,
    "explain": "The STT decussates 1-2 levels above entry via the anterior white commissure, so hemisection causes contralateral loss of pain/temperature.",
    "tract": "lesion_brown_sequard"
  },
  {
    "q": "Which tract decussates at the pyramidal decussation in the caudal medulla?",
    "opts": [
      "Dorsal columns",
      "Spinothalamic tract",
      "Corticospinal tract",
      "Spinocerebellar tract"
    ],
    "correct": 2,
    "explain": "The lateral corticospinal tract (85-90%) decussates at the pyramidal decussation in the caudal medulla.",
    "tract": "tract_corticospinal"
  },
  {
    "q": "A patient presents with bilateral loss of pain and temperature in a cape-like distribution across shoulders, with preserved fine touch. What is the most likely diagnosis?",
    "opts": [
      "B12 deficiency",
      "Tabes dorsalis",
      "Syringomyelia",
      "Multiple sclerosis"
    ],
    "correct": 2,
    "explain": "Syringomyelia (central canal expansion) disrupts crossing STT fibers bilaterally at the level of the syrinx, causing cape-like pain/temperature loss with preserved DCML.",
    "tract": "lesion_syringomyelia"
  },
  {
    "q": "The dorsal spinocerebellar tract enters the cerebellum via which peduncle?",
    "opts": [
      "Superior cerebellar peduncle",
      "Middle cerebellar peduncle",
      "Inferior cerebellar peduncle",
      "Cerebral peduncle"
    ],
    "correct": 2,
    "explain": "Dorsal SCT enters via the ICP (inferior cerebellar peduncle). Ventral SCT uses the SCP (superior cerebellar peduncle).",
    "tract": "tract_spinocerebellar"
  },
  {
    "q": "A 30-year-old presents with megaloblastic anemia, paresthesias, and UMN signs in the lower extremities. Which tracts are affected?",
    "opts": [
      "STT + DCML",
      "CST + DCML",
      "CST + STT",
      "SCT + CST"
    ],
    "correct": 1,
    "explain": "B12 deficiency causes subacute combined degeneration affecting dorsal columns (paresthesias, proprioception loss) and lateral corticospinal tracts (UMN signs).",
    "tract": "lesion_b12_deficiency"
  },
  {
    "q": "Anterior spinal artery occlusion spares which of the following?",
    "opts": [
      "Corticospinal tract",
      "Spinothalamic tract",
      "Dorsal columns",
      "Anterior horn cells"
    ],
    "correct": 2,
    "explain": "The anterior spinal artery supplies the anterior 2/3. The posterior 1/3 (dorsal columns) is supplied by posterior spinal arteries and is spared.",
    "tract": "lesion_anterior_cord"
  },
  {
    "q": "A CN VII LMN lesion differs from a UMN lesion because LMN lesion affects:",
    "opts": [
      "Only contralateral lower face",
      "Only ipsilateral lower face",
      "Entire ipsilateral face",
      "Entire contralateral face"
    ],
    "correct": 2,
    "explain": "LMN lesion (Bell's palsy) affects the entire ipsilateral face because forehead receives bilateral UMN input, but the LMN is the final common pathway.",
    "tract": "cn_VII"
  },
  {
    "q": "Which thalamic nucleus relays sensory information from the body to the somatosensory cortex?",
    "opts": [
      "VPM",
      "VPL",
      "LGN",
      "VA/VL"
    ],
    "correct": 1,
    "explain": "VPL receives DCML and STT input from the body. VPM receives trigeminal from the face. LGN = vision. MGN = hearing.",
    "tract": "region_thalamus"
  },
  {
    "q": "Destruction of the lateral hypothalamus results in:",
    "opts": [
      "Obesity",
      "Anorexia",
      "Diabetes insipidus",
      "Hyperthermia"
    ],
    "correct": 1,
    "explain": "Lateral hypothalamus = hunger center. Destruction → anorexia. Ventromedial = satiety center, destruction → obesity.",
    "tract": "general"
  },
  {
    "q": "A patient presents with resting tremor, cogwheel rigidity, and bradykinesia. Which structure is primarily degenerating?",
    "opts": [
      "Caudate nucleus",
      "Subthalamic nucleus",
      "Substantia nigra pars compacta",
      "Globus pallidus"
    ],
    "correct": 2,
    "explain": "Parkinson disease: degeneration of dopaminergic neurons in SNc → loss of D1 excitation (direct) and D2 inhibition (indirect pathway).",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Lateral medullary (Wallenberg) syndrome results from occlusion of which artery?",
    "opts": [
      "Anterior spinal artery",
      "PICA",
      "AICA",
      "Basilar artery"
    ],
    "correct": 1,
    "explain": "Wallenberg = PICA occlusion. Ipsilateral: facial pain/temp loss, Horner's, ataxia, dysphagia. Contralateral: body pain/temp loss.",
    "tract": "bs_wallenberg"
  },
  {
    "q": "The Papez circuit begins and ends in which structure?",
    "opts": [
      "Amygdala",
      "Cingulate gyrus",
      "Hippocampus",
      "Mammillary bodies"
    ],
    "correct": 2,
    "explain": "Papez circuit: Hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate gyrus → entorhinal cortex → hippocampus.",
    "tract": "general"
  },
  {
    "q": "Which cranial nerve is the only one to exit dorsally and has the longest intracranial course?",
    "opts": [
      "CN III",
      "CN IV",
      "CN VI",
      "CN VII"
    ],
    "correct": 1,
    "explain": "CN IV (trochlear) is the only cranial nerve to exit from the dorsal brainstem. It has the longest intracranial course and is most commonly injured in head trauma.",
    "tract": "cn_IV"
  },
  {
    "q": "A patient has a CN III palsy with pupil involvement (mydriasis). The most likely cause is:",
    "opts": [
      "Diabetic neuropathy",
      "PComm aneurysm compression",
      "Cavernous sinus thrombosis",
      "Multiple sclerosis"
    ],
    "correct": 1,
    "explain": "PComm aneurysm compresses CN III from outside → pupil involved (parasympathetics run on periphery). Diabetes → vasa nervorum ischemia → pupil SPARED (core fibers affected).",
    "tract": "cn_III"
  },
  {
    "q": "A patient speaks in short, telegraphic phrases but comprehends language well. The lesion is in:",
    "opts": [
      "Wernicke's area",
      "Broca's area",
      "Arcuate fasciculus",
      "Angular gyrus"
    ],
    "correct": 1,
    "explain": "Broca's area (BA 44-45, dominant frontal lobe) = motor speech production. Lesion → nonfluent/expressive aphasia with preserved comprehension.",
    "tract": "region_frontal"
  },
  {
    "q": "A patient has agraphia, acalculia, finger agnosia, and left-right confusion. Where is the lesion?",
    "opts": [
      "Non-dominant parietal lobe",
      "Dominant parietal lobe (angular gyrus)",
      "Frontal lobe",
      "Temporal lobe"
    ],
    "correct": 1,
    "explain": "Gerstmann syndrome = dominant parietal (angular gyrus, BA 39). Tetrad: agraphia, acalculia, finger agnosia, left-right confusion.",
    "tract": "region_parietal"
  },
  {
    "q": "A patient ignores the left side of space and does not recognize their left-sided deficit. Which area is most likely damaged?",
    "opts": [
      "Left frontal lobe",
      "Right parietal lobe",
      "Left temporal lobe",
      "Right occipital lobe"
    ],
    "correct": 1,
    "explain": "Hemispatial neglect + anosognosia = non-dominant (usually right) parietal lobe lesion.",
    "tract": "region_parietal"
  },
  {
    "q": "A patient produces fluent but nonsensical speech and cannot comprehend spoken language. The lesion is in:",
    "opts": [
      "Broca's area",
      "Wernicke's area",
      "Arcuate fasciculus",
      "Primary motor cortex"
    ],
    "correct": 1,
    "explain": "Wernicke's area (BA 22, dominant posterior superior temporal) = language comprehension. Lesion → fluent/receptive aphasia (word salad).",
    "tract": "region_temporal"
  },
  {
    "q": "A patient can speak fluently and comprehend well, but cannot repeat phrases. The lesion is in:",
    "opts": [
      "Broca's area",
      "Wernicke's area",
      "Arcuate fasciculus",
      "Angular gyrus"
    ],
    "correct": 2,
    "explain": "Arcuate fasciculus connects Wernicke's to Broca's. Lesion → conduction aphasia: fluent speech, good comprehension, poor repetition.",
    "tract": "general"
  },
  {
    "q": "Caudate nucleus atrophy with chorea is characteristic of:",
    "opts": [
      "Parkinson disease",
      "Huntington disease",
      "Wilson disease",
      "Essential tremor"
    ],
    "correct": 1,
    "explain": "Huntington disease: autosomal dominant, CAG trinucleotide repeat on chr 4. Caudate atrophy → chorea, dementia, psychiatric symptoms.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Sudden onset of wild flinging movements of one arm is most likely due to a lesion in the:",
    "opts": [
      "Caudate nucleus",
      "Putamen",
      "Contralateral subthalamic nucleus",
      "Ipsilateral substantia nigra"
    ],
    "correct": 2,
    "explain": "Hemiballismus = contralateral STN lesion (usually lacunar stroke). STN normally excites GPi to suppress movement; loss → disinhibited movement.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "After a right frontal stroke, the patient's eyes deviate:",
    "opts": [
      "To the left",
      "To the right",
      "Downward",
      "No eye deviation expected"
    ],
    "correct": 1,
    "explain": "Frontal eye fields (BA 8) drive contralateral saccades. Destructive lesion → eyes deviate TOWARD lesion (right). Seizure → eyes deviate AWAY.",
    "tract": "region_frontal"
  },
  {
    "q": "Raised intracranial pressure can cause a false-localizing CN VI palsy because:",
    "opts": [
      "CN VI has the shortest intracranial course",
      "CN VI crosses the petrous apex (Dorello canal)",
      "CN VI exits from the dorsal brainstem",
      "CN VI innervates bilateral muscles"
    ],
    "correct": 1,
    "explain": "CN VI has a long intracranial course and crosses the petrous apex in Dorello canal. Raised ICP → downward displacement → CN VI stretch → lateral rectus palsy.",
    "tract": "cn_VI"
  },
  {
    "q": "A tumor at the cerebellopontine angle most commonly affects which cranial nerves?",
    "opts": [
      "CN III and IV",
      "CN V, VII, and VIII",
      "CN IX and X",
      "CN XI and XII"
    ],
    "correct": 1,
    "explain": "Vestibular schwannoma (acoustic neuroma) at CPA → CN VIII (hearing loss, tinnitus), CN VII (facial weakness), CN V (numbness). Most common CPA tumor.",
    "tract": "cn_VIII"
  },
  {
    "q": "Horner syndrome (ptosis, miosis, anhidrosis) involves disruption of:",
    "opts": [
      "Parasympathetic fibers",
      "Sympathetic fibers",
      "CN III",
      "CN VII"
    ],
    "correct": 1,
    "explain": "Horner = sympathetic pathway disruption. 3 neuron chain: hypothalamus → C8-T2 ciliospinal center → superior cervical ganglion → eye. Causes: Pancoast tumor, carotid dissection, Wallenberg.",
    "tract": "bs_wallenberg"
  },
  {
    "q": "On exam, the uvula deviates to the right. Which CN X is damaged?",
    "opts": [
      "Right CN X",
      "Left CN X",
      "Bilateral CN X",
      "Cannot determine from uvula deviation"
    ],
    "correct": 1,
    "explain": "Uvula deviates AWAY from the lesion side. Deviation to right = left CN X palsy (left palate muscles weak, right side pulls uvula right).",
    "tract": "cn_X"
  },
  {
    "q": "A patient's tongue deviates to the left with fasciculations and atrophy on the left. This is:",
    "opts": [
      "Left UMN CN XII lesion",
      "Left LMN CN XII lesion",
      "Right UMN CN XII lesion",
      "Right LMN CN XII lesion"
    ],
    "correct": 1,
    "explain": "LMN CN XII lesion: tongue deviates TOWARD lesion ('licks the wound') with fasciculations and atrophy. UMN: deviates AWAY.",
    "tract": "cn_XII"
  },
  {
    "q": "Which receptor subtype mediates increased heart rate and contractility?",
    "opts": [
      "α1",
      "β1",
      "β2",
      "M2"
    ],
    "correct": 1,
    "explain": "β1 receptors on cardiac myocytes → Gs → ↑cAMP → ↑HR (chronotropy) and ↑contractility (inotropy). Also found on JG cells (↑renin).",
    "tract": "general"
  },
  {
    "q": "Vagal stimulation slows heart rate by activating which receptor?",
    "opts": [
      "M1",
      "M2",
      "M3",
      "Nicotinic"
    ],
    "correct": 1,
    "explain": "M2 receptors at SA/AV nodes → Gi → ↓cAMP, ↑K⁺ efflux → decreased HR and conduction velocity.",
    "tract": "general"
  },
  {
    "q": "Weber syndrome involves ipsilateral CN III palsy and contralateral hemiparesis. The lesion is in the:",
    "opts": [
      "Lateral medulla",
      "Ventral midbrain",
      "Dorsal pons",
      "Cerebellar hemisphere"
    ],
    "correct": 1,
    "explain": "Weber syndrome = ventral midbrain lesion damaging CN III fibers (ipsilateral) and cerebral peduncle/corticospinal tract (contralateral hemiparesis). PCA territory.",
    "tract": "bs_weber"
  },
  {
    "q": "An elderly patient presents with gait apraxia, urinary incontinence, and dementia. The most likely diagnosis is:",
    "opts": [
      "Alzheimer disease",
      "Normal pressure hydrocephalus",
      "Parkinson disease",
      "Frontotemporal dementia"
    ],
    "correct": 1,
    "explain": "NPH triad: 'wet (incontinence), wacky (dementia), wobbly (gait apraxia).' Communicating hydrocephalus. Treatable with VP shunt.",
    "tract": "general"
  },
  {
    "q": "A lacunar infarct causing pure motor hemiparesis most likely involves the:",
    "opts": [
      "Anterior limb of internal capsule",
      "Genu of internal capsule",
      "Posterior limb of internal capsule",
      "External capsule"
    ],
    "correct": 2,
    "explain": "Posterior limb of internal capsule contains corticospinal fibers. Lacunar infarct here → pure motor hemiparesis (face, arm, leg).",
    "tract": "general"
  },
  {
    "q": "Cerebellar lesions cause deficits that are:",
    "opts": [
      "Contralateral to the lesion",
      "Ipsilateral to the lesion",
      "Bilateral",
      "Only affect the face"
    ],
    "correct": 1,
    "explain": "Cerebellar signs are IPSILATERAL. DANISH mnemonic: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia.",
    "tract": "general"
  },
  {
    "q": "A patient loses balance when closing their eyes (positive Romberg). Which tract is dysfunctional?",
    "opts": [
      "Spinothalamic",
      "Corticospinal",
      "Dorsal columns",
      "Spinocerebellar"
    ],
    "correct": 2,
    "explain": "Romberg tests proprioception (dorsal columns). Closing eyes removes visual compensation → fall if proprioception impaired.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "A patient has loss of vibration sense in the legs but not the arms. The lesion affects:",
    "opts": [
      "Fasciculus cuneatus",
      "Fasciculus gracilis",
      "Both fasciculi",
      "Spinothalamic tract"
    ],
    "correct": 1,
    "explain": "Gracilis carries lower body (below T6). Cuneatus carries upper body (above T6). Selective leg involvement = gracilis.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "In the spinothalamic tract, sacral fibers are located:",
    "opts": [
      "Medially",
      "Laterally",
      "Anteriorly",
      "Posteriorly"
    ],
    "correct": 1,
    "explain": "STT somatotopy: sacral = lateral, cervical = medial. Important for central cord syndrome (cervical fibers damaged first → UE > LE).",
    "tract": "tract_spinothalamic"
  },
  {
    "q": "Crossing fibers of the spinothalamic tract pass through the:",
    "opts": [
      "Pyramidal decussation",
      "Anterior white commissure",
      "Internal arcuate fibers",
      "Dorsal tegmental decussation"
    ],
    "correct": 1,
    "explain": "STT 2nd order neurons cross via the anterior white commissure 1-2 levels above entry. This is disrupted in syringomyelia.",
    "tract": "tract_spinothalamic"
  },
  {
    "q": "Which is NOT an upper motor neuron sign?",
    "opts": [
      "Spasticity",
      "Hyperreflexia",
      "Fasciculations",
      "Positive Babinski"
    ],
    "correct": 2,
    "explain": "Fasciculations = LMN sign (denervated muscle fibers firing spontaneously). UMN signs: spasticity, hyperreflexia, Babinski+, clonus.",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "The anterior corticospinal tract primarily controls:",
    "opts": [
      "Fine distal limb movements",
      "Axial and proximal muscles",
      "Pain modulation",
      "Unconscious proprioception"
    ],
    "correct": 1,
    "explain": "ACST (10-15%, uncrossed) controls axial/proximal muscles. LCST (85-90%, crossed) controls fine distal movements.",
    "tract": "tract_anterior_cst"
  },
  {
    "q": "Decorticate posturing (flexion of upper extremities, extension of lower) suggests the intact structure is:",
    "opts": [
      "Pontine reticular formation",
      "Red nucleus",
      "Vestibular nuclei",
      "Cerebral cortex"
    ],
    "correct": 1,
    "explain": "Decorticate: red nucleus (midbrain) intact → rubrospinal tract facilitates upper limb flexion. Lesion above red nucleus.",
    "tract": "tract_rubrospinal"
  },
  {
    "q": "Decerebrate posturing (extension of all limbs) suggests a lesion at or below the:",
    "opts": [
      "Cortex",
      "Midbrain",
      "Pons",
      "Medulla"
    ],
    "correct": 2,
    "explain": "Decerebrate: lesion below red nucleus (at pons). Pontine reticulospinal + vestibulospinal (both extensor-facilitating) unopposed.",
    "tract": "tract_medial_reticulospinal"
  },
  {
    "q": "The vestibulospinal tract primarily facilitates:",
    "opts": [
      "Flexor muscles",
      "Extensor (antigravity) muscles",
      "Fine finger movements",
      "Pain modulation"
    ],
    "correct": 1,
    "explain": "Vestibulospinal excites extensors for postural balance. Lateral VST → whole body extensors. Medial VST → cervical (head stabilization via MLF).",
    "tract": "tract_vestibulospinal"
  },
  {
    "q": "The tectospinal tract only descends to which spinal level?",
    "opts": [
      "Thoracic",
      "Lumbar",
      "Cervical",
      "Sacral"
    ],
    "correct": 2,
    "explain": "Tectospinal tract from superior colliculus only reaches cervical cord. Mediates reflex head turning toward visual/auditory stimuli.",
    "tract": "tract_tectospinal"
  },
  {
    "q": "Lissauer's tract is clinically relevant because:",
    "opts": [
      "It carries all motor fibers",
      "Pain fibers travel 1-2 segments here before synapsing",
      "It is the main tract for proprioception",
      "It decussates at the pyramidal decussation"
    ],
    "correct": 1,
    "explain": "Pain (Aδ/C) fibers enter Lissauer's tract and travel 1-2 segments before synapsing in substantia gelatinosa. This explains why STT loss starts 1-2 levels below a lesion.",
    "tract": "tract_lissauer"
  },
  {
    "q": "Clarke's nucleus (C8-L2) gives rise to the:",
    "opts": [
      "Lateral corticospinal tract",
      "Dorsal spinocerebellar tract",
      "Spinothalamic tract",
      "Fasciculus gracilis"
    ],
    "correct": 1,
    "explain": "Clarke's nucleus is the origin of the DSCT. Present only C8-L2. Above C8, the cuneocerebellar tract serves the same function for upper body.",
    "tract": "tract_dorsal_sct"
  },
  {
    "q": "The ventral spinocerebellar tract is unique because it:",
    "opts": [
      "Never crosses the midline",
      "Crosses twice (net ipsilateral)",
      "Only carries upper body information",
      "Enters via the inferior cerebellar peduncle"
    ],
    "correct": 1,
    "explain": "VSCT crosses at cord level then crosses again entering cerebellum via SCP. Double cross = net ipsilateral. DSCT enters via ICP without crossing.",
    "tract": "tract_ventral_sct"
  },
  {
    "q": "Match: DSCT enters via ___, VSCT enters via ___",
    "opts": [
      "SCP, ICP",
      "ICP, SCP",
      "MCP, ICP",
      "ICP, MCP"
    ],
    "correct": 1,
    "explain": "DSCT → ICP (inferior cerebellar peduncle). VSCT → SCP (superior cerebellar peduncle). MCP carries pontocerebellar fibers (corticopontine pathway).",
    "tract": "tract_dorsal_sct"
  },
  {
    "q": "The motor division of CN V innervates the muscles of mastication via which branch?",
    "opts": [
      "V1 (ophthalmic)",
      "V2 (maxillary)",
      "V3 (mandibular)",
      "All three branches"
    ],
    "correct": 2,
    "explain": "Motor = V3 ONLY. Muscles of mastication: masseter, temporalis, medial/lateral pterygoids. Jaw deviates toward weak (lesion) side.",
    "tract": "cn_V"
  },
  {
    "q": "The corneal reflex tests CN V1 (afferent) and CN VII (efferent). A patient blinks on the left but not right when the right cornea is touched. Which nerve is damaged?",
    "opts": [
      "Right CN V1",
      "Right CN VII",
      "Left CN V1",
      "Left CN VII"
    ],
    "correct": 1,
    "explain": "Right cornea touched → afferent (right V1) intact (signal received). Left blinks (left VII works) but right doesn't → right CN VII efferent damaged.",
    "tract": "cn_V"
  },
  {
    "q": "The gag reflex afferent limb is CN ___ and efferent limb is CN ___",
    "opts": [
      "V, VII",
      "IX, X",
      "X, IX",
      "VII, XII"
    ],
    "correct": 1,
    "explain": "Gag reflex: afferent = CN IX (glossopharyngeal), efferent = CN X (vagus, via nucleus ambiguus → pharyngeal muscles).",
    "tract": "cn_IX"
  },
  {
    "q": "Hoarseness after thyroid surgery is most likely due to injury to:",
    "opts": [
      "External branch of SLN",
      "Recurrent laryngeal nerve",
      "Hypoglossal nerve",
      "Glossopharyngeal nerve"
    ],
    "correct": 1,
    "explain": "Recurrent laryngeal nerve (branch of CN X) innervates all intrinsic laryngeal muscles except cricothyroid. Left recurrent loops under aortic arch (longer, more vulnerable).",
    "tract": "cn_X"
  },
  {
    "q": "The sternocleidomastoid turns the head to the contralateral side. A left CN XI lesion causes weakness turning the head to the:",
    "opts": [
      "Left",
      "Right",
      "Both sides equally",
      "No head turning deficit"
    ],
    "correct": 1,
    "explain": "Left SCM turns head RIGHT. Left CN XI lesion → weak left SCM → weakness turning head to the RIGHT.",
    "tract": "cn_XI"
  },
  {
    "q": "Phenylephrine (α1 agonist) causes:",
    "opts": [
      "Bronchodilation",
      "Vasoconstriction and mydriasis",
      "Decreased heart rate",
      "Bronchconstriction"
    ],
    "correct": 1,
    "explain": "α1: Gq → IP3/DAG → ↑Ca²⁺. Vascular smooth muscle contraction (vasoconstriction), pupil dilator (mydriasis), bladder sphincter contraction.",
    "tract": "general"
  },
  {
    "q": "Albuterol (β2 agonist) treats asthma by causing:",
    "opts": [
      "Vasoconstriction",
      "Bronchoconstriction",
      "Bronchodilation",
      "Increased heart rate"
    ],
    "correct": 2,
    "explain": "β2: Gs → ↑cAMP → bronchial smooth muscle relaxation (bronchodilation). Also causes vasodilation, tocolysis.",
    "tract": "general"
  },
  {
    "q": "Atropine (muscarinic antagonist) causes all EXCEPT:",
    "opts": [
      "Tachycardia",
      "Mydriasis",
      "Decreased secretions",
      "Bronchoconstriction"
    ],
    "correct": 3,
    "explain": "Atropine blocks M receptors → tachycardia (blocks M2), mydriasis (blocks M3 on sphincter pupillae), dry mouth (blocks M3 secretion). Does NOT cause bronchoconstriction — causes bronchodilation.",
    "tract": "general"
  },
  {
    "q": "Bilateral hippocampal damage causes:",
    "opts": [
      "Retrograde amnesia only",
      "Anterograde amnesia",
      "Blindness",
      "Motor paralysis"
    ],
    "correct": 1,
    "explain": "Hippocampus = memory consolidation. Bilateral damage → inability to form new memories (anterograde amnesia). Most sensitive brain region to hypoxia.",
    "tract": "region_temporal"
  },
  {
    "q": "HSV encephalitis classically affects which brain lobe?",
    "opts": [
      "Frontal",
      "Parietal",
      "Temporal",
      "Occipital"
    ],
    "correct": 2,
    "explain": "HSV-1 has tropism for temporal lobe → hemorrhagic necrosis. Presents with fever, altered mental status, seizures, personality changes.",
    "tract": "region_temporal"
  },
  {
    "q": "A PCA stroke causes:",
    "opts": [
      "Broca's aphasia",
      "Contralateral homonymous hemianopia with macular sparing",
      "Contralateral hemiparesis",
      "Gerstmann syndrome"
    ],
    "correct": 1,
    "explain": "PCA supplies occipital lobe (primary visual cortex). Stroke → contralateral homonymous hemianopia. Macular sparing because macula has dual (MCA+PCA) supply.",
    "tract": "region_occipital"
  },
  {
    "q": "A patient denies being blind despite bilateral cortical blindness. This is:",
    "opts": [
      "Anosognosia",
      "Anton syndrome",
      "Capgras syndrome",
      "Prosopagnosia"
    ],
    "correct": 1,
    "explain": "Anton syndrome = cortical blindness (bilateral occipital) + denial of blindness. Patient confabulates visual experiences.",
    "tract": "region_occipital"
  },
  {
    "q": "Activation of the direct basal ganglia pathway results in:",
    "opts": [
      "Movement suppression",
      "Movement facilitation",
      "Tremor",
      "Ataxia"
    ],
    "correct": 1,
    "explain": "Direct: Cortex → striatum (D1) → inhibit GPi → thalamus released → cortex excited → movement facilitated. 'Direct = go.'",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "The indirect basal ganglia pathway functions to:",
    "opts": [
      "Facilitate movement",
      "Suppress unwanted movement",
      "Relay sensory information",
      "Coordinate balance"
    ],
    "correct": 1,
    "explain": "Indirect: Cortex → striatum (D2) → inhibit GPe → STN disinhibited → excite GPi → thalamus inhibited → movement suppressed. 'Indirect = stop.'",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Kayser-Fleischer rings, wing-beating tremor, and psychiatric symptoms suggest:",
    "opts": [
      "Huntington disease",
      "Wilson disease",
      "Parkinson disease",
      "Multiple sclerosis"
    ],
    "correct": 1,
    "explain": "Wilson disease: copper deposition in basal ganglia (lenticular nucleus) + liver + Descemet membrane (KF rings). AR, ATP7B gene.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Medial medullary (Dejerine) syndrome presents with the triad of:",
    "opts": [
      "Ipsilateral face numbness + contralateral body numbness + ataxia",
      "Ipsilateral tongue deviation + contralateral hemiparesis + contralateral proprioception loss",
      "Ipsilateral CN III + contralateral hemiparesis",
      "Ipsilateral CN VI/VII + contralateral hemiparesis"
    ],
    "correct": 1,
    "explain": "Dejerine = ASA to medial medulla: hypoglossal nucleus (tongue deviates to lesion), pyramid (contralateral hemiparesis), medial lemniscus (contralateral proprioception loss).",
    "tract": "bs_medial_medullary"
  },
  {
    "q": "In Wallenberg syndrome, which of the following is SPARED?",
    "opts": [
      "Pain/temperature of ipsilateral face",
      "Ipsilateral coordination",
      "Contralateral body pain/temperature",
      "Motor strength (corticospinal)"
    ],
    "correct": 3,
    "explain": "Wallenberg (lateral medulla/PICA) spares the pyramids (medial) → motor strength preserved. Affects: spinal nucleus V, ICP, nucleus ambiguus, descending sympathetics, STT.",
    "tract": "bs_wallenberg"
  },
  {
    "q": "A patient has ipsilateral lateral rectus palsy, ipsilateral facial weakness, and contralateral hemiparesis. The lesion is in the:",
    "opts": [
      "Midbrain",
      "Pons",
      "Medulla",
      "Cerebellum"
    ],
    "correct": 1,
    "explain": "Millard-Gubler = ventral pons. CN VI (lateral rectus), CN VII (facial), + corticospinal tract (contralateral hemiparesis).",
    "tract": "bs_millard_gubler"
  },
  {
    "q": "Friedreich ataxia affects which tracts?",
    "opts": [
      "DCML + LCST + spinocerebellar",
      "STT + LCST only",
      "DCML only",
      "Spinocerebellar only"
    ],
    "correct": 0,
    "explain": "Friedreich ataxia (AR, frataxin gene): degeneration of DCML (proprioception loss), LCST (weakness, Babinski+), and spinocerebellar tracts (ataxia). + hypertrophic cardiomyopathy.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "ALS is characterized by COMBINED degeneration of:",
    "opts": [
      "UMN and LMN",
      "Only UMN",
      "Only LMN",
      "Sensory and motor"
    ],
    "correct": 0,
    "explain": "ALS: UMN (lateral CST → spasticity, hyperreflexia) + LMN (anterior horn → fasciculations, atrophy). NO sensory involvement. Tongue fasciculations common.",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "Poliovirus specifically targets:",
    "opts": [
      "Dorsal column neurons",
      "Anterior horn motor neurons",
      "Corticospinal tract",
      "Spinothalamic neurons"
    ],
    "correct": 1,
    "explain": "Polio → anterior horn LMN destruction → flaccid paralysis, areflexia, muscle atrophy. Pure LMN disease. No sensory loss.",
    "tract": "general"
  },
  {
    "q": "Multiple sclerosis causes demyelination that most commonly affects which CNS white matter?",
    "opts": [
      "Optic nerve, periventricular, brainstem, spinal cord",
      "Only peripheral nerves",
      "Only the spinal cord",
      "Gray matter only"
    ],
    "correct": 0,
    "explain": "MS: periventricular plaques (Dawson fingers), optic nerve (optic neuritis), brainstem, cerebellar peduncles, spinal cord. Relapsing-remitting most common.",
    "tract": "general"
  },
  {
    "q": "A 55-year-old man presents with progressive difficulty walking. Exam shows loss of vibration/proprioception in both legs, spastic paraparesis with hyperreflexia, and bilateral Babinski. Serum methylmalonic acid and homocysteine are elevated. Which tracts are affected?",
    "opts": [
      "STT + anterior horn",
      "DCML + lateral CST",
      "Spinocerebellar + STT",
      "DCML only"
    ],
    "correct": 1,
    "explain": "Subacute combined degeneration (B12 deficiency): dorsal columns (proprioception loss) + lateral CST (UMN signs). Elevated MMA + homocysteine confirm B12 deficiency.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "A 30-year-old woman has episodic bilateral loss of pain/temperature in a cape-like distribution across shoulders and arms. Fine touch and proprioception are intact. MRI shows a central cord cavity. Diagnosis?",
    "opts": [
      "MS",
      "Syringomyelia",
      "Brown-Sequard",
      "Tabes dorsalis"
    ],
    "correct": 1,
    "explain": "Syringomyelia: central canal expansion damages crossing STT fibers in anterior white commissure. Bilateral pain/temp loss in cape distribution. Dorsal columns spared initially.",
    "tract": "tract_spinothalamic"
  },
  {
    "q": "A 65-year-old man with tertiary syphilis has a wide-based stomping gait, positive Romberg, absent knee/ankle reflexes, and Argyll Robertson pupils. Which structure is primarily affected?",
    "opts": [
      "Anterior horns",
      "Lateral columns",
      "Dorsal roots and dorsal columns",
      "Spinocerebellar tracts"
    ],
    "correct": 2,
    "explain": "Tabes dorsalis: dorsal root and dorsal column degeneration. Loss of proprioception (Romberg+, sensory ataxia), absent reflexes (lost afferent limb), Argyll Robertson pupils.",
    "tract": "tract_dorsal_column"
  },
  {
    "q": "A patient sustains a stab wound to the right side of the spinal cord at T10. Expected findings?",
    "opts": [
      "Bilateral loss of all sensation below T10",
      "Right UMN weakness + right proprioception loss + left pain/temp loss",
      "Left UMN weakness + left proprioception loss + right pain/temp loss",
      "Right LMN weakness only"
    ],
    "correct": 1,
    "explain": "Brown-Sequard hemisection: ipsilateral UMN (CST) + ipsilateral proprioception (DCML) + contralateral pain/temp (STT crossed).",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "After an MVA, bilateral motor loss and pain/temp loss below T4, but preserved proprioception and vibration. Which syndrome?",
    "opts": [
      "Central cord",
      "Posterior cord",
      "Anterior cord",
      "Complete transection"
    ],
    "correct": 2,
    "explain": "Anterior cord syndrome (anterior spinal artery): damages CST + STT but spares posterior columns (DCML intact).",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "A 70-year-old falls, hyperextends neck. Upper extremity weakness >> lower extremity weakness with bladder dysfunction. Syndrome?",
    "opts": [
      "Anterior cord",
      "Brown-Sequard",
      "Central cord",
      "Cauda equina"
    ],
    "correct": 2,
    "explain": "Central cord: hyperextension in elderly with spondylosis. UE > LE because cervical fibers medial in CST. Sacral sparing (sacral fibers most lateral).",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "A 14-year-old with progressive ataxia, hammer toes, kyphoscoliosis, and hypertrophic cardiomyopathy. GAA repeat expansion. Diagnosis?",
    "opts": [
      "Huntington",
      "Friedreich ataxia",
      "CMT",
      "MS"
    ],
    "correct": 1,
    "explain": "Friedreich ataxia (AR, frataxin, GAA): spinocerebellar + DCML + CST degeneration. Hypertrophic cardiomyopathy = leading cause of death.",
    "tract": "tract_dorsal_sct"
  },
  {
    "q": "A 60-year-old man: tongue fasciculations, hand atrophy with fasciculations, hyperreflexia in legs, bilateral Babinski. Normal sensation. Diagnosis?",
    "opts": [
      "MG",
      "GBS",
      "ALS",
      "Polio"
    ],
    "correct": 2,
    "explain": "ALS: combined UMN (hyperreflexia, Babinski) + LMN (fasciculations, atrophy). No sensory involvement. Fatal 3-5 years.",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "A child: acute asymmetric flaccid paralysis, areflexia, muscle atrophy after febrile illness. CSF pleocytosis. Sensation preserved. Target cells?",
    "opts": [
      "Schwann cells",
      "DRG neurons",
      "Anterior horn motor neurons",
      "CST axons"
    ],
    "correct": 2,
    "explain": "Poliomyelitis: anterior horn LMN destruction. Flaccid paralysis, areflexia, atrophy. Pure motor.",
    "tract": "general"
  },
  {
    "q": "A 25-year-old woman: optic neuritis, then urinary incontinence and scanning speech. Periventricular white matter lesions on MRI. Oligoclonal bands in CSF. Diagnosis?",
    "opts": [
      "ALS",
      "NMO",
      "MS",
      "GBS"
    ],
    "correct": 2,
    "explain": "MS: relapsing-remitting demyelination. Dawson fingers (periventricular). Oligoclonal bands in CSF not serum.",
    "tract": "general"
  },
  {
    "q": "A lesion at the pyramidal decussation causes:",
    "opts": [
      "Ipsilateral UMN weakness",
      "Contralateral UMN weakness",
      "Bilateral arm > leg weakness",
      "Bilateral leg > arm weakness"
    ],
    "correct": 2,
    "explain": "At pyramidal decussation, upper limb fibers cross more rostrally. Lesion here catches crossing arm fibers first.",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "Ipsilateral limb ataxia and dysmetria with a lesion in the inferior cerebellar peduncle. Tracts disrupted?",
    "opts": [
      "STT and DCML",
      "LCST and ACST",
      "DSCT and cuneocerebellar",
      "RetST and VeST"
    ],
    "correct": 2,
    "explain": "ICP carries DSCT and cuneocerebellar fibers. Lesion causes ipsilateral cerebellar ataxia.",
    "tract": "tract_dorsal_sct"
  },
  {
    "q": "Right facial weakness (entire face), loss of taste on right anterior 2/3 tongue, hyperacusis on right. Lesion?",
    "opts": [
      "Right cortex (UMN)",
      "Right CN VII (LMN)",
      "Left CN VII",
      "Right CN V"
    ],
    "correct": 1,
    "explain": "LMN CN VII (Bell's palsy): entire ipsilateral face. UMN spares forehead. Hyperacusis = stapedius paralysis.",
    "tract": "cn_VII"
  },
  {
    "q": "Left facial weakness affecting only lower face, preserved forehead wrinkling. Lesion?",
    "opts": [
      "Left CN VII",
      "Right motor cortex",
      "Left motor cortex",
      "Brainstem"
    ],
    "correct": 1,
    "explain": "UMN facial: only contralateral LOWER face (forehead has bilateral cortical input).",
    "tract": "cn_VII"
  },
  {
    "q": "Cannot abduct left eye. On leftward gaze, nystagmus of right abducting eye, impaired adduction of left eye. Convergence intact. Diagnosis?",
    "opts": [
      "Left CN VI palsy",
      "Left INO",
      "Right INO",
      "Left CN III palsy"
    ],
    "correct": 1,
    "explain": "Left INO: left MLF lesion. Impaired ADDuction ipsilateral to lesion. Convergence intact distinguishes from CN III.",
    "tract": "cn_III"
  },
  {
    "q": "Difficulty swallowing, nasal speech, uvula deviates right, absent gag on left. Nerve?",
    "opts": [
      "Left CN IX",
      "Left CN X",
      "Right CN X",
      "Left CN XII"
    ],
    "correct": 1,
    "explain": "CN X: uvula deviates AWAY from lesion (toward intact side). Left X lesion -> uvula deviates right.",
    "tract": "cn_X"
  },
  {
    "q": "Tongue protrudes and deviates left. CN XII lesion side?",
    "opts": [
      "Right",
      "Left",
      "Bilateral",
      "Cortical"
    ],
    "correct": 1,
    "explain": "Tongue deviates TOWARD the lesion (LMN XII). Left deviation = left XII. 'Lick your wound.'",
    "tract": "cn_XII"
  },
  {
    "q": "Left ear hearing loss, vertigo, tinnitus. CPA mass on MRI. Bilateral would suggest which condition?",
    "opts": [
      "NF1",
      "NF2",
      "Schwannomatosis",
      "Meningiomatosis"
    ],
    "correct": 1,
    "explain": "Vestibular schwannoma (CN VIII). Bilateral = NF2 (chromosome 22).",
    "tract": "cn_VIII"
  },
  {
    "q": "Left PICA stroke. Which is SPARED?",
    "opts": [
      "Ipsilateral Horner",
      "Contralateral body pain/temp",
      "Ipsilateral ataxia",
      "Motor strength (hemiparesis)"
    ],
    "correct": 3,
    "explain": "Wallenberg: pyramids (medial) spared. Motor intact. Affects: spinal V, ICP, nucleus ambiguus, sympathetics, STT.",
    "tract": "bs_wallenberg"
  },
  {
    "q": "Right CN III palsy (ptosis, down-and-out, dilated pupil) + left hemiparesis. Lesion?",
    "opts": [
      "Right midbrain (Weber)",
      "Right pons",
      "Left midbrain",
      "Right medulla"
    ],
    "correct": 0,
    "explain": "Weber syndrome: midbrain. CN III + cerebral peduncle (CST). Ipsilateral III + contralateral hemiparesis.",
    "tract": "bs_weber"
  },
  {
    "q": "Sudden right hemiparesis (face/arm/leg equally). CT: lacunar infarct. Location?",
    "opts": [
      "Posterior limb internal capsule",
      "Lateral medulla",
      "Occipital cortex",
      "Thalamus"
    ],
    "correct": 0,
    "explain": "Pure motor hemiparesis = posterior limb internal capsule. CST fibers packed tightly. Lenticulostriate arteries.",
    "tract": "tract_lateral_cst"
  },
  {
    "q": "Loss of pain/temp on left face and right body. Which nucleus for facial component?",
    "opts": [
      "Chief sensory V",
      "Spinal nucleus of V (ipsilateral)",
      "VPM",
      "STT"
    ],
    "correct": 1,
    "explain": "Spinal nucleus of V: ipsilateral facial pain/temp. This pattern = lateral medullary (Wallenberg).",
    "tract": "cn_V"
  },
  {
    "q": "Patient awake, conscious, but cannot move or speak. Can blink and look up only. Lesion?",
    "opts": [
      "Bilateral cortex",
      "Ventral pons",
      "Cerebellum",
      "Thalamus"
    ],
    "correct": 1,
    "explain": "Locked-in syndrome: ventral pons (bilateral CST + corticobulbar). Consciousness and vertical eye movement preserved.",
    "tract": "general"
  },
  {
    "q": "Contralateral hemiballismus. Lesion?",
    "opts": [
      "Caudate",
      "Putamen",
      "Subthalamic nucleus",
      "GP"
    ],
    "correct": 2,
    "explain": "STN lesion: hemiballismus. STN excites GPi (indirect pathway). Loss -> thalamus disinhibited -> excessive movement.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Chorea, psychiatric symptoms, AD inheritance, CAG repeat on chromosome 4. Diagnosis?",
    "opts": [
      "Friedreich",
      "Wilson",
      "Huntington",
      "PD"
    ],
    "correct": 2,
    "explain": "Huntington: AD, huntingtin, CAG repeat, chr 4. Caudate atrophy. Anticipation.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "VPL thalamic infarct -> initial numbness, then develops excruciating pain from light touch. Syndrome?",
    "opts": [
      "Central cord",
      "Dejerine-Roussy (thalamic pain)",
      "Wallenberg",
      "Syringomyelia"
    ],
    "correct": 1,
    "explain": "Dejerine-Roussy: VPL infarct -> contralateral sensory loss -> severe allodynia/central pain.",
    "tract": "general"
  },
  {
    "q": "Non-fluent speech, intact comprehension, frustrated patient. Left frontal infarct. Area?",
    "opts": [
      "Wernicke",
      "Broca",
      "Arcuate fasciculus",
      "Angular gyrus"
    ],
    "correct": 1,
    "explain": "Broca's: non-fluent, telegraphic. Comprehension intact. Patient aware. Left inferior frontal gyrus.",
    "tract": "region_frontal"
  },
  {
    "q": "Fluent but nonsensical speech, cannot comprehend, unaware of deficit. Lesion?",
    "opts": [
      "Left frontal",
      "Left superior temporal gyrus",
      "Right parietal",
      "Bilateral occipital"
    ],
    "correct": 1,
    "explain": "Wernicke's: fluent but meaningless, poor comprehension, unaware. Left superior temporal (area 22).",
    "tract": "region_temporal"
  },
  {
    "q": "Intact comprehension and fluency but cannot repeat. Lesion?",
    "opts": [
      "Broca",
      "Wernicke",
      "Arcuate fasciculus",
      "Angular gyrus"
    ],
    "correct": 2,
    "explain": "Conduction aphasia: comprehension OK + fluency OK + repetition impaired = arcuate fasciculus.",
    "tract": "general"
  },
  {
    "q": "Child with posterior fossa tumor in cerebellar vermis causing truncal ataxia. Most likely tumor?",
    "opts": [
      "Meningioma",
      "Medulloblastoma",
      "Hemangioblastoma",
      "Schwannoma"
    ],
    "correct": 1,
    "explain": "Medulloblastoma: most common malignant childhood brain tumor. Vermis -> truncal ataxia. CSF seeding.",
    "tract": "general"
  },
  {
    "q": "Right homonymous hemianopia. Lesion?",
    "opts": [
      "Right optic tract",
      "Left optic tract",
      "Left optic nerve",
      "Optic chiasm"
    ],
    "correct": 1,
    "explain": "Left optic tract lesion -> right homonymous hemianopia. Tract lesions = incongruous; cortex = congruous.",
    "tract": "cn_II"
  },
  {
    "q": "Pituitary tumor compressing optic chiasm from below. Visual field loss?",
    "opts": [
      "Binasal hemianopia",
      "Bitemporal hemianopia",
      "Right homonymous hemianopia",
      "Central scotoma"
    ],
    "correct": 1,
    "explain": "Bitemporal hemianopia: chiasm compression affects crossing (nasal) fibers.",
    "tract": "cn_II"
  },
  {
    "q": "Cannot look up, convergence-retraction nystagmus, light-near dissociation. Lesion?",
    "opts": [
      "Ventral pons",
      "Dorsal midbrain",
      "Cerebellum",
      "Medulla"
    ],
    "correct": 1,
    "explain": "Parinaud syndrome: dorsal midbrain (superior colliculus/pretectal area). Pinealoma common cause.",
    "tract": "tract_tectospinal"
  },
  {
    "q": "6-month-old: cherry-red spot, NO hepatosplenomegaly, exaggerated startle. Diagnosis?",
    "opts": [
      "Niemann-Pick",
      "Gaucher",
      "Tay-Sachs",
      "Krabbe"
    ],
    "correct": 2,
    "explain": "Tay-Sachs: hexosaminidase A deficiency, GM2 ganglioside. No organomegaly (vs Niemann-Pick).",
    "tract": "general"
  },
  {
    "q": "MG vs Lambert-Eaton: which improves with repeated use?",
    "opts": [
      "Myasthenia gravis",
      "Lambert-Eaton",
      "Both",
      "Neither"
    ],
    "correct": 1,
    "explain": "Lambert-Eaton (presynaptic VGCC Ab): improves with use (more Ca2+ accumulates). MG worsens with use. LE associated with small cell lung cancer.",
    "tract": "general"
  },
  {
    "q": "Ascending paralysis after Campylobacter infection. CSF: elevated protein, normal cells. Diagnosis?",
    "opts": [
      "Botulism",
      "MG",
      "GBS",
      "Polio"
    ],
    "correct": 2,
    "explain": "GBS: albuminocytologic dissociation. Post-infectious autoimmune demyelination.",
    "tract": "general"
  },
  {
    "q": "Most common site of berry aneurysm?",
    "opts": [
      "MCA bifurcation",
      "AComm",
      "PComm",
      "Basilar tip"
    ],
    "correct": 1,
    "explain": "Anterior communicating artery. Associated with ADPKD.",
    "tract": "general"
  },
  {
    "q": "Elderly patient falls. Lucid interval then decline. CT: biconvex (lens-shaped). Source?",
    "opts": [
      "Bridging veins",
      "Middle meningeal artery",
      "Berry aneurysm",
      "AVM"
    ],
    "correct": 1,
    "explain": "Epidural hematoma: middle meningeal artery. Biconvex, doesn't cross sutures. Surgical emergency.",
    "tract": "general"
  },
  {
    "q": "Elderly on anticoagulants. Gradual headache. CT: crescent hypodensity crossing sutures. Source?",
    "opts": [
      "Middle meningeal artery",
      "Bridging veins",
      "Berry aneurysm",
      "AVM"
    ],
    "correct": 1,
    "explain": "Chronic subdural: bridging veins. Crescent, crosses sutures. Risk: elderly, brain atrophy, anticoag.",
    "tract": "general"
  },
  {
    "q": "Worst headache of life, stiff neck. CT negative. Next step?",
    "opts": [
      "MRI",
      "Lumbar puncture",
      "Repeat CT 24h",
      "Discharge"
    ],
    "correct": 1,
    "explain": "SAH: if CT negative -> LP for xanthochromia. CT 95% sensitive at 6hrs.",
    "tract": "general"
  },
  {
    "q": "S2-S4 parasympathetics control erection. Mnemonic?",
    "opts": [
      "Point and Shoot",
      "Sympathetic erection",
      "Rest and Digest only",
      "Fight or Flight"
    ],
    "correct": 0,
    "explain": "Point = Parasympathetic (erection, S2-S4). Shoot = Sympathetic (ejaculation, T11-L2).",
    "tract": "general"
  },
  {
    "q": "Alpha-2 agonist (clonidine) lowers BP by:",
    "opts": [
      "Direct vasodilation",
      "Decreasing central sympathetic outflow",
      "Blocking beta-1",
      "Increasing parasympathetic"
    ],
    "correct": 1,
    "explain": "Alpha-2 presynaptic: decreases NE release centrally. Withdrawal -> rebound hypertension.",
    "tract": "general"
  },
  {
    "q": "Lateral hypothalamus destruction causes:",
    "opts": [
      "Obesity",
      "Anorexia",
      "Hyperthermia",
      "Insomnia"
    ],
    "correct": 1,
    "explain": "Lateral = hunger. Destroy lateral -> Lack hunger (anorexia). Ventromedial = satiety.",
    "tract": "region_hypothalamus"
  },
  {
    "q": "Mammillary body damage from thiamine deficiency. Syndrome?",
    "opts": [
      "Korsakoff",
      "Alzheimer",
      "Huntington",
      "Parkinson"
    ],
    "correct": 0,
    "explain": "Korsakoff: mammillary bodies (B1 deficiency). Confabulation, anterograde amnesia.",
    "tract": "general"
  },
  {
    "q": "Most common primary malignant brain tumor in adults?",
    "opts": [
      "Meningioma",
      "Medulloblastoma",
      "GBM",
      "Schwannoma"
    ],
    "correct": 2,
    "explain": "GBM (grade IV astrocytoma). Butterfly lesion, pseudopalisading necrosis. Most common overall = metastasis.",
    "tract": "general"
  },
  {
    "q": "Resting pill-rolling tremor, cogwheel rigidity, bradykinesia, shuffling gait. Depleted neurotransmitter?",
    "opts": [
      "ACh",
      "Serotonin",
      "Dopamine (SNc)",
      "GABA"
    ],
    "correct": 2,
    "explain": "Parkinson: SNc dopamine loss. Lewy bodies (alpha-synuclein).",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Bilateral ptosis worsening throughout day, diplopia, fatigable weakness. Anti-AChR Ab+. Structure affected?",
    "opts": [
      "Presynaptic NMJ",
      "Postsynaptic NMJ",
      "Anterior horn",
      "DRG"
    ],
    "correct": 1,
    "explain": "MG: postsynaptic nicotinic AChR Ab. Thymoma 15%. Edrophonium test.",
    "tract": "general"
  },
  {
    "q": "Spinal cord lesion at C3-C5. Critical muscle lost?",
    "opts": [
      "Intercostals",
      "Diaphragm",
      "Abdominals",
      "SCM"
    ],
    "correct": 1,
    "explain": "Phrenic nerve C3-C5. 'C3,4,5 keep the diaphragm alive.' Above C3 = ventilator.",
    "tract": "general"
  },
  {
    "q": "Most common site of non-communicating hydrocephalus obstruction?",
    "opts": [
      "Lateral ventricle",
      "Third ventricle",
      "Cerebral aqueduct (Sylvius)",
      "Fourth ventricle"
    ],
    "correct": 2,
    "explain": "Aqueduct of Sylvius: narrowest. Dilates lateral + 3rd ventricles.",
    "tract": "general"
  },
  {
    "q": "BBB is formed by:",
    "opts": [
      "Astrocyte foot processes",
      "Tight junctions of endothelial cells",
      "Ependymal cells",
      "Oligodendrocytes"
    ],
    "correct": 1,
    "explain": "Tight junctions between capillary endothelial cells. Astrocytes maintain but don't form. Circumventricular organs lack BBB.",
    "tract": "general"
  },
  {
    "q": "Bilateral lower extremity weakness, saddle anesthesia, urinary retention, decreased ankle reflexes. Lesion?",
    "opts": [
      "Conus medullaris",
      "Cauda equina",
      "Thoracic cord",
      "Cervical cord"
    ],
    "correct": 1,
    "explain": "Cauda equina: LMN signs, saddle anesthesia, retention, asymmetric. Conus = more symmetric with UMN.",
    "tract": "general"
  },
  {
    "q": "Infant: large lumbosacral sac containing cord and roots. No prenatal vitamins. Diagnosis?",
    "opts": [
      "Spina bifida occulta",
      "Meningocele",
      "Myelomeningocele",
      "Encephalocele"
    ],
    "correct": 2,
    "explain": "Myelomeningocele: meninges + cord herniate. Folate deficiency. Arnold-Chiari II. Elevated AFP.",
    "tract": "general"
  },
  {
    "q": "Premature neonate with intraventricular hemorrhage. Bleeding origin?",
    "opts": [
      "Choroid plexus",
      "Germinal matrix",
      "Arachnoid granulations",
      "Bridging veins"
    ],
    "correct": 1,
    "explain": "Germinal matrix: fragile periventricular vessels in premature infants.",
    "tract": "general"
  },
  {
    "q": "3-year-old: abdominal mass crossing midline, raccoon eyes, elevated urine VMA/HVA. Tumor origin?",
    "opts": [
      "Adrenal cortex",
      "Neural crest (adrenal medulla)",
      "Kidney",
      "Retina"
    ],
    "correct": 1,
    "explain": "Neuroblastoma: neural crest. N-myc amplification = poor prognosis. Can spontaneously regress.",
    "tract": "general"
  },
  {
    "q": "Cerebellar vermis lesion presentation?",
    "opts": [
      "Intention tremor",
      "Truncal ataxia, wide-based gait",
      "Contralateral hemiparesis",
      "Resting tremor"
    ],
    "correct": 1,
    "explain": "Vermis = midline/truncal. Hemispheres = limb/appendicular.",
    "tract": "general"
  },
  {
    "q": "Progressive spastic paraparesis, urinary urgency, optic neuritis history. Lesions perpendicular to ventricles. Pathology?",
    "opts": [
      "Lewy bodies",
      "NFTs",
      "Periventricular plaques with oligodendrocyte loss",
      "Spongiform change"
    ],
    "correct": 2,
    "explain": "MS plaques: oligodendrocyte destruction, relative axonal sparing. Dawson fingers.",
    "tract": "general"
  },
  {
    "q": "Pheochromocytoma: paroxysmal HTN, headache, sweating. Elevated metanephrines. Tumor location?",
    "opts": [
      "Adrenal cortex",
      "Adrenal medulla",
      "Thyroid",
      "Post pituitary"
    ],
    "correct": 1,
    "explain": "Chromaffin cells of adrenal medulla. Rule of 10s.",
    "tract": "general"
  },
  {
    "q": "NMJ nicotinic receptor: depolarizing blocker?",
    "opts": [
      "Atropine",
      "Succinylcholine",
      "Prazosin",
      "Propranolol"
    ],
    "correct": 1,
    "explain": "Succinylcholine: Phase I depolarization + fasciculation, Phase II desensitization block.",
    "tract": "general"
  },
  {
    "q": "Pilocarpine treats glaucoma via which receptor?",
    "opts": [
      "M1",
      "M2",
      "M3",
      "Beta-2"
    ],
    "correct": 2,
    "explain": "M3 (Gq): contracts ciliary muscle + sphincter pupillae. Opens trabecular meshwork.",
    "tract": "general"
  },
  {
    "q": "KF rings, wing-beating tremor, psychiatric symptoms. Diagnosis?",
    "opts": [
      "Huntington",
      "Wilson",
      "PD",
      "MS"
    ],
    "correct": 1,
    "explain": "Wilson: copper in basal ganglia + liver + Descemet membrane. AR, ATP7B. Low ceruloplasmin.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Right CN VI + VII palsy with left hemiparesis. Lesion?",
    "opts": [
      "Right midbrain",
      "Right pons",
      "Left pons",
      "Right medulla"
    ],
    "correct": 1,
    "explain": "Millard-Gubler: ventral pons. Ipsi VI+VII, contra hemiparesis.",
    "tract": "bs_millard_gubler"
  },
  {
    "q": "Propranolol reduces HR by blocking:",
    "opts": [
      "M2",
      "Beta-1",
      "Beta-2",
      "Alpha-1"
    ],
    "correct": 1,
    "explain": "Beta-1 = heart. Gs -> cAMP -> HR/contractility. Beta-1 = 1 heart, Beta-2 = 2 lungs.",
    "tract": "general"
  },
  {
    "q": "PCA stroke causes:",
    "opts": [
      "Broca aphasia",
      "Contralateral homonymous hemianopia with macular sparing",
      "Contralateral hemiparesis",
      "Gerstmann"
    ],
    "correct": 1,
    "explain": "PCA -> occipital. Macular sparing (dual MCA+PCA supply to macula).",
    "tract": "region_occipital"
  },
  {
    "q": "Patient denies being blind despite bilateral cortical blindness. Syndrome?",
    "opts": [
      "Anosognosia",
      "Anton syndrome",
      "Capgras",
      "Prosopagnosia"
    ],
    "correct": 1,
    "explain": "Anton: bilateral occipital + denial of blindness + confabulation of visual experiences.",
    "tract": "region_occipital"
  },
  {
    "q": "Bilateral hippocampal damage. Primary deficit?",
    "opts": [
      "Retrograde amnesia only",
      "Anterograde amnesia",
      "Blindness",
      "Motor paralysis"
    ],
    "correct": 1,
    "explain": "Hippocampus = memory consolidation. Bilateral -> can't form new memories. Most hypoxia-sensitive region.",
    "tract": "region_temporal"
  },
  {
    "q": "HSV encephalitis classically affects which lobe?",
    "opts": [
      "Frontal",
      "Parietal",
      "Temporal",
      "Occipital"
    ],
    "correct": 2,
    "explain": "HSV-1 tropism for temporal lobe. Hemorrhagic necrosis.",
    "tract": "region_temporal"
  },
  {
    "q": "Lenticulostriate arteries supply which structure?",
    "opts": [
      "Occipital cortex",
      "Internal capsule + basal ganglia",
      "Cerebellum",
      "Hippocampus"
    ],
    "correct": 1,
    "explain": "MCA lenticulostriates: internal capsule + BG. 'Arteries of stroke' for lacunar infarcts.",
    "tract": "general"
  },
  {
    "q": "Infant with tuft of hair over lower back, no neuro deficits, XR shows L5 posterior arch defect. Diagnosis?",
    "opts": [
      "Meningocele",
      "Myelomeningocele",
      "Spina bifida occulta",
      "Anencephaly"
    ],
    "correct": 2,
    "explain": "Spina bifida occulta: posterior arch failure, asymptomatic. Skin markers only.",
    "tract": "general"
  },
  {
    "q": "CSF is produced by:",
    "opts": [
      "Arachnoid granulations",
      "Choroid plexus",
      "Ependyma",
      "Dura"
    ],
    "correct": 1,
    "explain": "Choroid plexus: 500 mL/day, 150 mL circulating. Absorbed by arachnoid granulations.",
    "tract": "general"
  },
  {
    "q": "Direct basal ganglia pathway activation results in:",
    "opts": [
      "Movement suppression",
      "Movement facilitation",
      "Tremor",
      "Ataxia"
    ],
    "correct": 1,
    "explain": "Direct: Cortex -> striatum (D1) -> inhibit GPi -> release thalamus -> movement. Direct = Go.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "Indirect basal ganglia pathway function?",
    "opts": [
      "Facilitate movement",
      "Suppress unwanted movement",
      "Relay sensory info",
      "Coordinate balance"
    ],
    "correct": 1,
    "explain": "Indirect: D2 -> inhibit GPe -> disinhibit STN -> excite GPi -> inhibit thalamus -> stop. Indirect = Stop.",
    "tract": "region_basal_ganglia"
  },
  {
    "q": "3-month-old with bilateral leukocoria. Retinal masses. Gene?",
    "opts": [
      "TP53",
      "RB1",
      "APC",
      "VHL"
    ],
    "correct": 1,
    "explain": "Retinoblastoma: RB1 (13q14). Bilateral = hereditary germline.",
    "tract": "cn_II"
  }
];

/* ───────── XP & GAMIFICATION ───────── */
const LEVELS = [
  { name: "Neuroscience Novice", xp: 0 },
  { name: "Synapse Seeker", xp: 100 },
  { name: "Tract Tracker", xp: 300 },
  { name: "Lesion Learner", xp: 600 },
  { name: "Pathway Pioneer", xp: 1000 },
  { name: "Brainstem Boss", xp: 1500 },
  { name: "Neuro Ninja", xp: 2200 },
  { name: "Cortex Commander", xp: 3000 },
  { name: "Master Neuroanatomist", xp: 4000 },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ───────────────── SVG COMPONENTS ───────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */

const SpinalCordSVG = ({ highlight = [], lesionRegions = [], onClick, interactive = false, showLabels = true, size = 300 }) => {
  const tractColors = {};
  Object.entries(TRACTS).forEach(([key, t]) => { tractColors[key] = t.color; });
  
  const isHighlighted = (key) => highlight.includes(key);
  const isLesioned = (key) => lesionRegions.includes(key);
  
  // Clickable regions for each tract on the image (positions match the Wikimedia diagram)
  const tractRegions = [
    { id: "dorsalColumns", label: "DCML", x: "68%", y: "8%", w: "28%", h: "28%", color: "#4A7A8A", desc: "Dorsal Columns: Gracile & Cuneate fasciculi - vibration, proprioception, fine touch" },
    { id: "lissauer", label: "Lis", x: "5%", y: "25%", w: "18%", h: "18%", color: "#E88A3A", desc: "Lissauer's Tract: Axons entering/exiting, carries pain/temperature 1-2 levels" },
    { id: "dorsalSCT", label: "DSCT", x: "5%", y: "45%", w: "20%", h: "18%", color: "#2E8B57", desc: "Dorsal Spinocerebellar: Unconscious proprioception from muscle spindles" },
    { id: "spinothalamic", label: "STT", x: "62%", y: "45%", w: "33%", h: "28%", color: "#C94040", desc: "Spinothalamic: Pain, temperature, crude touch (decussates 1-2 levels up)" },
    { id: "lateralCST", label: "LCST", x: "28%", y: "15%", w: "28%", h: "40%", color: "#7B68AE", desc: "Lateral Corticospinal: Voluntary motor (85-90% decussate at pyramids)" },
    { id: "ventralSCT", label: "VSCT", x: "55%", y: "70%", w: "18%", h: "15%", color: "#4A7A8A", desc: "Ventral Spinocerebellar: Unconscious proprioception" },
    { id: "rubrospinal", label: "RST", x: "38%", y: "32%", w: "18%", h: "15%", color: "#8B4513", desc: "Rubrospinal: Flexor motor control (minor in humans)" },
    { id: "vestibulospinal", label: "VeST", x: "50%", y: "72%", w: "22%", h: "18%", color: "#2E8B57", desc: "Vestibulospinal: Postural control, extensor tone" },
    { id: "reticulospinal", label: "ReST", x: "42%", y: "52%", w: "18%", h: "18%", color: "#6B8E23", desc: "Reticulospinal: Autonomic, pain modulation, sleep" },
  ];
  
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img 
          src="img/spinal-cord-tracts.svg" 
          alt="Spinal cord cross-section with labeled tracts"
          style={{ 
            width: size, 
            maxWidth: "100%", 
            borderRadius: 12,
            background: "#fff",
            padding: 8,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
          }} 
        />
        {tractRegions.map(r => (
          <div key={r.id} onClick={() => onClick && onClick(r.id)}
            style={{
              position: "absolute", left: r.x, top: r.y, width: r.w, height: r.h,
              border: isHighlighted(r.id) ? `3px solid ${r.color}` : `2px dashed ${r.color}88`,
              background: isHighlighted(r.id) ? r.color + "35" : r.color + "12",
              borderRadius: 8, cursor: "pointer", transition: "all 0.2s"
            }}
            title={r.desc}
          />
        ))}
      </div>
      {highlight.length > 0 && (
        <div style={{ 
          marginTop: 8, 
          padding: "8px 16px", 
          background: tractColors[highlight[0]] ? tractColors[highlight[0]] + "20" : "#9EC8CF20",
          borderRadius: 8,
          borderLeft: `4px solid ${tractColors[highlight[0]] || "#9EC8CF"}`,
          fontSize: 13,
          fontWeight: 600,
          color: tractColors[highlight[0]] || "#333",
          fontFamily: FONTS
        }}>
          ▶ {TRACTS[highlight[0]]?.name || highlight[0]}
        </div>
      )}
      {lesionRegions.length > 0 && (
        <div style={{ 
          marginTop: 8, 
          padding: "8px 16px", 
          background: "#C9404020",
          borderRadius: 8,
          borderLeft: "4px solid #C94040",
          fontSize: 13,
          fontWeight: 600,
          color: "#C94040",
          fontFamily: FONTS
        }}>
          ⚡ Lesioned: {lesionRegions.map(r => TRACTS[r]?.abbreviation || r).join(", ")}
        </div>
      )}
      {interactive && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 8, justifyContent: "center" }}>
          {Object.entries(TRACTS).map(([key, t]) => (
            <button key={key} onClick={() => onClick && onClick(key)}
              style={{
                padding: "4px 8px", borderRadius: 6, border: `1px solid ${t.color}44`,
                background: isHighlighted(key) ? t.color + "30" : "#fff",
                color: t.color, fontSize: 10, fontWeight: 600, cursor: "pointer",
                fontFamily: FONTS, transition: "all 0.2s"
              }}>
              {t.abbreviation}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const BrainstemSVG = ({ level = "midbrain", highlight = null, size = 280 }) => {
  const levelColors = { midbrain: "#7B68AE", pons: "#4A7A8A", medulla: "#2E8B57" };
  const levelImgs = { midbrain: "img/brainstem-midbrain.png", pons: "img/brainstem-pons.png", medulla: "img/brainstem-medulla.png" };
  return (
    <div style={{ textAlign: "center" }}>
      <img 
        src={levelImgs[level] || "img/brainstem.png"} 
        alt={`Brainstem cross-section at ${level} level`}
        style={{ 
          width: size, 
          maxWidth: "100%", 
          borderRadius: 12,
          background: "#fff",
          padding: 8,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
        }} 
      />
      <div style={{ 
        marginTop: 8, 
        padding: "6px 14px", 
        background: levelColors[level] + "20",
        borderRadius: 8,
        borderLeft: `4px solid ${levelColors[level]}`,
        fontSize: 14,
        fontWeight: 700,
        color: levelColors[level],
        fontFamily: FONTS,
        textTransform: "capitalize"
      }}>
        {level} level
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ───────────────── MAIN APP ───────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */

const MODULES = [
  { id: "dashboard", name: "Dashboard", icon: "🏠" },
  { id: "tracts", name: "Spinal Tracts", icon: "🧬" },
  { id: "crossSection", name: "Cross Section ID", icon: "🎯" },
  { id: "lesionSim", name: "Lesion Simulator", icon: "⚡" },
  { id: "autonomic", name: "Autonomics", icon: "💓" },
  { id: "cranialNerves", name: "Cranial Nerves", icon: "🧠" },
  { id: "brainRegions", name: "Brain Regions", icon: "🔬" },
  { id: "quiz", name: "Quiz Arena", icon: "📝" },
  { id: "boss", name: "Boss Battle", icon: "🏆" },
];

export default function NeuroLearnApp() {
  const [module, setModule] = useState("dashboard");
  const [xp, setXp] = useState(() => { try { return parseInt(localStorage.getItem("neuro_xp")) || 0; } catch { return 0; } });
  const [streak, setStreak] = useState(() => { try { return parseInt(localStorage.getItem("neuro_streak")) || 0; } catch { return 0; } });
  const [masteryMap, setMasteryMap] = useState(() => { try { return JSON.parse(localStorage.getItem("neuro_mastery")) || {}; } catch { return {}; } });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { try { localStorage.setItem("neuro_xp", xp); } catch {} }, [xp]);
  useEffect(() => { try { localStorage.setItem("neuro_streak", streak); } catch {} }, [streak]);
  useEffect(() => { try { localStorage.setItem("neuro_mastery", JSON.stringify(masteryMap)); } catch {} }, [masteryMap]);

  const addXp = useCallback((amt, tractId) => {
    setXp(p => p + amt);
    if (tractId) setMasteryMap(p => ({ ...p, [tractId]: (p[tractId] || 0) + amt }));
  }, []);

  const currentLevel = useMemo(() => {
    let lvl = LEVELS[0];
    for (const l of LEVELS) { if (xp >= l.xp) lvl = l; }
    return lvl;
  }, [xp]);
  const nextLevel = useMemo(() => LEVELS[LEVELS.indexOf(currentLevel) + 1] || currentLevel, [currentLevel]);
  const progress = nextLevel.xp > currentLevel.xp ? (xp - currentLevel.xp) / (nextLevel.xp - currentLevel.xp) : 1;

  const renderModule = () => {
    switch (module) {
      case "dashboard": return <Dashboard xp={xp} level={currentLevel} nextLevel={nextLevel} progress={progress} streak={streak} masteryMap={masteryMap} setModule={setModule} />;
      case "tracts": return <TractModule addXp={addXp} />;
      case "crossSection": return <CrossSectionModule addXp={addXp} />;
      case "lesionSim": return <LesionSimulator addXp={addXp} />;
      case "autonomic": return <AutonomicModule addXp={addXp} />;
      case "cranialNerves": return <CranialNerveModule addXp={addXp} />;
      case "brainRegions": return <BrainRegionsModule addXp={addXp} />;
      case "quiz": return <QuizArena addXp={addXp} setStreak={setStreak} />;
      case "boss": return <BossBattle addXp={addXp} xp={xp} />;
      default: return <Dashboard xp={xp} level={currentLevel} nextLevel={nextLevel} progress={progress} streak={streak} masteryMap={masteryMap} setModule={setModule} />;
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', 'Nunito', system-ui, sans-serif", color: COLORS.text, background: `linear-gradient(135deg, ${COLORS.bg} 0%, #f0ede6 100%)`, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,400&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      {/* Top Bar */}
      <header style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "6px 12px", display: "flex", alignItems: "center", gap: 8, position: "sticky", top: 0, zIndex: 100 }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", padding: 4 }}>☰</button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 24 }}>🧠</span>
          <span style={{ fontWeight: 800, fontSize: 18, fontFamily: "'Nunito', sans-serif", letterSpacing: "-0.5px" }}>NeuroPath</span>
          <span style={{ fontSize: 9, color: '#999', marginLeft: 4 }}>KB v{KB_VERSION}</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span>🔥</span><span style={{ fontWeight: 700 }}>{streak}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span>⭐</span><span style={{ fontWeight: 700 }}>{xp} XP</span>
          </div>
          <div style={{ background: COLORS.teal + "33", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{currentLevel.name}</div>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <nav style={{ width: sidebarOpen ? 220 : 0, overflow: "hidden", transition: "width 0.3s ease", background: "rgba(255,255,255,0.7)", borderRight: sidebarOpen ? "1px solid rgba(0,0,0,0.06)" : "none", flexShrink: 0 }}>
          <div style={{ padding: "16px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
            {MODULES.map(m => (
              <button key={m.id} onClick={() => { setModule(m.id); setSidebarOpen(false); }}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", border: "none", borderRadius: 10, background: module === m.id ? COLORS.teal + "33" : "transparent", color: module === m.id ? COLORS.accentDark : COLORS.text, fontWeight: module === m.id ? 700 : 500, fontSize: 13.5, cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontFamily: FONTS }}>
                <span style={{ fontSize: 18 }}>{m.icon}</span>{m.name}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "24px 28px", maxWidth: 1200, margin: "0 auto", width: "100%" }} onClick={() => sidebarOpen && setSidebarOpen(false)}>
          {renderModule()}
        </main>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* ───────────────── MODULE COMPONENTS ───────────────── */
/* ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Card Component ─── */
const Card = ({ children, style = {}, onClick, hover = false }) => (
  <div onClick={onClick} style={{ background: "rgba(255,255,255,0.8)", borderRadius: 16, padding: 10, boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.04)", transition: "all 0.25s", cursor: onClick ? "pointer" : "default", ...(hover ? { ":hover": { transform: "translateY(-2px)" } } : {}), ...style }}>
    {children}
  </div>
);

const Tag = ({ children, color = COLORS.teal }) => (
  <span style={{ display: "inline-block", background: color + "25", color: color, borderRadius: 8, padding: "3px 10px", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.3px" }}>{children}</span>
);

const ProgressBar = ({ value, max = 1, color = COLORS.xpBar, height = 8, style = {} }) => (
  <div style={{ background: "rgba(0,0,0,0.06)", borderRadius: height, height, overflow: "hidden", ...style }}>
    <div style={{ width: `${Math.min(100, (value / max) * 100)}%`, height: "100%", background: `linear-gradient(90deg, ${color}, ${color}cc)`, borderRadius: height, transition: "width 0.6s ease" }} />
  </div>
);

const Btn = ({ children, onClick, variant = "primary", style = {}, disabled = false }) => {
  const styles = {
    primary: { background: COLORS.accent, color: "#fff" },
    secondary: { background: COLORS.teal + "22", color: COLORS.accentDark },
    success: { background: COLORS.success, color: "#fff" },
    danger: { background: COLORS.error, color: "#fff" },
    ghost: { background: "transparent", color: COLORS.accent, border: `1px solid ${COLORS.accent}33` },
  };
  return (
    <button onClick={onClick} disabled={disabled}
      style={{ padding: "10px 20px", borderRadius: 10, border: "none", fontWeight: 700, fontSize: 13.5, cursor: disabled ? "not-allowed" : "pointer", fontFamily: FONTS, transition: "all 0.2s", opacity: disabled ? 0.5 : 1, ...styles[variant], ...style }}>
      {children}
    </button>
  );
};

/* ─── DASHBOARD ─── */
function Dashboard({ xp, level, nextLevel, progress, streak, masteryMap, setModule }) {
  const tractKeys = Object.keys(TRACTS);
  const maxMastery = Math.max(1, ...Object.values(masteryMap));
  const smCards = useMemo(() => getSmCards(), []);
  const dueCount = useMemo(() => getDueCards(smCards, QUIZ_BANK).length, [smCards]);
  const reviewedCount = Object.keys(smCards).length;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Nunito',sans-serif", margin: 0, letterSpacing: "-0.5px" }}>Welcome back, Andrew 👋</h1>
        <p style={{ color: COLORS.textLight, margin: "6px 0 0", fontSize: 14.5 }}>Keep building your neuroanatomy mastery for Step 1!</p>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, fontSize: 10 }}>
        <Card style={{ background: `linear-gradient(135deg, ${COLORS.teal}44, ${COLORS.teal}11)` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textLight, marginBottom: 4 }}>LEVEL</div>
          <div style={{ fontSize: 20, fontWeight: 800, fontFamily: "'Nunito'" }}>{level.name}</div>
          <ProgressBar value={progress} style={{ marginTop: 10 }} />
          <div style={{ fontSize: 11, color: COLORS.textLight, marginTop: 4 }}>{xp} / {nextLevel.xp} XP to next level</div>
        </Card>
        <Card style={{ background: `linear-gradient(135deg, ${COLORS.beige}66, ${COLORS.beige}22)` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textLight, marginBottom: 4 }}>STREAK</div>
          <div style={{ fontSize: 36, fontWeight: 800, fontFamily: "'Nunito'" }}>🔥 {streak}</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>days in a row</div>
        </Card>
        <Card style={{ background: `linear-gradient(135deg, ${COLORS.lavender}44, ${COLORS.lavender}11)` }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textLight, marginBottom: 4 }}>TOTAL XP</div>
          <div style={{ fontSize: 36, fontWeight: 800, fontFamily: "'Nunito'" }}>⭐ {xp}</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>earned across all modules</div>
        </Card>
      </div>

      {/* SRS Status Card */}
      <Card style={{ background: dueCount > 0 ? `linear-gradient(135deg, ${COLORS.teal}22, ${COLORS.teal}08)` : `linear-gradient(135deg, ${COLORS.success}22, ${COLORS.success}08)`, cursor: "pointer" }} onClick={() => setModule("quiz")}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>🗓 Spaced Repetition Review</div>
            {dueCount > 0
              ? <div style={{ fontSize: 13, color: COLORS.textLight }}><strong style={{ color: COLORS.accentDark }}>{dueCount}</strong> card{dueCount !== 1 ? "s" : ""} due today · {reviewedCount}/{QUIZ_BANK.length} cards seen</div>
              : <div style={{ fontSize: 13, color: COLORS.success }}>🎉 All caught up! {reviewedCount} cards reviewed.</div>
            }
          </div>
          <div style={{ fontSize: 28 }}>{dueCount > 0 ? "📋" : "✅"}</div>
        </div>
      </Card>

      {/* Mastery Heat Map */}
      <Card>
        <h3 style={{ margin: "0 0 16px", fontFamily: "'Nunito'", fontSize: 16, fontWeight: 700 }}>🗺️ Mastery Heat Map</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
          {tractKeys.map(k => {
            const val = masteryMap[k] || 0;
            const intensity = maxMastery > 0 ? val / maxMastery : 0;
            const bg = intensity > 0.7 ? COLORS.success + "44" : intensity > 0.3 ? COLORS.paleYellow + "66" : COLORS.blush + "44";
            return (
              <div key={k} style={{ background: bg, borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{TRACTS[k].short}</div>
                <div style={{ fontSize: 20, fontWeight: 800 }}>{val}</div>
                <div style={{ fontSize: 10, color: COLORS.textLight }}>XP</div>
              </div>
            );
          })}
          {["cranialNerves", "autonomic", "brain", "lesions"].map(k => (
            <div key={k} style={{ background: (masteryMap[k] || 0) > 50 ? COLORS.success + "44" : COLORS.blush + "44", borderRadius: 10, padding: "10px 14px", textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{k === "cranialNerves" ? "CN" : k === "autonomic" ? "ANS" : k === "brain" ? "Brain" : "Lesion"}</div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{masteryMap[k] || 0}</div>
              <div style={{ fontSize: 10, color: COLORS.textLight }}>XP</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Start */}
      <div>
        <h3 style={{ fontFamily: "'Nunito'", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>🚀 Quick Start</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
          {MODULES.filter(m => m.id !== "dashboard").map(m => (
            <Card key={m.id} onClick={() => setModule(m.id)} style={{ cursor: "pointer", padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, transition: "transform 0.2s, box-shadow 0.2s" }}>
              <span style={{ fontSize: 22 }}>{m.icon}</span>
              <span style={{ fontWeight: 700, fontSize: 14 }}>{m.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── TRACT MODULE ─── */
function TractModule({ addXp }) {
  const [selected, setSelected] = useState("dorsalColumns");
  const t = TRACTS[selected];
  const fields = [
    { label: "Origin", value: t.origin, icon: "📍" },
    { label: "Decussation", value: t.decussation, icon: "✂️" },
    { label: "Synapses", value: t.synapses, icon: "🔗" },
    { label: "Function", value: t.function, icon: "⚙️" },
    { label: "Lesion Pattern", value: t.lesion, icon: "⚡" },
    { label: "High Yield", value: t.highYield, icon: "🎯" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>🧬 Spinal Cord Tracts</h2>

      {/* Tract selector tabs */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.entries(TRACTS).map(([key, tr]) => (
          <button key={key} onClick={() => { setSelected(key); addXp(2, key); }}
            style={{ padding: "8px 16px", borderRadius: 10, border: selected === key ? `2px solid ${tr.color}` : "2px solid transparent", background: selected === key ? tr.color + "22" : "rgba(255,255,255,0.6)", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: FONTS, color: selected === key ? tr.color : COLORS.text, transition: "all 0.2s" }}>
            {tr.short}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }}>
        {/* SVG */}
        <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
          <SpinalCordSVG highlight={[selected]} showLabels size={280} />
          <div style={{ marginTop: 12, fontWeight: 700, color: t.color, fontSize: 14 }}>{t.name}</div>
        </Card>

        {/* Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card>
            <h3 style={{ margin: "0 0 16px", fontFamily: "'Nunito'", fontSize: 18, fontWeight: 800, color: t.color }}>{t.name}</h3>
            {fields.map((f, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span>{f.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.5px", color: COLORS.textLight }}>{f.label}</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, paddingLeft: 28 }}>{f.value}</div>
              </div>
            ))}
          </Card>

          <Card>
            <h4 style={{ margin: "0 0 12px", fontFamily: "'Nunito'", fontWeight: 700 }}>🩺 Classic Diseases</h4>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {t.diseases.map((d, i) => <Tag key={i} color={t.color}>{d}</Tag>)}
            </div>
          </Card>
        </div>
      </div>

      {/* Reference Diagrams Section */}
      <Card>
        <h3 style={{ margin: "0 0 16px", fontFamily: "'Nunito'", fontSize: 18, fontWeight: 800 }}>📐 Cross-Section Reference Diagrams</h3>
        <p style={{ fontSize: 13, color: COLORS.textLight, margin: "0 0 16px" }}>All tracts color-coded: <span style={{ color: "#4A90D9", fontWeight: 700 }}>■ ascending (sensory)</span> &nbsp; <span style={{ color: "#D94A4A", fontWeight: 700 }}>■ descending (motor)</span></p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ textAlign: "center" }}>
            <img src="img/spinal-tracts-labeled.svg" alt="All spinal cord tracts labeled" style={{ width: "100%", maxWidth: 500, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 600, marginTop: 8, color: COLORS.textLight }}>Complete Tract Map (All Tracts)</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="img/spinal-gray-matter.svg" alt="Gray matter regions (Rexed laminae)" style={{ width: "100%", maxWidth: 500, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 600, marginTop: 8, color: COLORS.textLight }}>Gray Matter Regions (Rexed Laminae)</div>
          </div>
        </div>

        <h4 style={{ margin: "20px 0 12px", fontFamily: "'Nunito'", fontWeight: 700 }}>🔬 Level Comparison</h4>
        <p style={{ fontSize: 13, color: COLORS.textLight, margin: "0 0 12px" }}>Key differences: Cervical has the most white matter (all tracts present). Thoracic has lateral horn (sympathetics). Lumbar enlargement has large ventral horns. Sacral has highest gray:white ratio.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ textAlign: "center" }}>
            <img src="img/spinal-cervical.svg" alt="Cervical spinal cord cross-section" style={{ width: "100%", maxWidth: 300, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8 }}>Cervical (C5-T1)</div>
            <div style={{ fontSize: 11, color: COLORS.textLight }}>Largest section • Most white matter • Both fasciculus gracilis + cuneatus</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="img/spinal-fasciculi-gray672.png" alt="Thoracic spinal cord fasciculi" style={{ width: "100%", maxWidth: 300, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8 }}>Thoracic</div>
            <div style={{ fontSize: 11, color: COLORS.textLight }}>Small gray matter • Lateral horn (IML) T1-L2 • Clarke's nucleus (DSCT)</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="img/spinal-lumbar.svg" alt="Lumbar spinal cord cross-section" style={{ width: "100%", maxWidth: 300, borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", padding: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8 }}>Lumbar (L1-S2)</div>
            <div style={{ fontSize: 11, color: COLORS.textLight }}>Large ventral horns • Less white matter • Only fasciculus gracilis</div>
          </div>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, background: "rgba(0,0,0,0.02)", borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🦴</div>
            <div style={{ fontSize: 12, fontWeight: 700 }}>Sacral (S2-S4)</div>
            <div style={{ fontSize: 11, color: COLORS.textLight, lineHeight: 1.5 }}>Smallest diameter • Highest gray:white ratio • Very little white matter • Parasympathetic nucleus (S2-S4) • Onuf's nucleus (sphincter control)</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ─── CROSS SECTION MODULE ─── */
function CrossSectionModule({ addXp }) {
  const [phase, setPhase] = useState("identify"); // identify | level | result
  const [targetTract, setTargetTract] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const startNew = useCallback(() => {
    const keys = Object.keys(TRACTS);
    setTargetTract(keys[Math.floor(Math.random() * keys.length)]);
    setAnswer(null);
    setFeedback(null);
    setPhase("identify");
  }, []);

  useEffect(() => { startNew(); }, [startNew]);

  const checkAnswer = (tractKey) => {
    const correct = tractKey === targetTract || tractKey.startsWith(targetTract);
    setAnswer(tractKey);
    setFeedback(correct);
    if (correct) addXp(15, targetTract);
    setPhase("result");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>🎯 Cross Section Identification</h2>

      <Card>
        {phase === "identify" && targetTract && (
          <>
            <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>Click on the <strong style={{ color: TRACTS[targetTract].color }}>{TRACTS[targetTract].name}</strong> in the cross section below:</p>
            <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
              <SpinalCordSVG highlight={[]} interactive onClick={(key) => checkAnswer(key)} size={480} showLabels={false} />
            </div>
            <p style={{ fontSize: 12, color: COLORS.textLight, textAlign: "center" }}>Click the correct tract region in the spinal cord cross section</p>
          </>
        )}
        {phase === "result" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{feedback ? "✅" : "❌"}</div>
              <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "'Nunito'", color: feedback ? COLORS.success : COLORS.error }}>
                {feedback ? "Correct! +15 XP" : "Not quite!"}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "12px 0" }}>
              <SpinalCordSVG highlight={[targetTract]} size={280} />
            </div>
            <Card style={{ background: COLORS.teal + "11", marginTop: 12 }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                <strong>{TRACTS[targetTract].name}</strong> is located in the <strong>{TRACTS[targetTract].position}</strong> cord. {TRACTS[targetTract].function}. It decussates at the {TRACTS[targetTract].decussation.toLowerCase()}.
              </p>
            </Card>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
              <Btn onClick={startNew}>Next Question →</Btn>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

/* ─── LESION SIMULATOR ─── */
function LesionSimulator({ addXp }) {
  const [selected, setSelected] = useState(null);
  const [showDeficits, setShowDeficits] = useState(false);
  const [simMode, setSimMode] = useState("lesion"); // "lesion" → deficits | "deficits" → lesion
  const [guess, setGuess] = useState(null);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const lesionKeys = Object.keys(LESIONS);

  const handleSelect = (key) => {
    setSelected(key);
    setShowDeficits(false);
    setGuess(null);
    setRevealAnswer(false);
  };

  // For reverse mode: pick random lesion on mount
  const startReverse = () => {
    const rand = lesionKeys[Math.floor(Math.random() * lesionKeys.length)];
    setSelected(rand);
    setGuess(null);
    setRevealAnswer(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>⚡ Lesion Simulator</h2>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={() => { setSimMode("lesion"); setSelected(null); }} style={{ padding: "5px 12px", borderRadius: 16, border: "none", background: simMode === "lesion" ? COLORS.error : "rgba(0,0,0,0.06)", color: simMode === "lesion" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 11.5, cursor: "pointer" }}>
          Lesion → Deficits
        </button>
        <button onClick={() => { setSimMode("deficits"); startReverse(); }} style={{ padding: "5px 12px", borderRadius: 16, border: "none", background: simMode === "deficits" ? COLORS.accent : "rgba(0,0,0,0.06)", color: simMode === "deficits" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 11.5, cursor: "pointer" }}>
          Deficits → Lesion
        </button>
      </div>
      <p style={{ color: COLORS.textLight, margin: 0, fontSize: 14 }}>{simMode === "lesion" ? "Select a lesion pattern to see the affected regions and predicted deficits." : "Given these deficits, identify the lesion pattern."}</p>

      {simMode === "lesion" && <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {lesionKeys.map(k => (
          <button key={k} onClick={() => handleSelect(k)}
            style={{ padding: "8px 16px", borderRadius: 10, border: selected === k ? `2px solid ${COLORS.error}` : "2px solid transparent", background: selected === k ? COLORS.error + "15" : "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: 12.5, cursor: "pointer", fontFamily: FONTS, transition: "all 0.2s" }}>
            {LESIONS[k].name}
          </button>
        ))}
      </div>}

      {simMode === "deficits" && selected && !revealAnswer && (
        <Card>
          <h4 style={{ margin: "0 0 12px", fontWeight: 700 }}>These deficits are observed:</h4>
          {LESIONS[selected].deficits.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, padding: "6px 10px", background: "rgba(0,0,0,0.02)", borderRadius: 8 }}>
              <Tag color={d.side === "spared" ? COLORS.success : COLORS.error}>{d.side}</Tag>
              <span style={{ fontSize: 13 }}><strong>{d.type.replace(/_/g, " ")}</strong>: {d.detail}</span>
            </div>
          ))}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}>
            {lesionKeys.map(k => (
              <button key={k} onClick={() => { setGuess(k); setRevealAnswer(true); if (k === selected) addXp(20, "lesions"); }}
                style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: FONTS }}>
                {LESIONS[k].name}
              </button>
            ))}
          </div>
        </Card>
      )}

      {simMode === "deficits" && revealAnswer && (
        <Card style={{ background: guess === selected ? COLORS.success + "15" : COLORS.error + "15" }}>
          <p style={{ fontWeight: 700, fontSize: 16, margin: "0 0 8px" }}>{guess === selected ? "✅ Correct! +20 XP" : "❌ Incorrect"}</p>
          <p style={{ fontSize: 14, margin: "0 0 12px" }}>The answer is <strong>{LESIONS[selected].name}</strong> ({LESIONS[selected].aka}): {LESIONS[selected].description}</p>
          <Btn onClick={startReverse}>Next Challenge →</Btn>
        </Card>
      )}

      {simMode === "lesion" && selected && (
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "start" }}>
          <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SpinalCordSVG highlight={[]} lesionRegions={LESIONS[selected].regions} size={300} />
            <Tag color={COLORS.error}>{LESIONS[selected].aka}</Tag>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Card>
              <h3 style={{ margin: "0 0 8px", fontFamily: "'Nunito'", fontWeight: 800, color: COLORS.error }}>{LESIONS[selected].name}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: COLORS.textLight, margin: 0 }}>{LESIONS[selected].description}</p>
            </Card>

            {!showDeficits ? (
              <Btn onClick={() => { setShowDeficits(true); addXp(10, "lesions"); }} variant="danger">Reveal Predicted Deficits →</Btn>
            ) : (
              <Card style={{ background: COLORS.blush + "22" }}>
                <h4 style={{ margin: "0 0 12px", fontFamily: "'Nunito'", fontWeight: 700 }}>Predicted Deficits</h4>
                {LESIONS[selected].deficits.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "start", marginBottom: 12, padding: "8px 12px", background: "rgba(255,255,255,0.6)", borderRadius: 10 }}>
                    <Tag color={d.side === "spared" ? COLORS.success : d.side.includes("ipsi") ? COLORS.accent : COLORS.error}>
                      {d.side}
                    </Tag>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase" }}>{d.type.replace(/_/g, " ")}</div>
                      <div style={{ fontSize: 13, color: COLORS.textLight }}>{d.detail}</div>
                    </div>
                  </div>
                ))}
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── AUTONOMIC MODULE ─── */
function AutonomicModule({ addXp }) {
  const [tab, setTab] = useState("sympathetic");
  const [showReceptors, setShowReceptors] = useState(false);

  const data = tab === "sympathetic" ? AUTONOMIC.sympathetic : AUTONOMIC.parasympathetic;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>💓 Autonomic Nervous System</h2>

      <div style={{ display: "flex", gap: 8 }}>
        <Btn onClick={() => { setTab("sympathetic"); setShowReceptors(false); }} variant={tab === "sympathetic" ? "primary" : "ghost"}>Sympathetic</Btn>
        <Btn onClick={() => { setTab("parasympathetic"); setShowReceptors(false); }} variant={tab === "parasympathetic" ? "primary" : "ghost"}>Parasympathetic</Btn>
        <Btn onClick={() => { setShowReceptors(!showReceptors); addXp(5, "autonomic"); }} variant={showReceptors ? "primary" : "ghost"}>Receptors</Btn>
      </div>

      {!showReceptors ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Card>
            <h3 style={{ fontFamily: "'Nunito'", margin: "0 0 12px", fontWeight: 800, color: tab === "sympathetic" ? COLORS.error : COLORS.accent }}>{data.name}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[{ label: "Outflow", val: data.outflow }, { label: "Preganglionic", val: data.pre }, { label: "Postganglionic", val: data.post }].map((f, i) => (
                <div key={i}>
                  <div style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", color: COLORS.textLight, marginBottom: 2 }}>{f.label}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{f.val}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h4 style={{ fontFamily: "'Nunito'", margin: "0 0 12px", fontWeight: 700 }}>Organ Effects</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {data.effects.map((e, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px", background: i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent", borderRadius: 6, fontSize: 13 }}>
                  <span style={{ fontWeight: 700, minWidth: 90 }}>{e.organ}</span>
                  <span style={{ flex: 1, padding: "0 8px" }}>{e.effect}</span>
                  <Tag color={COLORS.lavender}>{e.receptor}</Tag>
                </div>
              ))}
            </div>
          </Card>

          <Card style={{ gridColumn: "1 / -1" }}>
            <h4 style={{ fontFamily: "'Nunito'", margin: "0 0 8px", fontWeight: 700 }}>🩺 Clinical Correlations</h4>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {data.clinical.map((c, i) => <Tag key={i} color={tab === "sympathetic" ? COLORS.error : COLORS.accent}>{c}</Tag>)}
            </div>
          </Card>
        </div>
      ) : (
        <Card>
          <h3 style={{ fontFamily: "'Nunito'", margin: "0 0 16px", fontWeight: 800 }}>Receptor Types</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {AUTONOMIC.receptors.map((r, i) => (
              <div key={i} style={{ padding: 14, background: i % 2 === 0 ? COLORS.teal + "0d" : COLORS.lavender + "0d", borderRadius: 12, border: "1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ fontWeight: 800, fontSize: 16, fontFamily: "'Nunito'", marginBottom: 6 }}>{r.name}</div>
                <div style={{ fontSize: 12, marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Location:</span> {r.location}</div>
                <div style={{ fontSize: 12, marginBottom: 4 }}><span style={{ fontWeight: 700 }}>Effect:</span> {r.effect}</div>
                <div style={{ fontSize: 12 }}><span style={{ fontWeight: 700 }}>Mechanism:</span> {r.mechanism}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

/* ─── CRANIAL NERVE MODULE ─── */
function CranialNerveModule({ addXp }) {
  const [selectedCN, setSelectedCN] = useState(0);
  const [bsLevel, setBsLevel] = useState("midbrain");
  const [flipped, setFlipped] = useState({});
  const cn = CRANIAL_NERVES[selectedCN];

  const toggleFlip = (i) => {
    setFlipped(p => ({ ...p, [i]: !p[i] }));
    addXp(3, "cranialNerves");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>🧠 Cranial Nerves</h2>
      <img src="img/cranial-nerves.svg" alt="Cranial nerves - inferior brain view" 
        style={{ width: "100%", maxWidth: 400, borderRadius: 12, background: "#fff", padding: 8, margin: "12px auto", display: "block", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }} />

      {/* CN Selector */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {CRANIAL_NERVES.map((c, i) => (
          <button key={i} onClick={() => { setSelectedCN(i); addXp(2, "cranialNerves"); }}
            style={{ width: 44, height: 44, borderRadius: 10, border: selectedCN === i ? `2px solid ${COLORS.accent}` : "1px solid rgba(0,0,0,0.08)", background: selectedCN === i ? COLORS.accent + "22" : "rgba(255,255,255,0.7)", fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "'Nunito'", transition: "all 0.2s" }}>
            {c.num}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* CN Detail */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: COLORS.accent + "22", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, fontFamily: "'Nunito'", color: COLORS.accent }}>{cn.num}</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, fontFamily: "'Nunito'" }}>CN {cn.num} — {cn.name}</div>
              <Tag>{cn.modality}</Tag>
            </div>
          </div>
          {[
            { label: "Exit", val: cn.exit },
            { label: "Nuclei", val: cn.nuclei },
            { label: "Reflex", val: cn.reflex },
            { label: "Lesion", val: cn.lesion },
            { label: "High Yield", val: cn.hy },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", color: COLORS.textLight, letterSpacing: "0.5px" }}>{f.label}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.6 }}>{f.val}</div>
            </div>
          ))}
        </Card>

        {/* Brainstem Cross Section */}
        <Card>
          <h4 style={{ fontFamily: "'Nunito'", margin: "0 0 12px", fontWeight: 700 }}>Brainstem Cross Section</h4>
          <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
            {["midbrain", "pons", "medulla"].map(l => (
              <Btn key={l} onClick={() => setBsLevel(l)} variant={bsLevel === l ? "primary" : "ghost"} style={{ fontSize: 12, padding: "6px 14px" }}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Btn>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BrainstemSVG level={bsLevel} size={300} />
          </div>
        </Card>
      </div>

      {/* Flashcards */}
      <Card>
        <h4 style={{ fontFamily: "'Nunito'", margin: "0 0 12px", fontWeight: 700 }}>🃏 CN Flashcards — Click to Reveal</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {CRANIAL_NERVES.map((c, i) => (
            <div key={i} onClick={() => toggleFlip(i)} style={{ padding: 14, borderRadius: 12, background: flipped[i] ? COLORS.sage + "22" : COLORS.blue + "15", border: "1px solid rgba(0,0,0,0.05)", cursor: "pointer", transition: "all 0.3s", minHeight: 70 }}>
              {!flipped[i] ? (
                <div style={{ fontWeight: 700, fontSize: 14, textAlign: "center" }}>CN {c.num} — {c.name}<br /><span style={{ fontSize: 11, color: COLORS.textLight }}>tap to reveal</span></div>
              ) : (
                <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                  <strong>{c.modality}</strong><br />{c.exit}<br /><em>{c.lesion}</em>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ─── BRAIN REGIONS MODULE ─── */
function BrainRegionsModule({ addXp }) {
  const [selected, setSelected] = useState("frontal");
  const regions = Object.entries(BRAIN_REGIONS);
  const region = BRAIN_REGIONS[selected];
  const [expandedArea, setExpandedArea] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>🔬 Brain Regions & Structures</h2>
      <img src="img/brain-lobes.svg" alt="Brain regions and lobes" 
        style={{ width: "100%", maxWidth: 400, borderRadius: 12, background: "#fff", padding: 8, margin: "12px auto", display: "block", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }} />

      {/* Region selector */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {regions.map(([key, r]) => (
          <button key={key} onClick={() => { setSelected(key); setExpandedArea(null); addXp(3, "brain"); }}
            style={{ padding: "7px 14px", borderRadius: 10, border: selected === key ? `2px solid ${r.color}` : "1px solid rgba(0,0,0,0.06)", background: selected === key ? r.color + "30" : "rgba(255,255,255,0.6)", fontWeight: selected === key ? 700 : 500, fontSize: 12, cursor: "pointer", fontFamily: FONTS, transition: "all 0.2s" }}>
            {r.name}
          </button>
        ))}
      </div>

      <Card>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 8, height: 40, borderRadius: 4, background: region.color }} />
          <div>
            <h3 style={{ margin: 0, fontFamily: "'Nunito'", fontSize: 20, fontWeight: 800 }}>{region.name}</h3>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {region.areas.map((area, i) => (
            <div key={i} onClick={() => setExpandedArea(expandedArea === i ? null : i)}
              style={{ padding: 16, borderRadius: 12, background: expandedArea === i ? region.color + "18" : "rgba(0,0,0,0.02)", border: expandedArea === i ? `1px solid ${region.color}44` : "1px solid rgba(0,0,0,0.04)", cursor: "pointer", transition: "all 0.3s" }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: expandedArea === i ? 8 : 0 }}>{area.name}</div>
              {expandedArea === i && (
                <div style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.textLight, animation: "fadeIn 0.3s" }}>{area.detail}</div>
              )}
            </div>
          ))}
        </div>

        {region.clinical && (
          <div style={{ marginTop: 20, padding: 16, background: region.color + "10", borderRadius: 12, borderLeft: `4px solid ${region.color}` }}>
            <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>🩺 Clinical Correlations</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7 }}>{region.clinical}</div>
          </div>
        )}
      </Card>
    </div>
  );
}

/* ─── QUIZ ARENA ─── */
function QuizArena({ addXp, setStreak }) {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showExplain, setShowExplain] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [smCards, setSmCards] = useState(() => getSmCards());
  const [mode, setMode] = useState("srs"); // "srs" | "random"
  const [direction, setDirection] = useState("present"); // "present" (presentation→dx) | "dx" (dx→presentation)

  // SRS mode: prioritize due cards; random mode: full shuffle
  const shuffled = useMemo(() => {
    if (mode === "srs") {
      const due = getDueCards(smCards, QUIZ_BANK);
      if (due.length === 0) return [...QUIZ_BANK].sort(() => Math.random() - 0.5);
      return [...due].sort(() => Math.random() - 0.5);
    }
    return [...QUIZ_BANK].sort(() => Math.random() - 0.5);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const dueCount = useMemo(() => getDueCards(smCards, QUIZ_BANK).length, [smCards]);

  const q = shuffled[qIdx % shuffled.length];

  useEffect(() => {
    if (!timerActive || selected !== null) return;
    if (timer <= 0) { setSelected(-1); setShowExplain(true); setTimerActive(false); return; }
    const id = setTimeout(() => setTimer(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, timerActive, selected]);

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplain(true);
    setTimerActive(false);
    setTotal(t => t + 1);
    const correct = idx === q.correct;
    if (correct) {
      const bonus = timer > 20 ? 25 : timer > 10 ? 20 : 15;
      setScore(s => s + 1);
      addXp(bonus, q.tract);
      setStreak(s => s + 1);
    }
    // Update SM-2 card state (quality: 5=fast correct, 4=correct, 3=slow correct, 2=wrong)
    const quality = correct ? (timer > 20 ? 5 : timer > 10 ? 4 : 3) : 2;
    const cardKey = q.id || q.q;
    const updated = sm2Update(smCards[cardKey], quality);
    const newCards = { ...smCards, [cardKey]: updated };
    setSmCards(newCards);
    saveSmCards(newCards);
  };

  const nextQ = () => {
    setQIdx(i => i + 1);
    setSelected(null);
    setShowExplain(false);
    setTimer(30);
    setTimerActive(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>📝 Quiz Arena</h2>
        <div style={{ display: "flex", gap: 16, fontSize: 14 }}>
          <span>Score: <strong>{score}/{total}</strong></span>
          <span style={{ color: timer <= 10 ? COLORS.error : COLORS.text, fontWeight: 700 }}>⏱ {timer}s</span>
        </div>
      </div>

      {/* SRS Mode Toggle */}
      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={() => setMode("srs")} style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: mode === "srs" ? COLORS.teal : "rgba(0,0,0,0.06)", color: mode === "srs" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 12.5, cursor: "pointer" }}>
          🗓 Spaced Repetition
        </button>
        <button onClick={() => setMode("random")} style={{ padding: "6px 14px", borderRadius: 20, border: "none", background: mode === "random" ? COLORS.teal : "rgba(0,0,0,0.06)", color: mode === "random" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 12.5, cursor: "pointer" }}>
          🔀 Random
        </button>
        {mode === "srs" && (
          <span style={{ fontSize: 12, color: COLORS.textLight }}>
            {dueCount === 0 ? "🎉 All cards reviewed — great work!" : `📋 ${dueCount} card${dueCount !== 1 ? "s" : ""} due for review`}
          </span>
        )}
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.textLight }}>Mode:</span>
        <button onClick={() => setDirection("present")} style={{ padding: "5px 12px", borderRadius: 16, border: "none", background: direction === "present" ? COLORS.accent : "rgba(0,0,0,0.06)", color: direction === "present" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 11.5, cursor: "pointer" }}>
          Presentation → Dx
        </button>
        <button onClick={() => setDirection("dx")} style={{ padding: "5px 12px", borderRadius: 16, border: "none", background: direction === "dx" ? COLORS.accent : "rgba(0,0,0,0.06)", color: direction === "dx" ? "#fff" : COLORS.text, fontWeight: 600, fontSize: 11.5, cursor: "pointer" }}>
          Dx → Presentation
        </button>
      </div>

      <ProgressBar value={timer} max={30} color={timer <= 10 ? COLORS.error : COLORS.xpBar} height={6} />

      <Card>
        <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.textLight, marginBottom: 8 }}>QUESTION {(qIdx % shuffled.length) + 1} OF {shuffled.length}</div>
        <p style={{ fontSize: 15.5, lineHeight: 1.7, fontWeight: 500, marginBottom: 20 }}>
          {direction === "dx" ? (q.explain ? "What presentation would you expect from: " + q.opts[q.correct] + "?" : q.q) : q.q}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.opts.map((opt, i) => {
            let bg = "rgba(255,255,255,0.6)";
            let border = "1px solid rgba(0,0,0,0.08)";
            if (selected !== null) {
              if (i === q.correct) { bg = COLORS.success + "22"; border = `2px solid ${COLORS.success}`; }
              else if (i === selected && i !== q.correct) { bg = COLORS.error + "22"; border = `2px solid ${COLORS.error}`; }
            }
            return (
              <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
                style={{ padding: "12px 16px", borderRadius: 10, border, background: bg, textAlign: "left", fontSize: 14, cursor: selected !== null ? "default" : "pointer", fontFamily: FONTS, transition: "all 0.3s", display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {showExplain && (
          <div style={{ marginTop: 16, padding: 16, background: selected === q.correct ? COLORS.success + "10" : COLORS.error + "10", borderRadius: 12, borderLeft: `4px solid ${selected === q.correct ? COLORS.success : COLORS.error}` }}>
            <div style={{ fontWeight: 700, marginBottom: 6, color: selected === q.correct ? COLORS.success : COLORS.error }}>
              {selected === q.correct ? "✅ Correct!" : selected === -1 ? "⏰ Time's up!" : "❌ Incorrect"}
              {selected === q.correct && <span style={{ marginLeft: 8, fontSize: 12 }}>+{timer > 20 ? 25 : timer > 10 ? 20 : 15} XP</span>}
              {mode === "srs" && smCards[q.id || q.q] && (
                <span style={{ marginLeft: 10, fontSize: 11, color: COLORS.textLight, fontWeight: 500 }}>
                  📅 Next review in {smCards[q.id || q.q].interval}d
                </span>
              )}
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{q.explain}</p>
          </div>
        )}

        {selected !== null && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            <Btn onClick={nextQ}>Next Question →</Btn>
          </div>
        )}
      </Card>
    </div>
  );
}

/* ─── BOSS BATTLE ─── */
function BossBattle({ addXp, xp }) {
  const [started, setStarted] = useState(false);
  const [bossQ, setBossQ] = useState(0);
  const [bossHP, setBossHP] = useState(100);
  const [playerHP, setPlayerHP] = useState(100);
  const [selected, setSelected] = useState(null);
  const [outcome, setOutcome] = useState(null);

  const bossQuestions = useMemo(() => [...QUIZ_BANK].sort(() => Math.random() - 0.5).slice(0, 8), []);
  const q = bossQuestions[bossQ];
  const locked = xp < 200;

  const handleBossAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) {
      const dmg = 15 + Math.floor(Math.random() * 10);
      setBossHP(h => Math.max(0, h - dmg));
      addXp(30, q.tract);
      setOutcome(`💥 Critical hit! You dealt ${dmg} damage!`);
    } else {
      const dmg = 10 + Math.floor(Math.random() * 15);
      setPlayerHP(h => Math.max(0, h - dmg));
      setOutcome(`🩹 The boss strikes back for ${dmg} damage!`);
    }
  };

  const nextBossQ = () => {
    if (bossHP <= 0 || playerHP <= 0 || bossQ >= bossQuestions.length - 1) return;
    setBossQ(i => i + 1);
    setSelected(null);
    setOutcome(null);
  };

  const won = bossHP <= 0;
  const lost = playerHP <= 0;
  const gameOver = won || lost || (bossQ >= bossQuestions.length - 1 && selected !== null);

  if (!started) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center", paddingTop: 40 }}>
        <div style={{ fontSize: 64 }}>🏆</div>
        <h2 style={{ fontFamily: "'Nunito'", fontSize: 28, fontWeight: 800 }}>Boss Battle</h2>
        <p style={{ color: COLORS.textLight, maxWidth: 500, lineHeight: 1.7 }}>Face a mixed-lesion case boss! Answer rapid-fire questions across all neuroanatomy topics. Get them right to deal damage, get them wrong and the boss fights back!</p>
        {locked ? (
          <div style={{ padding: "12px 24px", background: COLORS.blush + "44", borderRadius: 12, color: COLORS.error, fontWeight: 700 }}>🔒 Requires 200 XP to unlock (you have {xp})</div>
        ) : (
          <Btn onClick={() => setStarted(true)} style={{ fontSize: 16, padding: "14px 32px" }}>⚔️ Begin Boss Battle</Btn>
        )}
      </div>
    );
  }

  if (gameOver) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center", paddingTop: 40 }}>
        <div style={{ fontSize: 64 }}>{won ? "🎉" : "💀"}</div>
        <h2 style={{ fontFamily: "'Nunito'", fontSize: 28, fontWeight: 800, color: won ? COLORS.success : COLORS.error }}>{won ? "Victory!" : "Defeated!"}</h2>
        <p style={{ color: COLORS.textLight }}>{won ? "You conquered the neuroanatomy boss! +100 bonus XP!" : "The boss was too strong this time. Review the material and try again!"}</p>
        {won && addXp(100, "boss")}
        <Btn onClick={() => { setStarted(false); setBossQ(0); setBossHP(100); setPlayerHP(100); setSelected(null); setOutcome(null); }}>Play Again</Btn>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h2 style={{ fontFamily: "'Nunito'", margin: 0, fontSize: 24, fontWeight: 800 }}>🏆 Boss Battle — Round {bossQ + 1}/{bossQuestions.length}</h2>

      {/* HP Bars */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card style={{ padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>🧑‍⚕️ Your HP</div>
          <ProgressBar value={playerHP} max={100} color={COLORS.success} height={12} />
          <div style={{ fontSize: 13, fontWeight: 700, textAlign: "right", marginTop: 4 }}>{playerHP}/100</div>
        </Card>
        <Card style={{ padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>👹 Boss HP</div>
          <ProgressBar value={bossHP} max={100} color={COLORS.error} height={12} />
          <div style={{ fontSize: 13, fontWeight: 700, textAlign: "right", marginTop: 4 }}>{bossHP}/100</div>
        </Card>
      </div>

      <Card>
        <p style={{ fontSize: 15, lineHeight: 1.7, fontWeight: 500, marginBottom: 16 }}>{q.q}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.opts.map((opt, i) => {
            let bg = "rgba(255,255,255,0.6)", border = "1px solid rgba(0,0,0,0.08)";
            if (selected !== null) {
              if (i === q.correct) { bg = COLORS.success + "22"; border = `2px solid ${COLORS.success}`; }
              else if (i === selected) { bg = COLORS.error + "22"; border = `2px solid ${COLORS.error}`; }
            }
            return (
              <button key={i} onClick={() => handleBossAnswer(i)} disabled={selected !== null}
                style={{ padding: "10px 14px", borderRadius: 10, border, background: bg, textAlign: "left", fontSize: 14, cursor: selected !== null ? "default" : "pointer", fontFamily: FONTS, transition: "all 0.3s" }}>
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            );
          })}
        </div>
        {outcome && (
          <div style={{ marginTop: 12, padding: 12, background: COLORS.paleYellow + "44", borderRadius: 10, fontWeight: 700, textAlign: "center" }}>{outcome}</div>
        )}
        {selected !== null && !gameOver && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
            <Btn onClick={nextBossQ}>Next Round →</Btn>
          </div>
        )}
      </Card>
    </div>
  );
}
