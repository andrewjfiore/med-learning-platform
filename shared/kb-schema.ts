// Knowledge Base Schema — Single Source of Truth for Neuro + MSK platforms

// ─── Core Types ────────────────────────────────────────────────────────────

export type Side = "ipsilateral" | "contralateral" | "bilateral" | "spared";
export type SpinalLevel = `${"C" | "T" | "L" | "S"}${number}`;
export type LevelRange = { from: SpinalLevel; to: SpinalLevel };

export interface Citation {
  id: string;              // e.g., "fa2024-p502"
  source: string;          // "First Aid for the USMLE Step 1 2024"
  page?: string;           // "p. 502"
  url?: string;            // optional web link
  accessDate?: string;     // ISO date
}

export interface Synonym {
  canonical: string;       // Primary name
  aliases: string[];       // Alternative names
}

// ─── Shared Nerve/Root Data ────────────────────────────────────────────────

export interface NerveRoot {
  id: string;              // e.g., "C5"
  dermatome: string;       // Sensory distribution
  myotome: string;         // Motor function
  reflex?: string;         // Associated reflex
  citationIds: string[];
}

export interface Nerve {
  id: string;              // e.g., "nerve_median"
  name: string;
  synonyms?: string[];
  roots: SpinalLevel[];    // e.g., ["C5","C6","C7","C8","T1"]
  course: string;
  motorFunction: string[];
  sensoryDistribution: string;
  commonInjuries: string[];// References to Injury IDs
  citationIds: string[];
}

// ─── Neuro Domain ──────────────────────────────────────────────────────────

export interface Tract {
  id: string;              // e.g., "tract_dorsal_column"
  name: string;
  shortName: string;       // e.g., "DCML"
  synonyms?: string[];
  origin: string;
  decussation: { level: string; structure: string };
  synapses: { order: number; location: string }[];
  function: string[];
  lesionDeficits: {
    type: string;          // "motor" | "sensory" | "pain_temp" | "fine_touch"
    side: Side;
    detail: string;
  }[];
  associatedDiseases: string[];
  highYield: string;
  position: string;        // "posterior" | "anterolateral" | "lateral" | "posterolateral"
  somatotopy?: string;
  citationIds: string[];
}

export interface LesionSyndrome {
  id: string;              // e.g., "lesion_brown_sequard"
  name: string;
  synonyms?: string[];
  description: string;
  deficits: {
    type: string;
    side: Side;
    detail: string;
    tractId: string;       // References Tract.id
  }[];
  affectedRegions: string[];
  citationIds: string[];
}

export interface CranialNerve {
  id: string;              // e.g., "cn_VII"
  number: string;          // Roman numeral
  name: string;
  modality: string[];      // ["motor", "sensory", "parasympathetic"]
  exit: string;            // Skull base exit
  nuclei: string[];
  reflexes: string[];
  lesionFindings: string;
  highYield: string;
  citationIds: string[];
}

export interface AutonomicData {
  division: "sympathetic" | "parasympathetic";
  outflow: string;
  preganglionicNT: string;
  postganglionicNT: string;
  ganglia: string[];
  effects: {
    organ: string;
    effect: string;
    receptor: string;
  }[];
  clinicalConditions: string[];
  citationIds: string[];
}

export interface Receptor {
  id: string;
  name: string;
  location: string;
  effect: string;
  mechanism: string;
  citationIds: string[];
}

export interface BrainRegion {
  id: string;
  name: string;
  areas: {
    name: string;
    brodmannArea?: string;
    detail: string;
    citationIds: string[];
  }[];
  clinicalCorrelations: string;
  citationIds: string[];
}

export interface BrainstemSyndrome {
  id: string;
  name: string;
  level: "midbrain" | "pons" | "medulla";
  artery: string;
  ipsilateralDeficits: string[];
  contralateralDeficits: string[];
  citationIds: string[];
}

// ─── MSK Domain ────────────────────────────────────────────────────────────

export interface Muscle {
  id: string;              // e.g., "muscle_supraspinatus"
  name: string;
  origin: string;
  insertion: string;
  action: string;
  nerve: string;           // References Nerve.id
  nerveRoots: SpinalLevel[];
  citationIds: string[];
}

export interface Bone {
  id: string;
  name: string;
  landmarks: string[];
  citationIds: string[];
}

export interface Ligament {
  id: string;
  name: string;
  attachments: string;
  function: string;
  citationIds: string[];
}

export interface Injury {
  id: string;              // e.g., "injury_anterior_dislocation"
  name: string;
  mechanism: string;
  nerveAtRisk?: string;    // References Nerve.id
  findings: string;
  examFindings: string;
  citationIds: string[];
}

export interface SpecialTest {
  id: string;              // e.g., "test_neer"
  name: string;
  purpose: string;
  technique: string;
  positiveResult: string;
  sensitivity?: string;
  specificity?: string;
  citationIds: string[];
}

export interface Compartment {
  id: string;
  region: string;
  muscles: string[];       // References Muscle.id[]
  nerve: string;           // References Nerve.id
  artery: string;
  action: string;
  compartmentSyndromeFindings: string;
  citationIds: string[];
}

export interface AnatomyRegion {
  id: string;              // e.g., "region_shoulder"
  label: string;
  bodyPart: "upperExtremity" | "lowerExtremity" | "spine";
  bones: Bone[];
  muscles: Muscle[];
  nerves: string[];        // References Nerve.id[]
  vessels: string[];
  ligaments: Ligament[];
  injuries: Injury[];
  specialTests: SpecialTest[];
  citationIds: string[];
}

// ─── Diagram Types ─────────────────────────────────────────────────────────

export interface DiagramSpec {
  id: string;
  name: string;
  type: "spinal_cross_section" | "brainstem" | "joint" | "limb" | "nerve_path";
  level?: string;          // For level-specific variants
  coordinateSystem: { width: number; height: number; viewBox: string };
  layers: {
    name: string;          // "bone" | "muscle" | "nerve" | "vessel" | "tract" | "nuclei" | "lesion"
    structures: {
      semanticId: string;  // Must exist in KB
      svgPath: string;     // SVG path data
      labelPosition: { x: number; y: number };
      hotspot?: { cx: number; cy: number; r: number };
    }[];
  }[];
  verificationChecklist: {
    labelPlacement: boolean;
    structureBoundaries: boolean;
    adjacentRelationships: boolean;
    laterality: boolean;
    levelSpecificDifferences?: boolean;
  };
  citationIds: string[];   // Anatomy atlas references for diagram
}

// ─── Quiz Types ────────────────────────────────────────────────────────────

export interface QuizItem {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedKBIds: string[];  // Links to tract/nerve/injury/etc IDs
  verified: boolean;       // true = answer confirmed against KB
  citationIds: string[];
}

// ─── Top-Level KB ──────────────────────────────────────────────────────────

export interface KnowledgeBase {
  version: string;
  lastUpdated: string;
  
  // Shared
  citations: Citation[];
  nerveRoots: NerveRoot[];
  nerves: Nerve[];
  dermatomes: Record<string, string>;
  myotomes: Record<string, string>;
  reflexes: Record<string, string>;
  
  // Neuro
  tracts: Tract[];
  lesionSyndromes: LesionSyndrome[];
  cranialNerves: CranialNerve[];
  autonomics: { sympathetic: AutonomicData; parasympathetic: AutonomicData };
  receptors: Receptor[];
  brainRegions: BrainRegion[];
  brainstemSyndromes: BrainstemSyndrome[];
  
  // MSK
  anatomyRegions: AnatomyRegion[];
  compartments: Compartment[];
  
  // Diagrams
  diagrams: DiagramSpec[];
  
  // Quizzes
  neuroQuizBank: QuizItem[];
  mskQuizBank: QuizItem[];
}
