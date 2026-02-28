/* Generated from shared Knowledge Base v1.0.0 (2026-02-28)
 * Source: med-learning-platform/shared/knowledge-base.json
 * Run: node build.js to regenerate
 */
import { useState, useEffect, useCallback, useRef, useMemo } from "react";

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


// ─── Color Palette & Theme ─────────────────────────────────────────────────
const C = {
  teal: "#9EC8CF", blue: "#AEBBD0", purple: "#C9BFD5", mauve: "#D7C3CF",
  rose: "#E0C3C3", sand: "#E6D2B8", lime: "#E8E1B3", mint: "#B8D6C2",
  text: "#1F2933", textLight: "#4A5568", bg: "#F7F8FA", white: "#FFFFFF",
  success: "#48BB78", danger: "#FC8181", warning: "#F6AD55", accent: "#7C9EB2",
  accentDark: "#5A7D8F", gold: "#D4A44C",
};

const FONTS = `'Nunito', 'Segoe UI', sans-serif`;
const FONT_DISPLAY = `'Quicksand', 'Nunito', sans-serif`;

// ─── Massive Data Store ────────────────────────────────────────────────────
const ANATOMY_DATA = {
  upperExtremity: {
    label: "Upper Extremity",
    icon: "💪",
    color: C.teal,
    regions: {
      shoulder: {
        label: "Shoulder",
        anatomy: {
          bones: ["Clavicle", "Scapula (acromion, coracoid, glenoid)", "Proximal humerus (greater/lesser tuberosity)"],
          muscles: [
            { name: "Supraspinatus", origin: "Supraspinous fossa", insertion: "Greater tuberosity (superior)", action: "Abduction (first 15°)", nerve: "Suprascapular n. (C5-C6)" },
            { name: "Infraspinatus", origin: "Infraspinous fossa", insertion: "Greater tuberosity (middle)", action: "External rotation", nerve: "Suprascapular n. (C5-C6)" },
            { name: "Teres Minor", origin: "Lateral border scapula", insertion: "Greater tuberosity (inferior)", action: "External rotation", nerve: "Axillary n. (C5-C6)" },
            { name: "Subscapularis", origin: "Subscapular fossa", insertion: "Lesser tuberosity", action: "Internal rotation", nerve: "Upper/lower subscapular n. (C5-C6)" },
            { name: "Deltoid", origin: "Clavicle, acromion, spine of scapula", insertion: "Deltoid tuberosity", action: "Abduction (15-90°), flexion, extension", nerve: "Axillary n. (C5-C6)" },
          ],
          nerves: ["Axillary nerve (C5-C6)", "Suprascapular nerve (C5-C6)", "Long thoracic nerve (C5-C7)", "Thoracodorsal nerve (C6-C8)"],
          vessels: ["Suprascapular artery", "Circumflex humeral arteries (ant/post)", "Thoracoacromial trunk"],
          ligaments: ["Coracohumeral lig.", "Glenohumeral ligs. (sup, mid, inf)", "Coracoacromial lig.", "Acromioclavicular lig."],
        },
        injuries: [
          { name: "Anterior Dislocation", mechanism: "Fall on outstretched hand, external rotation + abduction", nerve: "Axillary nerve", findings: "Loss of deltoid contour, arm held in external rotation", exam: "Apprehension test positive" },
          { name: "Rotator Cuff Tear", mechanism: "Acute trauma or chronic degeneration (supraspinatus most common)", nerve: "Suprascapular nerve region", findings: "Weakness in abduction, positive drop arm", exam: "Empty can test, drop arm test, Neer impingement" },
          { name: "SLAP Tear", mechanism: "Fall on outstretched hand, overhead throwing", nerve: "N/A", findings: "Deep shoulder pain, mechanical catching", exam: "O'Brien test, Speed test" },
          { name: "Long Thoracic Nerve Palsy", mechanism: "Stab wound, surgical injury, backpack palsy", nerve: "Long thoracic nerve (C5-C7)", findings: "Winged scapula", exam: "Push against wall → medial scapular winging" },
        ],
        specialTests: [
          { name: "Neer Test", purpose: "Subacromial impingement", technique: "Stabilize scapula, passively forward flex arm with IR", positive: "Pain in anterolateral shoulder" },
          { name: "Hawkins-Kennedy", purpose: "Subacromial impingement", technique: "Flex shoulder and elbow 90°, internally rotate", positive: "Pain in anterolateral shoulder" },
          { name: "Empty Can (Jobe)", purpose: "Supraspinatus tear", technique: "Arms at 90° abduction, 30° forward flex, thumbs down, resist downward pressure", positive: "Weakness or pain" },
          { name: "Drop Arm", purpose: "Massive rotator cuff tear", technique: "Passively abduct arm to 90°, ask patient to slowly lower", positive: "Arm drops suddenly" },
          { name: "Apprehension Test", purpose: "Anterior instability", technique: "Supine, abduct 90°, externally rotate", positive: "Patient apprehension/guarding" },
        ],
      },
      elbow: {
        label: "Elbow",
        anatomy: {
          bones: ["Distal humerus (medial/lateral epicondyle, trochlea, capitulum)", "Olecranon", "Radial head", "Coronoid process"],
          muscles: [
            { name: "Biceps brachii", origin: "Long: supraglenoid tubercle; Short: coracoid", insertion: "Radial tuberosity", action: "Flexion, supination", nerve: "Musculocutaneous n. (C5-C6)" },
            { name: "Brachialis", origin: "Anterior distal humerus", insertion: "Coronoid process, ulnar tuberosity", action: "Flexion (primary)", nerve: "Musculocutaneous n. (C5-C6)" },
            { name: "Triceps brachii", origin: "Long: infraglenoid; Lat: posterior humerus; Med: posterior humerus", insertion: "Olecranon", action: "Extension", nerve: "Radial n. (C6-C8)" },
            { name: "Brachioradialis", origin: "Lateral supracondylar ridge", insertion: "Styloid process of radius", action: "Flexion (neutral position)", nerve: "Radial n. (C5-C6)" },
          ],
          nerves: ["Radial nerve (posterior)", "Median nerve (anterior/medial)", "Ulnar nerve (medial epicondyle)"],
          vessels: ["Brachial artery → radial + ulnar arteries"],
          ligaments: ["UCL (medial collateral)", "Radial collateral ligament", "Annular ligament"],
        },
        injuries: [
          { name: "Lateral Epicondylitis (Tennis Elbow)", mechanism: "Repetitive wrist extension/supination", nerve: "Posterior interosseous (rarely)", findings: "Tenderness at lateral epicondyle", exam: "Pain with resisted wrist extension" },
          { name: "Medial Epicondylitis (Golfer's Elbow)", mechanism: "Repetitive wrist flexion/pronation", nerve: "Ulnar nerve (may be involved)", findings: "Tenderness at medial epicondyle", exam: "Pain with resisted wrist flexion" },
          { name: "UCL Injury", mechanism: "Valgus stress (overhead throwing)", nerve: "Ulnar nerve stretching", findings: "Medial elbow pain, instability", exam: "Valgus stress test, moving valgus stress test" },
          { name: "Supracondylar Fracture", mechanism: "Fall on outstretched hand (children)", nerve: "Median nerve (anterior interosseous), brachial artery", findings: "Posterior fat pad sign on X-ray", exam: "Check radial pulse, median nerve function" },
        ],
        specialTests: [
          { name: "Valgus Stress Test", purpose: "UCL integrity", technique: "Flex elbow 20-30°, apply valgus force", positive: "Medial joint line opening, pain" },
          { name: "Cozen Test", purpose: "Lateral epicondylitis", technique: "Resist wrist extension with forearm pronated", positive: "Lateral elbow pain" },
          { name: "Tinel at Elbow", purpose: "Ulnar neuropathy", technique: "Tap posterior to medial epicondyle", positive: "Tingling in ring/small fingers" },
        ],
      },
      wristHand: {
        label: "Wrist & Hand",
        anatomy: {
          bones: ["Scaphoid, Lunate, Triquetrum, Pisiform", "Trapezium, Trapezoid, Capitate, Hamate", "Metacarpals 1-5", "Phalanges (proximal, middle, distal)"],
          muscles: [
            { name: "Flexor digitorum superficialis", origin: "Medial epicondyle, coronoid, radius", insertion: "Middle phalanges 2-5", action: "Flex PIP joints", nerve: "Median n." },
            { name: "Flexor digitorum profundus", origin: "Proximal ulna, interosseous membrane", insertion: "Distal phalanges 2-5", action: "Flex DIP joints", nerve: "Median n. (lat half), Ulnar n. (med half)" },
            { name: "Thenar muscles", origin: "Flexor retinaculum, carpal bones", insertion: "Thumb", action: "Opposition, flexion, abduction", nerve: "Recurrent branch median n." },
            { name: "Lumbricals", origin: "FDP tendons", insertion: "Extensor expansions", action: "MCP flexion + IP extension", nerve: "Lat 2: Median; Med 2: Ulnar" },
          ],
          nerves: ["Median nerve (carpal tunnel)", "Ulnar nerve (Guyon canal)", "Radial nerve (dorsal sensory branch)"],
          vessels: ["Radial artery (anatomical snuffbox)", "Ulnar artery (Guyon canal)", "Superficial/deep palmar arches"],
          ligaments: ["Scapholunate ligament", "Flexor retinaculum (transverse carpal lig.)", "Collateral ligaments (MCP, PIP, DIP)"],
        },
        injuries: [
          { name: "Carpal Tunnel Syndrome", mechanism: "Repetitive use, pregnancy, hypothyroidism, acromegaly", nerve: "Median nerve", findings: "Numbness in thumb, index, middle, lateral ring finger; thenar atrophy", exam: "Tinel sign, Phalen test, decreased 2-point discrimination" },
          { name: "Guyon Canal Syndrome", mechanism: "Cyclist palsy, hook of hamate fracture", nerve: "Ulnar nerve", findings: "Weakness of interossei, hypothenar atrophy, claw hand", exam: "Froment sign positive" },
          { name: "Scaphoid Fracture", mechanism: "FOOSH (fall on outstretched hand)", nerve: "N/A", findings: "Anatomical snuffbox tenderness, may be X-ray occult", exam: "Snuffbox tenderness, scaphoid compression test" },
          { name: "Jersey Finger", mechanism: "Forced extension during active DIP flexion (grabbing jersey)", nerve: "N/A", findings: "Cannot flex DIP", exam: "Unable to flex DIP against resistance" },
          { name: "Mallet Finger", mechanism: "Forced flexion during active extension (ball striking fingertip)", nerve: "N/A", findings: "Droop of DIP", exam: "Cannot actively extend DIP" },
        ],
        specialTests: [
          { name: "Phalen Test", purpose: "Carpal tunnel syndrome", technique: "Flex both wrists maximally for 60 seconds", positive: "Numbness/tingling in median nerve distribution" },
          { name: "Tinel Sign (Wrist)", purpose: "Carpal tunnel syndrome", technique: "Tap over carpal tunnel at wrist crease", positive: "Tingling in median nerve distribution" },
          { name: "Froment Sign", purpose: "Ulnar nerve palsy", technique: "Hold paper between thumb and index finger, pull", positive: "Thumb IP flexion (compensating with FPL)" },
          { name: "Finkelstein Test", purpose: "De Quervain tenosynovitis", technique: "Thumb in fist, ulnar deviate wrist", positive: "Pain over radial styloid" },
          { name: "Allen Test", purpose: "Arterial patency", technique: "Occlude both arteries, release one at a time", positive: "Hand does not reperfuse → occluded artery" },
        ],
      },
    },
  },
  lowerExtremity: {
    label: "Lower Extremity",
    icon: "🦵",
    color: C.mint,
    regions: {
      hip: {
        label: "Hip",
        anatomy: {
          bones: ["Ilium, ischium, pubis (acetabulum)", "Proximal femur (head, neck, greater/lesser trochanter)", "Femoral neck angle (125°)"],
          muscles: [
            { name: "Iliopsoas", origin: "Iliac fossa (iliacus) + T12-L5 (psoas)", insertion: "Lesser trochanter", action: "Hip flexion", nerve: "Femoral n. (L2-L4)" },
            { name: "Gluteus maximus", origin: "Ilium, sacrum, coccyx", insertion: "IT band, gluteal tuberosity", action: "Hip extension, external rotation", nerve: "Inferior gluteal n. (L5-S2)" },
            { name: "Gluteus medius", origin: "Outer ilium", insertion: "Greater trochanter", action: "Hip abduction", nerve: "Superior gluteal n. (L4-S1)" },
            { name: "Gluteus minimus", origin: "Outer ilium", insertion: "Greater trochanter", action: "Hip abduction, internal rotation", nerve: "Superior gluteal n. (L4-S1)" },
            { name: "Piriformis", origin: "Anterior sacrum", insertion: "Greater trochanter", action: "External rotation", nerve: "Nerve to piriformis (S1-S2)" },
          ],
          nerves: ["Femoral nerve (L2-L4)", "Obturator nerve (L2-L4)", "Sciatic nerve (L4-S3)", "Superior gluteal nerve (L4-S1)", "Inferior gluteal nerve (L5-S2)"],
          vessels: ["Medial femoral circumflex artery (main blood supply to femoral head)", "Lateral femoral circumflex artery", "Obturator artery (ligamentum teres)"],
          ligaments: ["Iliofemoral (Y ligament of Bigelow)", "Pubofemoral lig.", "Ischiofemoral lig.", "Ligamentum teres"],
        },
        injuries: [
          { name: "Femoral Neck Fracture", mechanism: "Low-energy fall in elderly (osteoporosis), high-energy in young", nerve: "N/A", findings: "Shortened, externally rotated leg; groin pain", exam: "Log roll test painful, inability to bear weight" },
          { name: "Avascular Necrosis (AVN)", mechanism: "Steroid use, alcohol, sickle cell, fracture disrupting blood supply", nerve: "N/A", findings: "Progressive hip pain, limited ROM", exam: "Pain with internal rotation, MRI: crescent sign" },
          { name: "SCFE (Slipped Capital Femoral Epiphysis)", mechanism: "Obese adolescent, during growth spurt", nerve: "N/A", findings: "Hip/knee pain, obligate external rotation with flexion", exam: "Trendelenburg sign may be positive, ice cream scooping on frog-leg lateral X-ray" },
          { name: "Hip Dislocation (Posterior)", mechanism: "Dashboard injury (knee hits dashboard)", nerve: "Sciatic nerve (10%)", findings: "Shortened, internally rotated, adducted leg", exam: "Check sciatic nerve function, emergent reduction" },
        ],
        specialTests: [
          { name: "Trendelenburg Test", purpose: "Gluteus medius weakness", technique: "Stand on one leg", positive: "Contralateral hip drops (weak abductors on stance side)" },
          { name: "FABER/Patrick Test", purpose: "Hip joint pathology, SI joint", technique: "Flexion, Abduction, External Rotation of hip", positive: "Groin pain (hip) or posterior pain (SI joint)" },
          { name: "Log Roll Test", purpose: "Hip joint irritability", technique: "Gently roll leg internally/externally in extension", positive: "Pain suggests intra-articular pathology" },
          { name: "Thomas Test", purpose: "Hip flexion contracture", technique: "Supine, flex opposite hip to flatten lumbar spine", positive: "Tested leg rises off table" },
        ],
      },
      knee: {
        label: "Knee",
        anatomy: {
          bones: ["Distal femur (condyles)", "Proximal tibia (tibial plateau)", "Patella", "Fibular head"],
          muscles: [
            { name: "Quadriceps (4 heads)", origin: "AIIS (rectus femoris), femur (3 vasti)", insertion: "Tibial tuberosity (via patellar tendon)", action: "Knee extension", nerve: "Femoral n. (L2-L4)" },
            { name: "Hamstrings", origin: "Ischial tuberosity (semimembranosus, semitendinosus, biceps femoris long head)", insertion: "Tibia (medial) and fibula (lateral)", action: "Knee flexion, hip extension", nerve: "Sciatic n. (tibial division)" },
            { name: "Popliteus", origin: "Lateral femoral condyle", insertion: "Posterior proximal tibia", action: "Unlocks knee from full extension", nerve: "Tibial n." },
          ],
          nerves: ["Common peroneal nerve (wraps around fibular neck)", "Tibial nerve (popliteal fossa)", "Saphenous nerve (medial knee)"],
          vessels: ["Popliteal artery (posterior)", "Genicular arteries"],
          ligaments: ["ACL (anterior cruciate)", "PCL (posterior cruciate)", "MCL (medial collateral)", "LCL (lateral collateral)", "Medial meniscus", "Lateral meniscus"],
        },
        injuries: [
          { name: "ACL Tear", mechanism: "Non-contact pivoting, sudden deceleration, valgus stress", nerve: "N/A", findings: "Hemarthrosis, giving way episodes", exam: "Lachman test (most sensitive), anterior drawer, pivot shift" },
          { name: "PCL Tear", mechanism: "Dashboard injury (posterior force on flexed knee)", nerve: "N/A", findings: "Posterior knee pain, posterior sag sign", exam: "Posterior drawer test" },
          { name: "MCL Tear", mechanism: "Valgus stress (lateral blow to knee)", nerve: "N/A", findings: "Medial joint line tenderness, swelling", exam: "Valgus stress test at 0° and 30°" },
          { name: "Meniscal Tear", mechanism: "Twisting on planted foot, degenerative", nerve: "N/A", findings: "Joint line tenderness, mechanical catching/locking", exam: "McMurray test, Thessaly test, Apley grind" },
          { name: "Osgood-Schlatter Disease", mechanism: "Traction apophysitis in adolescents (tibial tuberosity)", nerve: "N/A", findings: "Painful bump at tibial tuberosity", exam: "Tenderness at tibial tuberosity, pain with resisted extension" },
          { name: "Unhappy Triad", mechanism: "Lateral blow to planted leg (valgus + rotation)", nerve: "N/A", findings: "ACL + MCL + medial meniscus tear", exam: "Combined positive tests" },
        ],
        specialTests: [
          { name: "Lachman Test", purpose: "ACL integrity (MOST SENSITIVE)", technique: "Flex knee 20-30°, stabilize femur, translate tibia anteriorly", positive: "Soft/absent endpoint, increased translation" },
          { name: "Anterior Drawer", purpose: "ACL integrity", technique: "Flex knee 90°, sit on foot, pull tibia forward", positive: "Increased anterior translation" },
          { name: "Posterior Drawer", purpose: "PCL integrity", technique: "Flex knee 90°, push tibia posteriorly", positive: "Increased posterior translation" },
          { name: "McMurray Test", purpose: "Meniscal tear", technique: "Flex knee, externally rotate + extend (medial); internally rotate + extend (lateral)", positive: "Click or pain along joint line" },
          { name: "Valgus Stress", purpose: "MCL integrity", technique: "Apply valgus force at 0° and 30° flexion", positive: "Medial joint opening" },
          { name: "Varus Stress", purpose: "LCL integrity", technique: "Apply varus force at 0° and 30° flexion", positive: "Lateral joint opening" },
          { name: "Pivot Shift", purpose: "ACL (functional test)", technique: "IR + valgus while extending from flexion", positive: "Clunk as tibia subluxes/reduces" },
        ],
      },
      ankleFoot: {
        label: "Ankle & Foot",
        anatomy: {
          bones: ["Distal tibia (medial malleolus), fibula (lateral malleolus)", "Talus, calcaneus", "Navicular, cuboid, cuneiforms", "Metatarsals 1-5"],
          muscles: [
            { name: "Tibialis anterior", origin: "Lateral tibia", insertion: "Medial cuneiform, 1st metatarsal", action: "Dorsiflexion, inversion", nerve: "Deep peroneal n. (L4-L5)" },
            { name: "Gastrocnemius/Soleus", origin: "Femoral condyles/posterior tibia", insertion: "Calcaneus (Achilles tendon)", action: "Plantarflexion", nerve: "Tibial n. (S1-S2)" },
            { name: "Peroneus longus/brevis", origin: "Lateral fibula", insertion: "1st metatarsal/5th metatarsal base", action: "Eversion, plantarflexion", nerve: "Superficial peroneal n. (L5-S1)" },
            { name: "Tibialis posterior", origin: "Posterior tibia, fibula, interosseous membrane", insertion: "Navicular + cuneiforms", action: "Inversion, plantarflexion", nerve: "Tibial n." },
          ],
          nerves: ["Deep peroneal nerve (dorsiflexion)", "Superficial peroneal nerve (eversion)", "Tibial nerve (plantarflexion)", "Sural nerve (lateral foot sensation)"],
          vessels: ["Anterior tibial artery → dorsalis pedis", "Posterior tibial artery (behind medial malleolus)", "Peroneal artery"],
          ligaments: ["ATFL (anterior talofibular — most commonly sprained)", "CFL (calcaneofibular)", "PTFL (posterior talofibular)", "Deltoid ligament (medial)"],
        },
        injuries: [
          { name: "Lisfranc Injury", mechanism: "Axial load on plantarflexed foot, missed on initial X-ray", nerve: "N/A", findings: "Midfoot pain, inability to bear weight, plantar ecchymosis", exam: "Pain with passive pronation-abduction, weightbearing X-ray" },
          { name: "Achilles Rupture", mechanism: "Sudden push-off, often weekend warriors 30-50yo", nerve: "N/A", findings: "Palpable gap, inability to plantarflex", exam: "Thompson test: squeeze calf → no plantarflexion" },
          { name: "Plantar Fasciitis", mechanism: "Overuse, obesity, pes planus", nerve: "N/A", findings: "Heel pain worst with first steps in morning", exam: "Point tenderness at medial calcaneal tuberosity" },
          { name: "Ankle Sprain (Inversion)", mechanism: "Inversion injury → ATFL tear (most common)", nerve: "N/A", findings: "Lateral ankle swelling, ecchymosis", exam: "Anterior drawer of ankle, talar tilt test" },
        ],
        specialTests: [
          { name: "Thompson Test", purpose: "Achilles tendon rupture", technique: "Prone, squeeze calf", positive: "No plantarflexion = rupture" },
          { name: "Anterior Drawer (Ankle)", purpose: "ATFL integrity", technique: "Stabilize tibia, translate talus anteriorly", positive: "Increased anterior translation" },
          { name: "Talar Tilt", purpose: "CFL integrity", technique: "Invert ankle, check for tilt", positive: "Excessive inversion" },
        ],
      },
    },
  },
  spine: {
    label: "Spine",
    icon: "🦴",
    color: C.purple,
    regions: {
      cervical: {
        label: "Cervical Spine",
        anatomy: {
          bones: ["C1 (Atlas) - no body, ring shape", "C2 (Axis) - odontoid process (dens)", "C3-C7 - uncinate processes, transverse foramina"],
          muscles: [
            { name: "Sternocleidomastoid", origin: "Sternum + clavicle", insertion: "Mastoid process", action: "Contralateral rotation, ipsilateral lateral flexion", nerve: "Spinal accessory n. (CN XI)" },
            { name: "Trapezius", origin: "Occiput, C1-T12 spinous processes", insertion: "Clavicle, acromion, scapular spine", action: "Shoulder elevation, retraction", nerve: "Spinal accessory n. (CN XI)" },
            { name: "Scalenes", origin: "Transverse processes C2-C7", insertion: "1st and 2nd ribs", action: "Lateral flexion, elevation of ribs", nerve: "Anterior rami C3-C8" },
          ],
          nerves: ["Cervical plexus (C1-C4)", "Brachial plexus (C5-T1)", "Phrenic nerve (C3-C5)"],
          vessels: ["Vertebral arteries (transverse foramina C1-C6)"],
          ligaments: ["Anterior/posterior longitudinal ligaments", "Ligamentum flavum", "Alar ligaments", "Transverse ligament of atlas"],
        },
        injuries: [
          { name: "C5-C6 Disc Herniation", mechanism: "Most common cervical herniation level", nerve: "C6 root (exits above C6)", findings: "Biceps weakness, decreased biceps reflex, lateral forearm numbness", exam: "Spurling test, check C6 dermatome" },
          { name: "C6-C7 Disc Herniation", mechanism: "Second most common", nerve: "C7 root", findings: "Triceps weakness, decreased triceps reflex, middle finger numbness", exam: "Spurling test" },
          { name: "Central Cord Syndrome", mechanism: "Hyperextension in elderly with spinal stenosis", nerve: "Central cord (arms > legs)", findings: "Upper extremity weakness > lower, cape-like sensory loss", exam: "Motor exam: arms weaker than legs" },
        ],
        specialTests: [
          { name: "Spurling Test", purpose: "Cervical radiculopathy", technique: "Extend + rotate + axially load cervical spine", positive: "Radicular pain down arm" },
          { name: "Lhermitte Sign", purpose: "Posterior column disease", technique: "Passive neck flexion", positive: "Electric shock sensation down spine" },
        ],
      },
      lumbar: {
        label: "Lumbar Spine",
        anatomy: {
          bones: ["L1-L5 vertebral bodies (largest)", "Sacrum (5 fused)", "Coccyx"],
          muscles: [
            { name: "Erector spinae", origin: "Sacrum, iliac crest", insertion: "Ribs, transverse/spinous processes", action: "Spinal extension", nerve: "Posterior rami" },
            { name: "Psoas major", origin: "T12-L5", insertion: "Lesser trochanter", action: "Hip flexion", nerve: "L1-L3" },
            { name: "Quadratus lumborum", origin: "Iliac crest", insertion: "12th rib, L1-L4 transverse processes", action: "Lateral flexion", nerve: "T12-L4" },
          ],
          nerves: ["Lumbar plexus (L1-L4)", "Lumbosacral plexus (L4-S3)", "Conus medullaris (L1-L2)", "Cauda equina (below L2)"],
          vessels: ["Lumbar arteries", "Artery of Adamkiewicz (T9-T12, left)"],
          ligaments: ["Anterior/posterior longitudinal ligaments", "Ligamentum flavum", "Interspinous ligaments", "Iliolumbar ligament"],
        },
        injuries: [
          { name: "L4-L5 Disc Herniation", mechanism: "Most common lumbar herniation", nerve: "L5 root", findings: "Foot drop, weakness of dorsiflexion + EHL, numbness lateral leg + dorsal foot", exam: "SLR positive, check L5 dermatome" },
          { name: "L5-S1 Disc Herniation", mechanism: "Second most common", nerve: "S1 root", findings: "Decreased ankle jerk, weakness of plantarflexion, numbness lateral/plantar foot", exam: "SLR positive, check S1 reflex" },
          { name: "Cauda Equina Syndrome", mechanism: "Massive central disc herniation, tumor, abscess", nerve: "Multiple sacral roots", findings: "Saddle anesthesia, urinary retention/incontinence, bilateral leg weakness, decreased rectal tone", exam: "EMERGENCY: rectal exam, post-void residual, bilateral SLR" },
          { name: "Spinal Stenosis", mechanism: "Degenerative narrowing, typically elderly", nerve: "Multiple roots", findings: "Neurogenic claudication: pain with walking, relief with flexion (shopping cart sign)", exam: "Symptoms relieved by sitting/flexion, worsened by extension" },
        ],
        specialTests: [
          { name: "Straight Leg Raise (SLR)", purpose: "L4-S1 radiculopathy (disc herniation)", technique: "Supine, passively raise extended leg", positive: "Radicular pain 30-70° (below knee)" },
          { name: "Crossed SLR", purpose: "Disc herniation (more specific)", technique: "SLR on unaffected side", positive: "Pain in affected leg" },
          { name: "Femoral Nerve Stretch", purpose: "Upper lumbar radiculopathy (L2-L4)", technique: "Prone, flex knee, extend hip", positive: "Anterior thigh pain" },
        ],
      },
    },
  },
};

/* (Generated from shared KB v1.0.0) */
const NERVE_DATA = [
  {
    "name": "Radial Nerve",
    "roots": "C5-C6-C7-C8-T1",
    "course": "Posterior arm, spiral groove of humerus",
    "fracture": "Midshaft humerus fracture → wrist drop",
    "motor": "Wrist extension, Finger extension (MCP), Triceps (if high lesion), Brachioradialis, Supinator",
    "sensory": "Posterior arm/forearm, dorsal hand (1st dorsal web space)",
    "exam": "Wrist drop, cannot extend fingers/wrist, check 1st dorsal web space sensation",
    "icon": "🤚"
  },
  {
    "name": "Median Nerve",
    "roots": "C5-C6-C7-C8-T1",
    "course": "Anterior arm, carpal tunnel",
    "fracture": "Supracondylar fracture (AIN), Carpal tunnel syndrome",
    "motor": "Forearm pronation, Wrist flexion (FCR), Finger flexion (FDS, lateral FDP), Thenar muscles (opposition, abduction), Lumbricals 1-2",
    "sensory": "Palmar thumb, index, middle, lateral ring finger",
    "exam": "Hand of benediction (high lesion), ape hand (low/carpal tunnel), Phalen/Tinel positive",
    "icon": "✋"
  },
  {
    "name": "Ulnar Nerve",
    "roots": "C8-T1",
    "course": "Medial arm, posterior to medial epicondyle, Guyon canal",
    "fracture": "Medial epicondyle fracture, Hook of hamate fracture, Guyon canal syndrome",
    "motor": "FCU, Medial FDP (digits 4-5), Interossei (all), Lumbricals 3-4, Hypothenar muscles, Adductor pollicis",
    "sensory": "Medial 1.5 fingers (ring/small), medial palm",
    "exam": "Claw hand (MCP hyperextension, IP flexion in digits 4-5), Froment sign, Wartenberg sign",
    "icon": "🤏"
  },
  {
    "name": "Axillary Nerve",
    "roots": "C5-C6",
    "course": "Quadrangular space, around surgical neck of humerus",
    "fracture": "Surgical neck humerus fracture, Anterior shoulder dislocation",
    "motor": "Deltoid (abduction 15-90°), Teres minor",
    "sensory": "Regimental badge area (lateral deltoid)",
    "exam": "Cannot abduct shoulder past 15°, loss of deltoid contour, numbness over regimental badge area",
    "icon": "💪"
  },
  {
    "name": "Musculocutaneous Nerve",
    "roots": "C5-C6-C7",
    "course": "Pierces coracobrachialis, between biceps and brachialis",
    "fracture": "Rare isolated injury",
    "motor": "Biceps, Brachialis, Coracobrachialis",
    "sensory": "Lateral forearm (lateral cutaneous nerve of forearm)",
    "exam": "Weak elbow flexion and supination, numbness lateral forearm",
    "icon": "💪"
  },
  {
    "name": "Femoral Nerve",
    "roots": "L2-L3-L4",
    "course": "Psoas → under inguinal ligament → anterior thigh",
    "fracture": "Pelvic fracture, Psoas abscess",
    "motor": "Iliopsoas (hip flexion), Quadriceps (knee extension), Sartorius",
    "sensory": "Anterior thigh, medial leg (saphenous nerve)",
    "exam": "Cannot extend knee, absent patellar reflex, numbness anterior thigh",
    "icon": "🦵"
  },
  {
    "name": "Sciatic Nerve",
    "roots": "L4-L5-S1-S2-S3",
    "course": "Greater sciatic foramen, posterior thigh",
    "fracture": "Posterior hip dislocation",
    "motor": "Hamstrings, All muscles below knee (via tibial + common peroneal)",
    "sensory": "Posterior thigh, all below knee",
    "exam": "Foot drop + inability to plantarflex, absent ankle jerk, absent knee flexion strength",
    "icon": "🦶"
  },
  {
    "name": "Common Peroneal Nerve",
    "roots": "L4-L5-S1-S2",
    "course": "Wraps around fibular neck (most vulnerable nerve in leg)",
    "fracture": "Fibular neck fracture, Tight cast, Prolonged leg crossing → foot drop",
    "motor": "Tibialis anterior (dorsiflexion), Extensor digitorum, Peroneus longus/brevis (eversion)",
    "sensory": "Lateral leg, dorsal foot, 1st dorsal web space (deep peroneal)",
    "exam": "Foot drop (steppage gait), cannot dorsiflex or evert, numbness lateral leg/dorsal foot",
    "icon": "🦶"
  }
];

/* (Generated from shared KB v1.0.0) */
const DERMATOME_MAP = {
  "C5": "Lateral arm (deltoid region)",
  "C6": "Lateral forearm, thumb, index finger",
  "C7": "Middle finger",
  "C8": "Medial forearm, ring + small fingers",
  "T1": "Medial arm",
  "T4": "Nipple line",
  "T10": "Umbilicus",
  "L1": "Inguinal region",
  "L2": "Anterior thigh (upper)",
  "L3": "Anterior thigh (lower), medial knee",
  "L4": "Medial leg, medial foot",
  "L5": "Lateral leg, dorsum of foot, great toe",
  "S1": "Lateral foot, small toe, posterior calf",
  "S2-S4": "Perianal region (saddle area)"
};

/* (Generated from shared KB v1.0.0) */
const MYOTOME_MAP = {
  "C5": "Shoulder abduction (deltoid), elbow flexion (biceps)",
  "C6": "Wrist extension, elbow flexion (brachioradialis)",
  "C7": "Elbow extension (triceps), wrist flexion",
  "C8": "Finger flexion, grip strength",
  "T1": "Finger abduction (interossei)",
  "T4": "Intercostal muscles",
  "T10": "Abdominal muscles",
  "L1": "Hip flexion (partial)",
  "L2": "Hip flexion",
  "L3": "Knee extension",
  "L4": "Ankle dorsiflexion",
  "L5": "Great toe extension (EHL)",
  "S1": "Ankle plantarflexion, hip extension",
  "S2-S4": "Bladder, bowel, pelvic floor"
};

/* (Generated from shared KB v1.0.0) */
const REFLEX_MAP = {
  "C5": "Biceps reflex",
  "C6": "Brachioradialis reflex",
  "C7": "Triceps reflex",
  "L3": "Patellar reflex (with L4)",
  "L4": "Patellar reflex (with L3)",
  "S1": "Achilles reflex",
  "S2-S4": "Bulbocavernosus, anal wink"
};

const COMPARTMENTS = [
  { region: "Anterior Arm", muscles: ["Biceps brachii", "Brachialis", "Coracobrachialis"], nerve: "Musculocutaneous n. (C5-C7)", artery: "Brachial a.", action: "Elbow flexion, supination", syndrome: "Rare; Volkmann contracture (forearm)" },
  { region: "Posterior Arm", muscles: ["Triceps brachii"], nerve: "Radial n. (C6-C8)", artery: "Deep brachial a.", action: "Elbow extension", syndrome: "Rare" },
  { region: "Anterior Forearm", muscles: ["FDS, FDP, FCR, FCU, Pronator teres, PL", "Deep: FPL, PQ, AIN muscles"], nerve: "Median + Ulnar nn.", artery: "Ulnar + Radial aa.", action: "Wrist/finger flexion, pronation", syndrome: "Volkmann ischemic contracture: supracondylar fracture → compartment syndrome → contracture" },
  { region: "Anterior Thigh", muscles: ["Quadriceps (rectus femoris, vastus lateralis/medialis/intermedius)", "Sartorius"], nerve: "Femoral n. (L2-L4)", artery: "Femoral a.", action: "Knee extension, hip flexion", syndrome: "After femur fracture; quadriceps weakness, numbness anterior thigh" },
  { region: "Posterior Thigh", muscles: ["Biceps femoris", "Semimembranosus", "Semitendinosus"], nerve: "Sciatic n. (tibial division)", artery: "Perforating branches of profunda femoris", action: "Knee flexion, hip extension", syndrome: "Rare; prolonged compression" },
  { region: "Anterior Leg", muscles: ["Tibialis anterior", "Extensor hallucis longus", "Extensor digitorum longus"], nerve: "Deep peroneal n. (L4-L5)", artery: "Anterior tibial a.", action: "Dorsiflexion, toe extension", syndrome: "MOST COMMON compartment syndrome site. Pain with passive toe flexion, foot drop, numbness 1st web space" },
  { region: "Lateral Leg", muscles: ["Peroneus longus", "Peroneus brevis"], nerve: "Superficial peroneal n. (L5-S1)", artery: "Peroneal a. branches", action: "Eversion", syndrome: "Numbness dorsum of foot, weak eversion" },
  { region: "Posterior Leg (Superficial)", muscles: ["Gastrocnemius", "Soleus", "Plantaris"], nerve: "Tibial n. (S1-S2)", artery: "Posterior tibial a.", action: "Plantarflexion", syndrome: "Weakness of plantarflexion" },
  { region: "Posterior Leg (Deep)", muscles: ["Tibialis posterior", "FDL", "FHL", "Popliteus"], nerve: "Tibial n.", artery: "Posterior tibial/peroneal aa.", action: "Inversion, toe flexion", syndrome: "Pain with passive toe extension, weakness inversion" },
];

// ─── Quiz/Flashcard System ─────────────────────────────────────────────────
function generateQuestions(region, type) {
  /* (Generated from shared KB v1.0.0, 120 verified items) */
  const allQs = [
  {
    "q": "A patient falls on an outstretched hand. X-ray shows a surgical neck fracture of the humerus. Which nerve is MOST at risk?",
    "options": [
      "Radial nerve",
      "Axillary nerve",
      "Musculocutaneous nerve",
      "Median nerve"
    ],
    "answer": 1,
    "explanation": "The axillary nerve wraps around the surgical neck of the humerus. Injury → deltoid paralysis and regimental badge area numbness."
  },
  {
    "q": "Which is the MOST sensitive test for ACL tear?",
    "options": [
      "Anterior drawer",
      "Lachman test",
      "Pivot shift",
      "McMurray test"
    ],
    "answer": 1,
    "explanation": "Lachman test (knee 20-30° flexion, anterior tibial translation) is most sensitive for ACL. Anterior drawer has lower sensitivity due to hamstring guarding."
  },
  {
    "q": "A patient has foot drop after a fibular neck fracture. Which nerve is injured?",
    "options": [
      "Tibial nerve",
      "Femoral nerve",
      "Common peroneal nerve",
      "Saphenous nerve"
    ],
    "answer": 2,
    "explanation": "Common peroneal nerve wraps around fibular neck — most vulnerable nerve in the leg. Injury → foot drop (loss of dorsiflexion and eversion)."
  },
  {
    "q": "Wrist drop is caused by injury to which nerve?",
    "options": [
      "Median nerve",
      "Ulnar nerve",
      "Radial nerve",
      "Musculocutaneous nerve"
    ],
    "answer": 2,
    "explanation": "Radial nerve innervates wrist extensors. Injury (classically midshaft humerus fracture) causes wrist drop."
  },
  {
    "q": "Positive Froment sign indicates injury to which nerve?",
    "options": [
      "Median nerve",
      "Ulnar nerve",
      "Radial nerve",
      "Anterior interosseous nerve"
    ],
    "answer": 1,
    "explanation": "Froment sign tests adductor pollicis (ulnar nerve). Patient compensates by flexing thumb IP using FPL (median), indicating ulnar palsy."
  },
  {
    "q": "Which disc herniation causes decreased ankle jerk reflex?",
    "options": [
      "L3-L4",
      "L4-L5",
      "L5-S1",
      "S1-S2"
    ],
    "answer": 2,
    "explanation": "L5-S1 compresses S1 root → decreased Achilles reflex, weakness of plantarflexion, numbness lateral/plantar foot."
  },
  {
    "q": "Saddle anesthesia, urinary retention, and bilateral leg weakness suggest:",
    "options": [
      "Conus medullaris syndrome",
      "Cauda equina syndrome",
      "Spinal stenosis",
      "Brown-Séquard syndrome"
    ],
    "answer": 1,
    "explanation": "Cauda equina syndrome = surgical EMERGENCY. Massive central disc herniation compressing nerve roots → saddle anesthesia, urinary retention, bilateral deficits."
  },
  {
    "q": "Which compartment is the MOST common site of compartment syndrome?",
    "options": [
      "Anterior arm",
      "Anterior forearm",
      "Anterior leg",
      "Posterior thigh"
    ],
    "answer": 2,
    "explanation": "Anterior leg is the most common site. Pain with passive toe flexion, numbness of 1st web space (deep peroneal nerve), tense swelling."
  },
  {
    "q": "Which nerve root is tested by the patellar reflex?",
    "options": [
      "L2-L3",
      "L3-L4",
      "L4-L5",
      "S1-S2"
    ],
    "answer": 1,
    "explanation": "Patellar (knee jerk) reflex tests L3-L4 via femoral nerve and quadriceps."
  },
  {
    "q": "Anatomical snuffbox tenderness suggests fracture of:",
    "options": [
      "Lunate",
      "Scaphoid",
      "Triquetrum",
      "Hamate"
    ],
    "answer": 1,
    "explanation": "Scaphoid fracture: snuffbox tenderness, may be X-ray occult initially. Risk of AVN (blood supply enters distally)."
  },
  {
    "q": "A posterior hip dislocation (dashboard injury) puts which nerve at risk?",
    "options": [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Superior gluteal nerve"
    ],
    "answer": 2,
    "explanation": "Posterior hip dislocation (dashboard injury) can injure sciatic nerve in ~10%. Leg is shortened, internally rotated, adducted."
  },
  {
    "q": "Trendelenburg sign indicates weakness of which muscle?",
    "options": [
      "Gluteus maximus",
      "Gluteus medius",
      "Quadriceps",
      "Iliopsoas"
    ],
    "answer": 1,
    "explanation": "Positive Trendelenburg = contralateral hip drop on single-leg stance, indicating gluteus medius weakness. Innervated by superior gluteal nerve (L4-S1)."
  },
  {
    "q": "Thompson test evaluates:",
    "options": [
      "Patellar tendon rupture",
      "Achilles tendon rupture",
      "ACL integrity",
      "Plantar fascia integrity"
    ],
    "answer": 1,
    "explanation": "Thompson test: prone, squeeze calf → should cause plantarflexion. No plantarflexion = Achilles rupture."
  },
  {
    "q": "A patient has thenar atrophy and numbness of thumb, index, and middle fingers. Which nerve is affected?",
    "options": [
      "Ulnar nerve",
      "Radial nerve",
      "Median nerve",
      "Musculocutaneous nerve"
    ],
    "answer": 2,
    "explanation": "Median nerve: thenar muscles + sensation to palmar lateral 3.5 digits. Carpal tunnel syndrome is the classic presentation."
  },
  {
    "q": "The 'unhappy triad' of the knee involves:",
    "options": [
      "ACL + LCL + lateral meniscus",
      "ACL + MCL + medial meniscus",
      "PCL + MCL + medial meniscus",
      "PCL + LCL + lateral meniscus"
    ],
    "answer": 1,
    "explanation": "Unhappy triad: ACL + MCL + medial meniscus, from lateral blow to planted leg (valgus + external rotation)."
  },
  {
    "q": "Which test evaluates subacromial impingement?",
    "options": [
      "Apprehension test",
      "Neer test",
      "Speed test",
      "O'Brien test"
    ],
    "answer": 1,
    "explanation": "Neer test: stabilize scapula, passively forward flex with forearm internally rotated. Pain = supraspinatus impingement under acromion."
  },
  {
    "q": "Which test specifically evaluates the supraspinatus?",
    "options": [
      "Speed test",
      "Empty can (Jobe) test",
      "Apprehension test",
      "O'Brien test"
    ],
    "answer": 1,
    "explanation": "Empty can (Jobe) test: arms 90° abduction, 30° forward flexion, thumbs pointing down, resist downward pressure. Pain/weakness = supraspinatus pathology."
  },
  {
    "q": "A 14-year-old obese boy presents with hip pain and obligate external rotation with hip flexion. Most likely diagnosis?",
    "options": [
      "Legg-Calve-Perthes",
      "SCFE",
      "Septic arthritis",
      "Transient synovitis"
    ],
    "answer": 1,
    "explanation": "SCFE: obese adolescent, hip/knee pain, obligate external rotation during flexion. Frog-leg lateral X-ray shows posterior epiphyseal displacement."
  },
  {
    "q": "A patient cannot extend the DIP after a ball struck the fingertip. Diagnosis?",
    "options": [
      "Jersey finger",
      "Mallet finger",
      "Boutonniere deformity",
      "Swan neck deformity"
    ],
    "answer": 1,
    "explanation": "Mallet finger: terminal extensor tendon disruption at DIP → droop. Caused by forced flexion during active extension (ball striking fingertip)."
  },
  {
    "q": "A football player cannot flex the DIP of ring finger after grabbing a jersey. Diagnosis?",
    "options": [
      "Mallet finger",
      "Jersey finger",
      "Gamekeeper thumb",
      "Trigger finger"
    ],
    "answer": 1,
    "explanation": "Jersey finger: FDP avulsion from distal phalanx. Ring finger most common. Cannot actively flex DIP. Forced extension during active DIP flexion."
  },
  {
    "q": "Midfoot pain with inability to bear weight and plantar ecchymosis after axial load injury suggests:",
    "options": [
      "Jones fracture",
      "Lisfranc injury",
      "Achilles rupture",
      "Plantar fasciitis"
    ],
    "answer": 1,
    "explanation": "Lisfranc injury: tarsometatarsal joint disruption. Often missed on initial X-ray. Plantar ecchymosis is a key sign. Weightbearing X-rays needed."
  },
  {
    "q": "A lateral blow to the knee injures the:",
    "options": [
      "ACL",
      "PCL",
      "MCL",
      "LCL"
    ],
    "answer": 2,
    "explanation": "Lateral blow → valgus stress → MCL tear. Test at 30° flexion to isolate MCL. At full extension, cruciates also contribute."
  },
  {
    "q": "Posterior drawer test is positive. Which structure is injured?",
    "options": [
      "ACL",
      "PCL",
      "MCL",
      "Medial meniscus"
    ],
    "answer": 1,
    "explanation": "PCL prevents posterior translation of tibia. Dashboard injury (posterior force on flexed knee) is classic mechanism."
  },
  {
    "q": "A positive McMurray test with a click at the medial joint line suggests:",
    "options": [
      "ACL tear",
      "MCL sprain",
      "Medial meniscal tear",
      "Patellar dislocation"
    ],
    "answer": 2,
    "explanation": "McMurray test: flex knee, externally rotate + extend for medial meniscus. Click/pain at joint line = meniscal tear."
  },
  {
    "q": "A 13-year-old has knee pain worse with running and a tender bump at the tibial tuberosity. Diagnosis?",
    "options": [
      "Osgood-Schlatter disease",
      "Patellofemoral syndrome",
      "ACL tear",
      "Meniscal tear"
    ],
    "answer": 0,
    "explanation": "Osgood-Schlatter: traction apophysitis at tibial tuberosity in adolescents. Painful bump, worse with activity. Self-limiting."
  },
  {
    "q": "Why is scaphoid fracture at risk for avascular necrosis?",
    "options": [
      "No periosteal blood supply",
      "Blood supply enters distally",
      "Located in a tendon sheath",
      "Purely cartilaginous"
    ],
    "answer": 1,
    "explanation": "Scaphoid blood supply enters distally (retrograde flow). Proximal pole fractures disrupt supply → high AVN risk. Similar to femoral head."
  },
  {
    "q": "A child with a supracondylar fracture has weak thumb-index pinch and absent forearm pronation. Which nerve is injured?",
    "options": [
      "Radial nerve",
      "Ulnar nerve",
      "Anterior interosseous nerve (AIN)",
      "Posterior interosseous nerve"
    ],
    "answer": 2,
    "explanation": "AIN (branch of median): pure motor. Innervates FPL, pronator quadratus, lateral FDP. Tested by making an 'OK' sign. No sensory loss."
  },
  {
    "q": "Claw hand (MCP hyperextension, IP flexion in digits 4-5) is caused by injury to:",
    "options": [
      "Radial nerve",
      "Median nerve",
      "Ulnar nerve",
      "Musculocutaneous nerve"
    ],
    "answer": 2,
    "explanation": "Ulnar nerve palsy → loss of lumbricals 3-4 and interossei → unopposed MCP extension (by EDC) with IP flexion. 'Claw hand' worse in LOW ulnar lesions (ulnar paradox)."
  },
  {
    "q": "Upper trunk brachial plexus injury (C5-C6) results in:",
    "options": [
      "Wrist drop",
      "Waiter's tip position",
      "Claw hand",
      "Ape hand"
    ],
    "answer": 1,
    "explanation": "Erb-Duchenne palsy (C5-C6): arm hangs by side, medially rotated, forearm pronated = waiter's tip. Loss of deltoid, biceps, brachialis, supraspinatus."
  },
  {
    "q": "Lower trunk brachial plexus injury (C8-T1) results in:",
    "options": [
      "Waiter's tip",
      "Wrist drop",
      "Total claw hand + Horner syndrome",
      "Foot drop"
    ],
    "answer": 2,
    "explanation": "Klumpke palsy (C8-T1): total claw hand (all lumbricals + interossei affected). May have Horner syndrome if T1 sympathetic fibers damaged."
  },
  {
    "q": "A midshaft humerus fracture puts which nerve at risk?",
    "options": [
      "Axillary nerve",
      "Radial nerve",
      "Ulnar nerve",
      "Median nerve"
    ],
    "answer": 1,
    "explanation": "Radial nerve travels in the spiral (radial) groove of the humerus. Midshaft fracture → wrist drop."
  },
  {
    "q": "'Saturday night palsy' (arm draped over chair) injures the:",
    "options": [
      "Median nerve",
      "Ulnar nerve",
      "Radial nerve",
      "Musculocutaneous nerve"
    ],
    "answer": 2,
    "explanation": "Prolonged compression of radial nerve in spiral groove → wrist drop. Named for passing out drunk with arm over chair."
  },
  {
    "q": "'Ape hand' (loss of thenar eminence, cannot oppose thumb) is caused by:",
    "options": [
      "Ulnar nerve injury",
      "Radial nerve injury",
      "Median nerve injury",
      "Musculocutaneous nerve injury"
    ],
    "answer": 2,
    "explanation": "Median nerve at wrist (carpal tunnel) → loss of thenar muscles (opponens pollicis, abductor pollicis brevis) → ape hand/flat thenar eminence."
  },
  {
    "q": "'Hand of benediction' (cannot flex digits 2-3 when making a fist) indicates:",
    "options": [
      "Low ulnar nerve injury",
      "High median nerve injury",
      "Radial nerve injury",
      "Low median nerve injury"
    ],
    "answer": 1,
    "explanation": "High median injury (above elbow) → loss of FDS + lateral FDP → cannot flex index/middle fingers. When trying to make a fist, digits 2-3 stay extended."
  },
  {
    "q": "The 'ulnar paradox' refers to:",
    "options": [
      "Ulnar nerve injuries cause no deficit",
      "Claw hand is WORSE in LOW ulnar injuries",
      "Claw hand is WORSE in HIGH ulnar injuries",
      "Ulnar nerve regenerates faster than other nerves"
    ],
    "answer": 1,
    "explanation": "Low ulnar injury → worse claw because FDP to digits 4-5 is intact (still flexes IP joints while MCP hyperextends). High injury → FDP also lost, so less clawing."
  },
  {
    "q": "Wartenberg sign (small finger abduction at rest) indicates injury to:",
    "options": [
      "Radial nerve",
      "Median nerve",
      "Ulnar nerve",
      "Musculocutaneous nerve"
    ],
    "answer": 2,
    "explanation": "Ulnar nerve → interossei (finger adduction). Loss → EDM (radial nerve) pulls 5th finger into abduction unopposed = Wartenberg sign."
  },
  {
    "q": "Winged scapula is caused by injury to:",
    "options": [
      "Axillary nerve",
      "Suprascapular nerve",
      "Long thoracic nerve",
      "Dorsal scapular nerve"
    ],
    "answer": 2,
    "explanation": "Long thoracic nerve (C5-C7) innervates serratus anterior. Injury → medial winging of scapula, especially with forward flexion or pushing."
  },
  {
    "q": "The superior gluteal nerve innervates the gluteus medius. Injury causes:",
    "options": [
      "Inability to extend hip",
      "Trendelenburg gait (contralateral hip drop)",
      "Foot drop",
      "Loss of knee extension"
    ],
    "answer": 1,
    "explanation": "Gluteus medius (L4-S1) = hip abductor. Weakness → pelvis drops on contralateral side during single-leg stance = Trendelenburg."
  },
  {
    "q": "The obturator nerve (L2-L4) innervates the:",
    "options": [
      "Quadriceps",
      "Hip adductors",
      "Hamstrings",
      "Hip flexors"
    ],
    "answer": 1,
    "explanation": "Obturator nerve → adductors (adductor longus, brevis, magnus partial, gracilis). Courses through obturator foramen. Injury: pelvic fracture, obturator hernia."
  },
  {
    "q": "Tarsal tunnel syndrome involves compression of the:",
    "options": [
      "Common peroneal nerve",
      "Deep peroneal nerve",
      "Tibial nerve",
      "Sural nerve"
    ],
    "answer": 2,
    "explanation": "Tibial nerve passes behind the medial malleolus in the tarsal tunnel. Compression → burning/tingling in sole of foot. Ankle equivalent of carpal tunnel."
  },
  {
    "q": "The rotator cuff muscles from superior to inferior are:",
    "options": [
      "Supraspinatus, infraspinatus, teres minor, subscapularis",
      "Subscapularis, supraspinatus, infraspinatus, teres minor",
      "Supraspinatus, subscapularis, infraspinatus, teres minor",
      "Infraspinatus, supraspinatus, teres minor, subscapularis"
    ],
    "answer": 1,
    "explanation": "SITS mnemonic: Supraspinatus (abduction initiation), Infraspinatus (external rotation), Teres minor (external rotation), Subscapularis (internal rotation, anterior)."
  },
  {
    "q": "Hawkins-Kennedy test evaluates:",
    "options": [
      "ACL integrity",
      "Subacromial impingement",
      "Biceps tendon",
      "Labral tear"
    ],
    "answer": 1,
    "explanation": "Hawkins-Kennedy: forward flex shoulder 90°, then internally rotate. Pain = impingement of supraspinatus under coracoacromial arch."
  },
  {
    "q": "Speed test (resisted forward flexion with elbow extended, forearm supinated) evaluates:",
    "options": [
      "Supraspinatus",
      "Biceps tendon/labrum",
      "ACL",
      "Infraspinatus"
    ],
    "answer": 1,
    "explanation": "Speed test: pain in bicipital groove with resisted forward flexion = biceps tendinopathy or SLAP tear."
  },
  {
    "q": "O'Brien test (active compression) evaluates:",
    "options": [
      "Rotator cuff tear",
      "SLAP lesion",
      "Impingement",
      "ACL tear"
    ],
    "answer": 1,
    "explanation": "O'Brien: arm 90° flexion, 10° adduction, thumb down → resist downward force (pain). Then repeat thumb up → less pain = SLAP tear."
  },
  {
    "q": "The apprehension test evaluates:",
    "options": [
      "Rotator cuff",
      "Anterior shoulder instability",
      "Impingement",
      "Labral tear"
    ],
    "answer": 1,
    "explanation": "Apprehension: abduct 90°, externally rotate → patient feels shoulder about to dislocate = positive for anterior instability. Relocation test reduces apprehension."
  },
  {
    "q": "The pivot shift test is specific for:",
    "options": [
      "PCL tear",
      "MCL tear",
      "ACL tear",
      "Meniscal tear"
    ],
    "answer": 2,
    "explanation": "Pivot shift: valgus + internal rotation during extension → tibia subluxes anteriorly then reduces with flexion = ACL insufficiency. Most specific but less sensitive than Lachman."
  },
  {
    "q": "Varus stress test at 30° evaluates:",
    "options": [
      "MCL",
      "LCL",
      "ACL",
      "PCL"
    ],
    "answer": 1,
    "explanation": "Varus stress (medial-to-lateral force) tests LCL. At 30° flexion isolates LCL. At full extension, cruciates also contribute."
  },
  {
    "q": "The anterior drawer test of the ANKLE evaluates:",
    "options": [
      "Achilles tendon",
      "Anterior talofibular ligament (ATFL)",
      "Calcaneofibular ligament",
      "Deltoid ligament"
    ],
    "answer": 1,
    "explanation": "Ankle anterior drawer: stabilize tibia, translate talus anteriorly. Positive = ATFL tear (most commonly injured ankle ligament in inversion sprain)."
  },
  {
    "q": "A Jones fracture involves:",
    "options": [
      "Proximal 5th metatarsal base (tuberosity avulsion)",
      "5th metatarsal diaphysis-metaphysis junction",
      "1st metatarsal",
      "Navicular"
    ],
    "answer": 1,
    "explanation": "Jones fracture: 5th metatarsal metaphyseal-diaphyseal junction (watershed zone, poor blood supply → nonunion risk). Pseudo-Jones = base avulsion (better prognosis)."
  },
  {
    "q": "A boxer's fracture is a fracture of the:",
    "options": [
      "2nd metacarpal neck",
      "5th metacarpal neck",
      "Scaphoid",
      "Distal radius"
    ],
    "answer": 1,
    "explanation": "Boxer's fracture: 5th metacarpal neck from punching. Presents with loss of knuckle prominence and pain."
  },
  {
    "q": "A fall on outstretched hand causing a 'dinner fork' deformity is:",
    "options": [
      "Smith fracture",
      "Colles fracture",
      "Monteggia fracture",
      "Galeazzi fracture"
    ],
    "answer": 1,
    "explanation": "Colles: distal radius fracture with dorsal displacement/angulation → dinner fork deformity. Most common wrist fracture. Smith = reverse (volar displacement)."
  },
  {
    "q": "Monteggia fracture-dislocation involves:",
    "options": [
      "Proximal ulna fracture + radial head dislocation",
      "Distal radius fracture + DRUJ dislocation",
      "Both bones forearm fracture",
      "Olecranon fracture only"
    ],
    "answer": 0,
    "explanation": "Monteggia: proximal ulna fracture + radial head dislocation (MUGR: Monteggia = Ulna + radial head Goes). Galeazzi = distal Radius + DRUJ dislocation (GRDU)."
  },
  {
    "q": "Galeazzi fracture-dislocation involves:",
    "options": [
      "Proximal ulna fracture + radial head dislocation",
      "Distal radius fracture + DRUJ dislocation",
      "Scaphoid fracture + lunate dislocation",
      "Both radius and ulna shaft"
    ],
    "answer": 1,
    "explanation": "Galeazzi: distal radius shaft fracture + DRUJ (distal radioulnar joint) dislocation. GRDU mnemonic."
  },
  {
    "q": "A toddler refuses to use their arm after being pulled. Most likely diagnosis:",
    "options": [
      "Supracondylar fracture",
      "Radial head subluxation (nursemaid's elbow)",
      "Clavicle fracture",
      "Brachial plexus injury"
    ],
    "answer": 1,
    "explanation": "Nursemaid's elbow: annular ligament subluxation over radial head from longitudinal traction. Arm held in pronation/slight flexion. Reduced with supination + flexion."
  },
  {
    "q": "A 5-year-old boy with limp and hip pain. X-ray shows femoral head flattening. Diagnosis:",
    "options": [
      "SCFE",
      "Legg-Calve-Perthes",
      "Septic arthritis",
      "Transient synovitis"
    ],
    "answer": 1,
    "explanation": "Legg-Calve-Perthes: AVN of femoral head in children 4-10 years. Males > females. X-ray: femoral head fragmentation/flattening. Self-limited in young patients."
  },
  {
    "q": "A child with fever, refusal to bear weight, elevated ESR/CRP, and joint effusion on ultrasound should be evaluated for:",
    "options": [
      "Transient synovitis",
      "Osgood-Schlatter",
      "Septic arthritis",
      "SCFE"
    ],
    "answer": 2,
    "explanation": "Kocher criteria for septic arthritis: fever, non-weight-bearing, elevated ESR (>40), elevated WBC (>12k). Meeting 3-4 criteria → high probability → joint aspiration needed."
  },
  {
    "q": "Boutonniere deformity (PIP flexion + DIP hyperextension) is caused by disruption of:",
    "options": [
      "Terminal extensor tendon",
      "Central slip of extensor tendon",
      "FDS tendon",
      "Volar plate"
    ],
    "answer": 1,
    "explanation": "Central slip disruption at PIP → lateral bands slip volar → PIP flexion + DIP hyperextension. Opposite of swan neck deformity."
  },
  {
    "q": "Swan neck deformity (PIP hyperextension + DIP flexion) is associated with:",
    "options": [
      "Mallet finger",
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Dupuytren contracture"
    ],
    "answer": 1,
    "explanation": "Swan neck: PIP hyperextension + DIP flexion. Common in RA (volar plate laxity). Opposite of boutonniere."
  },
  {
    "q": "Painless progressive flexion contracture of the ring and small finger MCP/PIP joints is:",
    "options": [
      "Trigger finger",
      "Dupuytren contracture",
      "Volkmann contracture",
      "De Quervain tenosynovitis"
    ],
    "answer": 1,
    "explanation": "Dupuytren: palmar fascia fibrosis → flexion contractures of digits 4-5. Associated with alcoholism, diabetes, Northern European descent. Painless nodules/cords."
  },
  {
    "q": "Pain over the radial styloid with Finkelstein test positive suggests:",
    "options": [
      "Carpal tunnel",
      "De Quervain tenosynovitis",
      "Scaphoid fracture",
      "Trigger thumb"
    ],
    "answer": 1,
    "explanation": "De Quervain: stenosing tenosynovitis of 1st dorsal compartment (APL + EPB). Finkelstein: ulnar deviate wrist with thumb in fist → radial styloid pain."
  },
  {
    "q": "Newborn: right arm adducted, internally rotated, forearm pronated (waiter's tip) after forceps delivery. Roots injured?",
    "options": [
      "C8-T1",
      "C5-C6 (Erb-Duchenne)",
      "Radial nerve",
      "Posterior cord"
    ],
    "answer": 1,
    "explanation": "Erb-Duchenne: C5-C6. Waiter's tip. Loss of deltoid, supraspinatus, biceps, brachioradialis."
  },
  {
    "q": "Newborn: claw hand + ipsilateral Horner syndrome. Roots?",
    "options": [
      "C5-C6",
      "C7",
      "C8-T1 (Klumpke)",
      "Total plexus"
    ],
    "answer": 2,
    "explanation": "Klumpke (C8-T1): intrinsic hand muscles lost. T1 -> Horner (ptosis, miosis, anhidrosis)."
  },
  {
    "q": "7-year-old falls on outstretched arm. Displaced supracondylar fracture. FIRST concern?",
    "options": [
      "Ulnar nerve",
      "Radial nerve",
      "Brachial artery / compartment syndrome",
      "Median nerve"
    ],
    "answer": 2,
    "explanation": "Brachial artery injury -> Volkmann contracture. Check pulses. AIN (median branch) also at risk."
  },
  {
    "q": "Forearm pain, tense compartment, pain with passive finger extension after supracondylar fracture. Diagnosis?",
    "options": [
      "Radial palsy",
      "De Quervain",
      "Compartment syndrome (Volkmann)",
      "Carpal tunnel"
    ],
    "answer": 2,
    "explanation": "Volkmann: forearm compartment syndrome. 5 P's. Emergency fasciotomy."
  },
  {
    "q": "Midshaft humerus fracture. Which nerve at risk?",
    "options": [
      "Axillary",
      "Radial (spiral groove)",
      "Ulnar",
      "Median"
    ],
    "answer": 1,
    "explanation": "Radial nerve in spiral groove. Wrist drop. Saturday night palsy = same mechanism."
  },
  {
    "q": "Numbness medial 1.5 digits, cannot spread fingers apart (interossei loss). Nerve?",
    "options": [
      "Median",
      "Radial",
      "Ulnar",
      "Musculocutaneous"
    ],
    "answer": 2,
    "explanation": "Ulnar: medial 1.5 digits, interossei (ABD/ADD fingers), hypothenar."
  },
  {
    "q": "Cannot flex DIP of index finger. Forearm laceration. Nerve branch?",
    "options": [
      "Ulnar",
      "AIN (median branch)",
      "Radial",
      "PIN"
    ],
    "answer": 1,
    "explanation": "AIN: FPL, FDP to 2-3, pronator quadratus. Pure motor. Failed pinch test (O becomes triangle)."
  },
  {
    "q": "Cannot extend fingers at MCP but can extend wrist (ECRL intact). Sensation normal. Branch?",
    "options": [
      "Main radial",
      "PIN",
      "AIN",
      "Superficial radial"
    ],
    "answer": 1,
    "explanation": "PIN: pure motor. Finger/thumb extension at MCP. ECRL branches before PIN -> wrist extension preserved."
  },
  {
    "q": "Lateral knee blow -> foot drop + dorsal foot numbness. Nerve?",
    "options": [
      "Tibial",
      "Deep peroneal",
      "Common peroneal",
      "Femoral"
    ],
    "answer": 2,
    "explanation": "Common peroneal at fibular neck. Most common leg nerve injury."
  },
  {
    "q": "Cannot plantarflex, numbness of sole. Nerve?",
    "options": [
      "Common peroneal",
      "Deep peroneal",
      "Tibial",
      "Femoral"
    ],
    "answer": 2,
    "explanation": "Tibial: gastrocnemius/soleus, intrinsic foot, sole sensation."
  },
  {
    "q": "Right Trendelenburg gait (pelvis drops on LEFT when standing on RIGHT). Nerve?",
    "options": [
      "Right femoral",
      "Right obturator",
      "Right superior gluteal",
      "Right inferior gluteal"
    ],
    "answer": 2,
    "explanation": "Superior gluteal: glut med/min (ABduction). Weak -> contralateral pelvic drop."
  },
  {
    "q": "Difficulty rising from chair. Nerve?",
    "options": [
      "Superior gluteal",
      "Inferior gluteal (glut max)",
      "Femoral",
      "Obturator"
    ],
    "answer": 1,
    "explanation": "Inferior gluteal: gluteus maximus (hip extension). Standing from seated."
  },
  {
    "q": "Knee buckling, no extension, absent patellar reflex. Nerve?",
    "options": [
      "Obturator",
      "Femoral",
      "Sciatic",
      "Common peroneal"
    ],
    "answer": 1,
    "explanation": "Femoral (L2-L4): quadriceps (extension), patellar reflex, anterior thigh sensation."
  },
  {
    "q": "Obese 13-year-old: groin pain, limp, externally rotated leg. XR: posterior femoral epiphysis displacement. Diagnosis?",
    "options": [
      "Perthes",
      "SCFE",
      "Septic arthritis",
      "Osgood-Schlatter"
    ],
    "answer": 1,
    "explanation": "SCFE: adolescent, obese. Frog-leg XR. In-situ pinning."
  },
  {
    "q": "13-year-old athlete: tibial tubercle pain/swelling. Diagnosis?",
    "options": [
      "SCFE",
      "Osgood-Schlatter",
      "Patellar fracture",
      "ACL tear"
    ],
    "answer": 1,
    "explanation": "Osgood-Schlatter: tibial tubercle apophysitis. Self-limited."
  },
  {
    "q": "Knee gives way pivoting. Positive Lachman, anterior drawer, pivot shift. Rapid hemarthrosis. Diagnosis?",
    "options": [
      "PCL",
      "MCL",
      "ACL tear",
      "Meniscus"
    ],
    "answer": 2,
    "explanation": "ACL: pop + rapid hemarthrosis. Lachman most sensitive, pivot shift most specific."
  },
  {
    "q": "Valgus blow to knee -> medial tenderness, laxity at 30 degrees valgus stress. Diagnosis?",
    "options": [
      "LCL",
      "ACL",
      "MCL tear",
      "Lateral meniscus"
    ],
    "answer": 2,
    "explanation": "MCL: resists valgus. Most commonly injured knee ligament."
  },
  {
    "q": "McMurray test: click on external rotation at medial joint line. Diagnosis?",
    "options": [
      "ACL",
      "MCL",
      "Medial meniscus tear",
      "Lateral meniscus"
    ],
    "answer": 2,
    "explanation": "External rotation -> medial meniscus. Internal rotation -> lateral. Medial more common (attached to MCL)."
  },
  {
    "q": "Unhappy triad involves:",
    "options": [
      "ACL + MCL + medial meniscus",
      "PCL + LCL + lateral meniscus",
      "ACL + LCL + lateral meniscus",
      "PCL + MCL + medial meniscus"
    ],
    "answer": 0,
    "explanation": "Valgus force: ACL + MCL + medial meniscus. Football clipping injury."
  },
  {
    "q": "Dashboard injury (posterior force, knee flexed). Ligament torn?",
    "options": [
      "ACL",
      "MCL",
      "PCL",
      "LCL"
    ],
    "answer": 2,
    "explanation": "PCL: posterior tibial displacement. Posterior drawer positive."
  },
  {
    "q": "Posterior hip dislocation after MVA. Nerve at risk?",
    "options": [
      "Femoral",
      "Obturator",
      "Sciatic",
      "Superior gluteal"
    ],
    "answer": 2,
    "explanation": "Sciatic: posterior to hip joint. Also risk AVN femoral head."
  },
  {
    "q": "Ankle inversion injury. Tenderness anterior to lateral malleolus. Ligament?",
    "options": [
      "Deltoid",
      "CFL",
      "ATFL",
      "Posterior talofibular"
    ],
    "answer": 2,
    "explanation": "ATFL: weakest lateral ligament. 85% of ankle sprains. Inversion + plantarflexion."
  },
  {
    "q": "Calf squeeze -> no plantarflexion. Diagnosis?",
    "options": [
      "DVT",
      "Achilles tendon rupture",
      "Baker cyst",
      "Compartment syndrome"
    ],
    "answer": 1,
    "explanation": "Thompson test positive = Achilles rupture. Pop during pushing off."
  },
  {
    "q": "Gymnast: pop + immediate knee swelling (hemarthrosis). Most likely injury?",
    "options": [
      "Meniscus",
      "MCL",
      "ACL tear",
      "Patellar dislocation"
    ],
    "answer": 2,
    "explanation": "ACL: #1 cause knee hemarthrosis. Audible pop + rapid swelling."
  },
  {
    "q": "Cannot flex DIP of ring finger after grabbing a jersey. Diagnosis?",
    "options": [
      "Mallet",
      "Jersey finger",
      "Boutonniere",
      "Swan neck"
    ],
    "answer": 1,
    "explanation": "Jersey finger: FDP avulsion. Ring finger most common. Forced extension of flexed DIP."
  },
  {
    "q": "Jammed finger -> drooping DIP, cannot actively extend. Diagnosis?",
    "options": [
      "Jersey finger",
      "Mallet finger",
      "Boutonniere",
      "Trigger finger"
    ],
    "answer": 1,
    "explanation": "Mallet: terminal extensor tendon disruption. Splint DIP in extension 6 weeks."
  },
  {
    "q": "RA patient: PIP hyperextension + DIP flexion. Deformity?",
    "options": [
      "Boutonniere",
      "Swan neck",
      "Mallet",
      "Trigger"
    ],
    "answer": 1,
    "explanation": "Swan neck: volar plate laxity in RA. Opposite of boutonniere."
  },
  {
    "q": "Thumb/index/middle numbness waking patient at night. Tinel at wrist positive. Diagnosis?",
    "options": [
      "De Quervain",
      "Cubital tunnel",
      "Carpal tunnel",
      "C6 radiculopathy"
    ],
    "answer": 2,
    "explanation": "Carpal tunnel: median nerve. Lateral 3.5 digits. Night symptoms, positive Tinel/Phalen."
  },
  {
    "q": "Numbness in ring/little finger with elbow flexion. Tinel at elbow. Diagnosis?",
    "options": [
      "Carpal tunnel",
      "Cubital tunnel (ulnar nerve)",
      "Guyon canal",
      "C8 radiculopathy"
    ],
    "answer": 1,
    "explanation": "Cubital tunnel: ulnar nerve at medial epicondyle. Worse with elbow flexion."
  },
  {
    "q": "FOOSH injury -> dinner fork deformity. Diagnosis?",
    "options": [
      "Smith fracture",
      "Colles fracture",
      "Monteggia",
      "Galeazzi"
    ],
    "answer": 1,
    "explanation": "Colles: distal radius, dorsal displacement. Most common wrist fracture. Smith = volar."
  },
  {
    "q": "Proximal ulna fracture + radial head dislocation. Eponym?",
    "options": [
      "Galeazzi",
      "Monteggia",
      "Colles",
      "Essex-Lopresti"
    ],
    "answer": 1,
    "explanation": "Monteggia: MUGR (Ulna + radial head Goes). Galeazzi: GRDU (Radius + DRUJ)."
  },
  {
    "q": "Distal radius shaft fracture + DRUJ dislocation. Eponym?",
    "options": [
      "Monteggia",
      "Galeazzi",
      "Colles",
      "Barton"
    ],
    "answer": 1,
    "explanation": "Galeazzi: distal radius + DRUJ disruption. GRDU mnemonic."
  },
  {
    "q": "Punch -> 5th metacarpal neck fracture. Eponym?",
    "options": [
      "Bennett",
      "Rolando",
      "Boxer's fracture",
      "Gamekeeper"
    ],
    "answer": 2,
    "explanation": "Boxer's fracture: 5th MC neck. Loss of knuckle prominence."
  },
  {
    "q": "5th metatarsal metaphyseal-diaphyseal junction fracture. High nonunion risk. Eponym?",
    "options": [
      "Lisfranc",
      "Jones fracture",
      "Pseudo-Jones",
      "March fracture"
    ],
    "answer": 1,
    "explanation": "Jones: watershed zone, poor blood supply -> nonunion risk. Pseudo-Jones = tuberosity avulsion (better prognosis)."
  },
  {
    "q": "Anatomical snuffbox tenderness after FOOSH. XR initially normal. Most likely fracture?",
    "options": [
      "Lunate",
      "Scaphoid",
      "Triquetrum",
      "Hamate"
    ],
    "answer": 1,
    "explanation": "Scaphoid: most common carpal fracture. XR can be negative initially (MRI if suspicious). Risk: AVN (retrograde blood supply)."
  },
  {
    "q": "Toddler refuses arm use after being pulled. Arm in pronation + slight flexion. Diagnosis?",
    "options": [
      "Supracondylar fracture",
      "Nursemaid's elbow (radial head subluxation)",
      "Clavicle fracture",
      "Brachial plexus injury"
    ],
    "answer": 1,
    "explanation": "Nursemaid's: annular ligament subluxation. Reduce: supination + flexion."
  },
  {
    "q": "5-year-old boy: limp, hip pain. XR: femoral head flattening. Diagnosis?",
    "options": [
      "SCFE",
      "Legg-Calve-Perthes",
      "Septic arthritis",
      "Transient synovitis"
    ],
    "answer": 1,
    "explanation": "Perthes: AVN femoral head, age 4-10, males. Self-limited in young."
  },
  {
    "q": "Child: fever, non-weight-bearing, ESR>40, WBC>12k, joint effusion. Diagnosis?",
    "options": [
      "Transient synovitis",
      "Osgood-Schlatter",
      "Septic arthritis",
      "SCFE"
    ],
    "answer": 2,
    "explanation": "Kocher criteria: 3-4 criteria met -> high probability septic joint -> aspirate."
  },
  {
    "q": "PIP flexion + DIP hyperextension. Central slip rupture. Deformity?",
    "options": [
      "Swan neck",
      "Mallet",
      "Boutonniere",
      "Trigger"
    ],
    "answer": 2,
    "explanation": "Boutonniere: central slip disruption at PIP. Lateral bands slip volar."
  },
  {
    "q": "Painless palmar nodules/cords -> flexion contracture digits 4-5. Associated with alcoholism. Diagnosis?",
    "options": [
      "Trigger finger",
      "Dupuytren contracture",
      "Volkmann",
      "De Quervain"
    ],
    "answer": 1,
    "explanation": "Dupuytren: palmar fascia fibrosis. Ring/little fingers. Alcoholism, diabetes, N European."
  },
  {
    "q": "Radial styloid pain, positive Finkelstein test. Diagnosis?",
    "options": [
      "Carpal tunnel",
      "De Quervain tenosynovitis",
      "Scaphoid fracture",
      "Trigger thumb"
    ],
    "answer": 1,
    "explanation": "De Quervain: 1st dorsal compartment (APL + EPB). Finkelstein: ulnar deviate with thumb in fist."
  },
  {
    "q": "Winged scapula. Nerve?",
    "options": [
      "Axillary",
      "Suprascapular",
      "Long thoracic",
      "Dorsal scapular"
    ],
    "answer": 2,
    "explanation": "Long thoracic (C5-C7): serratus anterior. Medial winging with forward flexion."
  },
  {
    "q": "Loss of thenar eminence, cannot oppose thumb. 'Ape hand.' Nerve?",
    "options": [
      "Ulnar",
      "Radial",
      "Median",
      "Musculocutaneous"
    ],
    "answer": 2,
    "explanation": "Median at wrist: opponens pollicis, APB lost. Carpal tunnel chronic -> thenar atrophy."
  },
  {
    "q": "Cannot flex digits 2-3 when making a fist ('hand of benediction'). Nerve + level?",
    "options": [
      "Low ulnar",
      "High median",
      "Low median",
      "High radial"
    ],
    "answer": 1,
    "explanation": "High median: FDS + lateral FDP lost. Index/middle stay extended in fist."
  },
  {
    "q": "Claw hand WORSE in low vs high ulnar injury. Why?",
    "options": [
      "More muscles affected distally",
      "FDP to 4-5 intact in low (still flexes IP while MCP hyperextends)",
      "Sensory loss is worse",
      "Edema"
    ],
    "answer": 1,
    "explanation": "Ulnar paradox: low = worse claw (FDP intact -> IP flexion + MCP hyperextension). High = FDP also lost -> less clawing."
  },
  {
    "q": "Small finger abducted at rest (Wartenberg sign). Nerve?",
    "options": [
      "Radial",
      "Median",
      "Ulnar",
      "Musculocutaneous"
    ],
    "answer": 2,
    "explanation": "Ulnar: interossei (adduction). EDM (radial) pulls 5th finger ABducted unopposed."
  },
  {
    "q": "Runner with lateral knee pain worse going downhill. Pain at lateral femoral epicondyle. Diagnosis?",
    "options": [
      "LCL",
      "IT band syndrome",
      "Lateral meniscus",
      "Patellofemoral"
    ],
    "answer": 1,
    "explanation": "IT band: friction over lateral condyle. Runners/cyclists. Ober test."
  },
  {
    "q": "Hawkins-Kennedy: forward flex 90 degrees + internal rotation -> pain. Tests?",
    "options": [
      "ACL",
      "Subacromial impingement",
      "Biceps",
      "Labrum"
    ],
    "answer": 1,
    "explanation": "Supraspinatus under coracoacromial arch. Neer test also for impingement (forward flex arm)."
  },
  {
    "q": "Speed test: resisted forward flexion, forearm supinated -> bicipital groove pain. Tests?",
    "options": [
      "Supraspinatus",
      "Biceps tendon/labrum",
      "ACL",
      "Infraspinatus"
    ],
    "answer": 1,
    "explanation": "Biceps tendinopathy or SLAP tear."
  },
  {
    "q": "Shoulder ABducted 90 degrees, externally rotated -> patient apprehensive. Tests?",
    "options": [
      "Rotator cuff",
      "Anterior instability",
      "Impingement",
      "Labrum"
    ],
    "answer": 1,
    "explanation": "Apprehension test: anterior shoulder instability. Relocation test reduces apprehension."
  },
  {
    "q": "Varus stress at 30 degrees -> lateral joint laxity. Ligament?",
    "options": [
      "MCL",
      "LCL",
      "ACL",
      "PCL"
    ],
    "answer": 1,
    "explanation": "Varus stress (medial-to-lateral) tests LCL. 30 degrees isolates LCL."
  },
  {
    "q": "Pivot shift test: valgus + internal rotation during extension -> subluxation then reduction. Tests?",
    "options": [
      "PCL",
      "MCL",
      "ACL",
      "Meniscus"
    ],
    "answer": 2,
    "explanation": "Pivot shift: most specific for ACL. Less sensitive than Lachman."
  },
  {
    "q": "Ankle anterior drawer: translate talus anteriorly. Positive = tear of?",
    "options": [
      "Deltoid",
      "CFL",
      "ATFL",
      "Achilles"
    ],
    "answer": 2,
    "explanation": "ATFL: tested by ankle anterior drawer."
  },
  {
    "q": "Obturator nerve (L2-L4) innervates:",
    "options": [
      "Quadriceps",
      "Hip adductors",
      "Hamstrings",
      "Hip flexors"
    ],
    "answer": 1,
    "explanation": "Obturator -> adductors. Through obturator foramen."
  },
  {
    "q": "Burning/tingling sole of foot. Compression behind medial malleolus. Diagnosis?",
    "options": [
      "Common peroneal entrapment",
      "Morton neuroma",
      "Tarsal tunnel syndrome (tibial)",
      "Plantar fasciitis"
    ],
    "answer": 2,
    "explanation": "Tarsal tunnel: tibial nerve behind medial malleolus. Ankle equivalent of carpal tunnel."
  },
  {
    "q": "SITS muscles in order?",
    "options": [
      "Supraspinatus, Infraspinatus, Teres minor, Subscapularis",
      "Subscapularis, Infraspinatus, Teres minor, Supraspinatus",
      "Supraspinatus, Infraspinatus, Teres major, Subscapularis",
      "Subscapularis, Infraspinatus, Teres major, Supraspinatus"
    ],
    "answer": 0,
    "explanation": "SITS: Supraspinatus (abduction 0-15), Infraspinatus (ER), Teres minor (ER), Subscapularis (IR, anterior)."
  },
  {
    "q": "O'Brien test (active compression): arm 90 flex/10 adduct, thumb down -> pain; thumb up -> less pain. Tests?",
    "options": [
      "Rotator cuff",
      "SLAP lesion",
      "Impingement",
      "ACL"
    ],
    "answer": 1,
    "explanation": "O'Brien: SLAP tear diagnosis."
  },
  {
    "q": "Arm draped over chair while sleeping -> wrist drop on awakening. Diagnosis?",
    "options": [
      "Median nerve palsy",
      "Ulnar palsy",
      "Saturday night palsy (radial)",
      "PIN syndrome"
    ],
    "answer": 2,
    "explanation": "Radial nerve compression in spiral groove. Wrist drop + finger drop."
  },
  {
    "q": "Most common compartment syndrome location?",
    "options": [
      "Posterior thigh",
      "Anterior leg",
      "Forearm",
      "Foot"
    ],
    "answer": 1,
    "explanation": "Anterior compartment of leg. Also common: forearm (after supracondylar fracture)."
  },
  {
    "q": "Surgical neck of humerus fracture. Nerve at risk?",
    "options": [
      "Radial",
      "Ulnar",
      "Median",
      "Axillary"
    ],
    "answer": 3,
    "explanation": "Axillary nerve: wraps around surgical neck. Loss of deltoid (abduction >15) + regimental badge numbness."
  }
];
  return allQs.sort(() => Math.random() - 0.5);
}

// ─── SVG Anatomy Components ────────────────────────────────────────────────
const ShoulderSVG = ({ layers }) => (
  <svg viewBox="0 0 400 350" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
    <defs>
      <radialGradient id="jointGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={C.teal} stopOpacity="0.3"/><stop offset="100%" stopColor={C.teal} stopOpacity="0"/></radialGradient>
      <linearGradient id="boneGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F5F0E8"/><stop offset="100%" stopColor="#E8DDD0"/></linearGradient>
      <linearGradient id="muscleGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#E88B8B"/><stop offset="100%" stopColor="#C76B6B"/></linearGradient>
    </defs>
    <ellipse cx="200" cy="130" rx="120" ry="100" fill="url(#jointGlow)"/>
    {layers.bones && <g className="anim-fade-in">
      <path d="M120,60 Q140,50 200,45 Q260,50 280,60 L275,75 Q255,68 200,63 Q145,68 125,75 Z" fill="url(#boneGrad)" stroke="#B8A898" strokeWidth="1.5"/>
      <text x="200" y="55" textAnchor="middle" fontSize="9" fill={C.textLight} fontWeight="600">Clavicle</text>
      <path d="M80,80 Q85,65 120,60 L125,75 Q150,90 160,120 L170,130 Q175,145 170,165 L155,185 Q140,175 130,155 Q100,135 85,115 Q75,95 80,80 Z" fill="url(#boneGrad)" stroke="#B8A898" strokeWidth="1.5"/>
      <text x="115" y="130" textAnchor="middle" fontSize="8" fill={C.textLight} fontWeight="600">Scapula</text>
      <path d="M155,110 Q165,100 180,105 Q185,110 185,125 L183,128" fill="url(#boneGrad)" stroke="#B8A898" strokeWidth="1"/>
      <text x="170" y="102" textAnchor="middle" fontSize="7" fill={C.textLight}>Acromion</text>
      <path d="M170,130 A30,30 0 0,1 230,130 A30,30 0 0,1 170,130 Z" fill="url(#boneGrad)" stroke="#B8A898" strokeWidth="1.5"/>
      <circle cx="200" cy="135" r="22" fill="#F0EBE3" stroke="#C8B8A8" strokeWidth="1.5"/>
      <text x="200" y="138" textAnchor="middle" fontSize="8" fill={C.textLight} fontWeight="600">Humeral Head</text>
      <path d="M185,158 Q190,165 195,200 Q198,240 200,290 Q202,240 205,200 Q210,165 215,158" fill="url(#boneGrad)" stroke="#B8A898" strokeWidth="1.5"/>
      <text x="235" y="230" fontSize="8" fill={C.textLight}>Humerus</text>
      <circle cx="223" cy="150" r="6" fill="#EDE5DA" stroke="#B8A898" strokeWidth="1"/>
      <text x="245" y="153" fontSize="7" fill={C.textLight}>Greater tuberosity</text>
      <circle cx="187" cy="155" r="5" fill="#EDE5DA" stroke="#B8A898" strokeWidth="1"/>
      <text x="145" y="162" fontSize="7" fill={C.textLight}>Lesser tuberosity</text>
    </g>}
    {layers.muscles && <g className="anim-fade-in" opacity="0.82">
      <path d="M105,85 Q115,75 160,110 Q170,130 170,135 Q140,130 115,120 Q100,110 105,85 Z" fill="#E88B8B" stroke="#C76B6B" strokeWidth="1.2" opacity="0.7"/>
      <text x="128" y="108" textAnchor="middle" fontSize="7.5" fill="#8B3030" fontWeight="700">Supraspinatus</text>
      <path d="M95,125 Q100,115 130,120 Q145,130 155,145 Q160,160 155,175 Q130,160 105,150 Q90,140 95,125 Z" fill="#D47878" stroke="#B86060" strokeWidth="1.2" opacity="0.7"/>
      <text x="122" y="148" textAnchor="middle" fontSize="7.5" fill="#8B3030" fontWeight="700">Infraspinatus</text>
      <path d="M100,160 Q115,155 135,170 Q140,180 135,195 Q120,190 105,180 Q95,172 100,160 Z" fill="#CC7070" stroke="#A85858" strokeWidth="1" opacity="0.65"/>
      <text x="118" y="178" textAnchor="middle" fontSize="6.5" fill="#8B3030" fontWeight="600">Teres Minor</text>
      <path d="M155,115 Q165,110 175,115 Q180,125 178,140 Q175,150 170,155 Q162,145 158,130 Q155,120 155,115 Z" fill="#E09090" stroke="#C07070" strokeWidth="1" opacity="0.65"/>
      <text x="140" y="138" fontSize="6.5" fill="#8B3030" fontWeight="600">Subscap.</text>
      <path d="M180,105 Q195,85 220,80 Q250,78 270,85 Q260,100 240,130 Q230,155 225,175 Q220,200 215,230 Q205,230 200,200 Q195,175 190,155 Q185,140 180,125 Q178,115 180,105 Z" fill="url(#muscleGrad)" stroke="#B86060" strokeWidth="1.5" opacity="0.6"/>
      <text x="238" y="115" fontSize="9" fill="#8B3030" fontWeight="700">Deltoid</text>
    </g>}
    {layers.nerves && <g className="anim-fade-in">
      <path d="M168,70 Q175,90 180,110 Q182,125 200,145 Q210,155 220,170" fill="none" stroke="#F6C547" strokeWidth="2.5" strokeDasharray="6,3" opacity="0.9"/>
      <circle cx="200" cy="145" r="4" fill="#F6C547" stroke="#D4A020" strokeWidth="1"/>
      <text x="225" y="175" fontSize="8" fill="#9A7A10" fontWeight="700">Axillary n.</text>
      <path d="M130,70 Q120,90 110,110 Q105,130 110,155" fill="none" stroke="#F6C547" strokeWidth="2" strokeDasharray="5,3" opacity="0.8"/>
      <text x="80" y="140" fontSize="7" fill="#9A7A10" fontWeight="600">Suprascapular n.</text>
    </g>}
    {layers.vessels && <g className="anim-fade-in">
      <path d="M170,75 Q185,95 195,125 Q200,145 200,170 Q200,200 200,260" fill="none" stroke="#E05555" strokeWidth="2" opacity="0.8"/>
      <text x="210" y="200" fontSize="7" fill="#B03030" fontWeight="600">Circumflex humeral aa.</text>
      <circle cx="200" cy="140" r="3" fill="#E05555" opacity="0.7"/>
    </g>}
    {layers.ligaments && <g className="anim-fade-in">
      <path d="M165,115 Q175,108 185,112" fill="none" stroke="#5B9BD5" strokeWidth="2.5" opacity="0.85"/>
      <text x="158" y="108" fontSize="7" fill="#3A6FA0" fontWeight="600">Coracohumeral</text>
      <path d="M170,130 Q185,120 195,128" fill="none" stroke="#5B9BD5" strokeWidth="2" opacity="0.7"/>
      <path d="M170,138 Q185,130 195,135" fill="none" stroke="#5B9BD5" strokeWidth="2" opacity="0.7"/>
      <path d="M170,146 Q185,140 198,145" fill="none" stroke="#5B9BD5" strokeWidth="2" opacity="0.7"/>
      <text x="145" y="148" fontSize="6.5" fill="#3A6FA0" fontWeight="600">GH Ligs</text>
    </g>}
  </svg>
);

const KneeSVG = ({ layers }) => (
  <svg viewBox="0 0 350 400" style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}>
    <defs>
      <radialGradient id="kneeGlow" cx="50%" cy="45%" r="50%"><stop offset="0%" stopColor={C.mint} stopOpacity="0.25"/><stop offset="100%" stopColor={C.mint} stopOpacity="0"/></radialGradient>
      <linearGradient id="kneeBone" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F2ECE4"/><stop offset="100%" stopColor="#E0D5C8"/></linearGradient>
    </defs>
    <ellipse cx="175" cy="175" rx="100" ry="120" fill="url(#kneeGlow)"/>
    {layers.bones && <g className="anim-fade-in">
      <path d="M150,20 Q155,15 175,15 Q195,15 200,20 L210,120 Q215,140 215,160 Q215,175 210,180 Q195,190 175,192 Q155,190 140,180 Q135,175 135,160 Q135,140 140,120 Z" fill="url(#kneeBone)" stroke="#B8A898" strokeWidth="1.5"/>
      <text x="175" y="50" textAnchor="middle" fontSize="9" fill={C.textLight} fontWeight="600">Femur</text>
      <ellipse cx="160" cy="178" rx="25" ry="15" fill="#EDE5DA" stroke="#B8A898" strokeWidth="1"/>
      <text x="160" y="182" textAnchor="middle" fontSize="7" fill={C.textLight}>Med. condyle</text>
      <ellipse cx="195" cy="178" rx="25" ry="15" fill="#EDE5DA" stroke="#B8A898" strokeWidth="1"/>
      <text x="195" y="182" textAnchor="middle" fontSize="7" fill={C.textLight}>Lat. condyle</text>
      <ellipse cx="175" cy="150" rx="18" ry="25" fill="#F5F0E8" stroke="#C8B8A8" strokeWidth="1.5"/>
      <text x="175" y="153" textAnchor="middle" fontSize="8" fill={C.textLight} fontWeight="600">Patella</text>
      <path d="M135,210 Q130,205 130,200 Q155,195 175,197 Q195,195 220,200 Q220,205 215,210 L215,350 Q195,355 175,355 Q155,355 135,350 Z" fill="url(#kneeBone)" stroke="#B8A898" strokeWidth="1.5"/>
      <text x="175" y="300" textAnchor="middle" fontSize="9" fill={C.textLight} fontWeight="600">Tibia</text>
      <path d="M230,200 Q240,195 245,200 L248,330 Q245,340 240,340 L235,340 Q230,340 228,335 L230,200 Z" fill="url(#kneeBone)" stroke="#B8A898" strokeWidth="1"/>
      <text x="255" y="270" fontSize="8" fill={C.textLight}>Fibula</text>
    </g>}
    {layers.ligaments && <g className="anim-fade-in">
      <line x1="175" y1="185" x2="165" y2="205" stroke="#E05555" strokeWidth="3" opacity="0.85"/>
      <text x="140" y="200" fontSize="7.5" fill="#B03030" fontWeight="700">ACL</text>
      <line x1="175" y1="185" x2="185" y2="208" stroke="#5B9BD5" strokeWidth="3" opacity="0.85"/>
      <text x="195" y="200" fontSize="7.5" fill="#3A6FA0" fontWeight="700">PCL</text>
      <line x1="130" y1="175" x2="130" y2="210" stroke="#48BB78" strokeWidth="3" opacity="0.8"/>
      <text x="100" y="195" fontSize="7.5" fill="#2D7A4F" fontWeight="700">MCL</text>
      <line x1="220" y1="175" x2="230" y2="210" stroke="#F6AD55" strokeWidth="3" opacity="0.8"/>
      <text x="240" y="195" fontSize="7.5" fill="#9A6A10" fontWeight="700">LCL</text>
      <ellipse cx="155" cy="197" rx="20" ry="5" fill="none" stroke="#9B59B6" strokeWidth="2" transform="rotate(-5,155,197)"/>
      <text x="115" y="215" fontSize="7" fill="#7B3F96" fontWeight="600">Med. meniscus</text>
      <ellipse cx="195" cy="197" rx="18" ry="5" fill="none" stroke="#9B59B6" strokeWidth="2" transform="rotate(5,195,197)"/>
      <text x="215" y="215" fontSize="7" fill="#7B3F96" fontWeight="600">Lat. meniscus</text>
    </g>}
    {layers.muscles && <g className="anim-fade-in" opacity="0.7">
      <path d="M140,30 Q135,15 145,10 Q160,8 170,15 L165,120 Q155,130 145,120 Z" fill="#E88B8B" stroke="#C76B6B" strokeWidth="1"/>
      <text x="148" y="70" fontSize="7" fill="#8B3030" fontWeight="600" transform="rotate(-5,148,70)">Vastus med.</text>
      <path d="M210,30 Q215,15 205,10 Q190,8 185,15 L188,120 Q198,130 208,120 Z" fill="#D47878" stroke="#B86060" strokeWidth="1"/>
      <text x="195" y="70" fontSize="7" fill="#8B3030" fontWeight="600" transform="rotate(5,195,70)">Vastus lat.</text>
    </g>}
    {layers.nerves && <g className="anim-fade-in">
      <path d="M220,180 Q225,190 235,200 Q240,210 238,225" fill="none" stroke="#F6C547" strokeWidth="2.5" strokeDasharray="5,3"/>
      <circle cx="238" cy="210" r="3" fill="#F6C547"/>
      <text x="248" y="225" fontSize="7.5" fill="#9A7A10" fontWeight="700">Common peroneal n.</text>
      <path d="M175,185 Q178,210 180,250 Q182,290 180,340" fill="none" stroke="#F6C547" strokeWidth="2" strokeDasharray="5,3" opacity="0.8"/>
      <text x="190" y="260" fontSize="7" fill="#9A7A10" fontWeight="600">Tibial n.</text>
    </g>}
    {layers.vessels && <g className="anim-fade-in">
      <path d="M175,170 Q178,185 180,200 Q182,220 180,240" fill="none" stroke="#E05555" strokeWidth="2" opacity="0.75"/>
      <text x="190" y="230" fontSize="7" fill="#B03030" fontWeight="600">Popliteal a.</text>
    </g>}
  </svg>
);

// ─── Styled Components / Micro-components ──────────────────────────────────
const Pill = ({ active, color, onClick, children }) => (
  <button onClick={onClick} style={{ padding: "6px 16px", borderRadius: 20, border: `2px solid ${active ? color : "#DDE2E8"}`, background: active ? color : C.white, color: active ? C.white : C.text, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s", fontFamily: FONTS, boxShadow: active ? `0 2px 8px ${color}44` : "none" }}>
    {children}
  </button>
);

const Card = ({ children, style, onClick, hover }) => (
  <div onClick={onClick} style={{ background: C.white, borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", transition: "all 0.25s", cursor: onClick ? "pointer" : "default", ...style }} onMouseEnter={e => { if(hover) { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.1)"; }}} onMouseLeave={e => { if(hover) { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.06)"; }}}>
    {children}
  </div>
);

const ProgressBar = ({ value, max, color = C.accent, height = 8 }) => (
  <div style={{ background: "#E8ECF0", borderRadius: height / 2, height, overflow: "hidden", width: "100%" }}>
    <div style={{ width: `${Math.min(100, (value / max) * 100)}%`, height: "100%", background: `linear-gradient(90deg, ${color}, ${color}CC)`, borderRadius: height / 2, transition: "width 0.5s ease" }}/>
  </div>
);

const Badge = ({ icon, label, color }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${color}22`, border: `1.5px solid ${color}55`, borderRadius: 12, padding: "4px 12px", fontSize: 12, fontWeight: 700, color }}>
    <span>{icon}</span> {label}
  </div>
);

const TabBar = ({ tabs, active, onChange }) => (
  <div style={{ display: "flex", gap: 4, background: "#F0F2F5", borderRadius: 14, padding: 4, overflowX: "auto" }}>
    {tabs.map(t => (
      <button key={t.key} onClick={() => onChange(t.key)} style={{ padding: "8px 18px", borderRadius: 10, border: "none", background: active === t.key ? C.white : "transparent", color: active === t.key ? C.text : C.textLight, fontWeight: active === t.key ? 700 : 500, fontSize: 13, cursor: "pointer", fontFamily: FONTS, boxShadow: active === t.key ? "0 1px 4px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s", whiteSpace: "nowrap" }}>
        {t.icon && <span style={{ marginRight: 6 }}>{t.icon}</span>}{t.label}
      </button>
    ))}
  </div>
);

// ─── Main Application ──────────────────────────────────────────────────────
export default function MSKPlatform() {
  const [view, setView] = useState("home");
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedSubRegion, setSelectedSubRegion] = useState(null);
  const [layers, setLayers] = useState({ bones: true, muscles: false, nerves: false, vessels: false, ligaments: false });
  const [quizState, setQuizState] = useState({ active: false, questions: [], current: 0, score: 0, answered: null, showExplanation: false });
  const [nerveIdx, setNerveIdx] = useState(0);
  const [examMode, setExamMode] = useState(null);
  const [lesionSim, setLesionSim] = useState({ nerve: null, showResult: false });
  const [compartmentIdx, setCompartmentIdx] = useState(0);
  const [drillMode, setDrillMode] = useState(false);
  const [drillTimer, setDrillTimer] = useState(30);
  const [drillScore, setDrillScore] = useState(0);
  const [drillQ, setDrillQ] = useState(null);
  const [weaknesses, setWeaknesses] = useState({});
  const [anatomyTab, setAnatomyTab] = useState("anatomy");
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const timerRef = useRef(null);

  const addXp = useCallback((amount) => {
    setXp(prev => {
      const next = prev + amount;
      const newLevel = Math.floor(next / 100) + 1;
      if (newLevel > level) setLevel(newLevel);
      return next;
    });
  }, [level]);

  const trackWeakness = useCallback((topic, correct) => {
    setWeaknesses(prev => {
      const existing = prev[topic] || { correct: 0, total: 0 };
      return { ...prev, [topic]: { correct: existing.correct + (correct ? 1 : 0), total: existing.total + 1 }};
    });
  }, []);

  const startQuiz = useCallback(() => {
    const questions = generateQuestions();
    setQuizState({ active: true, questions, current: 0, score: 0, answered: null, showExplanation: false });
    setView("quiz");
  }, []);

  const answerQuiz = useCallback((idx) => {
    const q = quizState.questions[quizState.current];
    const correct = idx === q.answer;
    if (correct) { addXp(15); setStreak(s => s + 1); }
    else { setStreak(0); }
    trackWeakness(q.q.slice(0, 30), correct);
    setQuizState(prev => ({ ...prev, answered: idx, score: prev.score + (correct ? 1 : 0), showExplanation: true }));
  }, [quizState, addXp, trackWeakness]);

  const nextQuestion = useCallback(() => {
    if (quizState.current + 1 >= quizState.questions.length) {
      setQuizState(prev => ({ ...prev, active: false }));
      addXp(50);
    } else {
      setQuizState(prev => ({ ...prev, current: prev.current + 1, answered: null, showExplanation: false }));
    }
  }, [quizState, addXp]);

  // Rapid fire drill
  const startDrill = useCallback(() => {
    setDrillMode(true); setDrillTimer(30); setDrillScore(0);
    const q = NERVE_DATA[Math.floor(Math.random() * NERVE_DATA.length)];
    setDrillQ(q);
    setView("drill");
  }, []);

  useEffect(() => {
    if (drillMode && drillTimer > 0) {
      timerRef.current = setTimeout(() => setDrillTimer(t => t - 1), 1000);
      return () => clearTimeout(timerRef.current);
    } else if (drillMode && drillTimer === 0) {
      setDrillMode(false);
      addXp(drillScore * 10);
    }
  }, [drillMode, drillTimer, drillScore, addXp]);

  const drillAnswer = useCallback((correct) => {
    if (correct) { setDrillScore(s => s + 1); addXp(5); }
    const q = NERVE_DATA[Math.floor(Math.random() * NERVE_DATA.length)];
    setDrillQ(q);
  }, [addXp]);

  const currentRegionData = selectedRegion && selectedSubRegion
    ? ANATOMY_DATA[selectedRegion]?.regions?.[selectedSubRegion]
    : null;

  const renderHome = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${C.teal}40, ${C.purple}30, ${C.mint}40)`, borderRadius: 24, padding: "36px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: `${C.lime}33` }}/>
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, borderRadius: "50%", background: `${C.rose}33` }}/>
        <h1 style={{ fontSize: 32, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: 0, position: "relative" }}>🦴 OrthoMaster</h1>
        <span style={{ fontSize: 10, color: '#999' }}>KB v{KB_VERSION}</span>
        <p style={{ color: C.textLight, fontSize: 15, margin: "8px 0 0", position: "relative", fontFamily: FONTS }}>Musculoskeletal Anatomy & Physical Exam Mastery</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20, flexWrap: "wrap", position: "relative" }}>
          <Badge icon="⚡" label={`${xp} XP`} color={C.gold}/>
          <Badge icon="🏆" label={`Level ${level}`} color={C.accentDark}/>
          <Badge icon="🔥" label={`${streak} Streak`} color="#E05555"/>
        </div>
        <div style={{ marginTop: 16, maxWidth: 300, margin: "16px auto 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textLight, marginBottom: 4 }}>
            <span>Level {level}</span><span>{xp % 100}/100 XP</span>
          </div>
          <ProgressBar value={xp % 100} max={100} color={C.gold}/>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
        {[
          { icon: "📖", label: "Study Anatomy", action: () => setView("anatomy"), color: C.teal },
          { icon: "🧠", label: "Quiz Mode", action: startQuiz, color: C.purple },
          { icon: "⚡", label: "Nerve Drill", action: startDrill, color: C.sand },
          { icon: "🔍", label: "Physical Exam", action: () => setView("exam"), color: C.mint },
          { icon: "💥", label: "Lesion Sim", action: () => setView("lesion"), color: C.rose },
          { icon: "📦", label: "Compartments", action: () => setView("compartments"), color: C.blue },
        ].map(item => (
          <Card key={item.label} hover onClick={item.action} style={{ textAlign: "center", padding: 16, border: `2px solid ${item.color}44` }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>{item.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{item.label}</div>
          </Card>
        ))}
      </div>

      {/* Region Overview */}
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: "0 0 12px" }}>Study by Region</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Object.entries(ANATOMY_DATA).map(([key, data]) => (
            <Card key={key} hover onClick={() => { setSelectedRegion(key); setSelectedSubRegion(Object.keys(data.regions)[0]); setView("anatomy"); }} style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, border: `2px solid ${data.color}44` }}>
              <div style={{ fontSize: 32, width: 48, textAlign: "center" }}>{data.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{data.label}</div>
                <div style={{ fontSize: 12, color: C.textLight, marginTop: 2 }}>{Object.keys(data.regions).length} regions · {Object.values(data.regions).reduce((s, r) => s + (r.injuries?.length || 0), 0)} injuries</div>
              </div>
              <div style={{ color: data.color, fontSize: 20 }}>→</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Weakness Heat Map */}
      {Object.keys(weaknesses).length > 0 && (
        <Card style={{ border: `2px solid ${C.rose}44` }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: "0 0 12px" }}>🎯 Weakness Map</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Object.entries(weaknesses).sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total)).slice(0, 5).map(([topic, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              const color = pct < 50 ? C.danger : pct < 75 ? C.warning : C.success;
              return (
                <div key={topic}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textLight, marginBottom: 3 }}>
                    <span style={{ maxWidth: "70%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{topic}...</span>
                    <span style={{ fontWeight: 700, color }}>{pct}%</span>
                  </div>
                  <ProgressBar value={data.correct} max={data.total} color={color}/>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Dermatome & Reflex Quick Ref */}
      <Card>
        <h3 style={{ fontSize: 16, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: "0 0 12px" }}>🗺️ Quick Reference: Dermatomes & Reflexes</h3>
        <img src="img/dermatome-map.png" alt="Dermatome map of the human body" 
          style={{ width: "100%", maxWidth: 340, borderRadius: 12, background: "#fff", padding: 8, margin: "8px auto 16px", display: "block", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: C.accent, marginBottom: 6 }}>Key Dermatomes</div>
            {Object.entries(DERMATOME_MAP).map(([k, v]) => (
              <div key={k} style={{ fontSize: 12, padding: "3px 0", borderBottom: "1px solid #F0F2F5", display: "flex", gap: 8 }}>
                <span style={{ fontWeight: 700, color: C.accentDark, minWidth: 45 }}>{k}</span>
                <span style={{ color: C.textLight }}>{v}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: C.accent, marginBottom: 6 }}>Key Reflexes</div>
            {Object.entries(REFLEX_MAP).map(([k, v]) => (
              <div key={k} style={{ fontSize: 12, padding: "3px 0", borderBottom: "1px solid #F0F2F5", display: "flex", gap: 8 }}>
                <span style={{ fontWeight: 700, color: C.accentDark, minWidth: 80 }}>{k}</span>
                <span style={{ color: C.textLight }}>{v}</span>
              </div>
            ))}
            <div style={{ fontWeight: 700, fontSize: 13, color: C.accent, marginBottom: 6, marginTop: 12 }}>Key Myotomes</div>
            {Object.entries(MYOTOME_MAP).map(([k, v]) => (
              <div key={k} style={{ fontSize: 12, padding: "3px 0", borderBottom: "1px solid #F0F2F5", display: "flex", gap: 8 }}>
                <span style={{ fontWeight: 700, color: C.accentDark, minWidth: 30 }}>{k}</span>
                <span style={{ color: C.textLight }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );

  const renderAnatomy = () => {
    if (!selectedRegion) {
      return (
        <div>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, color: C.text }}>Select a Region</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
            {Object.entries(ANATOMY_DATA).map(([key, data]) => (
              <Card key={key} hover onClick={() => { setSelectedRegion(key); setSelectedSubRegion(Object.keys(data.regions)[0]); }} style={{ display: "flex", alignItems: "center", gap: 16, border: `2px solid ${data.color}44` }}>
                <span style={{ fontSize: 32 }}>{data.icon}</span>
                <span style={{ fontWeight: 700, fontSize: 16 }}>{data.label}</span>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    const regionData = ANATOMY_DATA[selectedRegion];
    const subData = regionData.regions[selectedSubRegion];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Sub-region selector */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {Object.entries(regionData.regions).map(([key, val]) => (
            <Pill key={key} active={selectedSubRegion === key} color={regionData.color} onClick={() => { setSelectedSubRegion(key); setAnatomyTab("anatomy"); }}>
              {val.label}
            </Pill>
          ))}
        </div>

        <TabBar tabs={[
          { key: "anatomy", icon: "🦴", label: "Anatomy" },
          { key: "injuries", icon: "💥", label: "Injuries" },
          { key: "exam", icon: "🩺", label: "Special Tests" },
          { key: "cards", icon: "🃏", label: "Flashcards" },
        ]} active={anatomyTab} onChange={setAnatomyTab}/>

        {anatomyTab === "anatomy" && subData && (
          <div>
            {/* Layer Toggles */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
              {[
                { key: "bones", label: "🦴 Bones", color: "#B8A898" },
                { key: "muscles", label: "💪 Muscles", color: "#C76B6B" },
                { key: "nerves", label: "⚡ Nerves", color: "#D4A020" },
                { key: "vessels", label: "🔴 Vessels", color: "#E05555" },
                { key: "ligaments", label: "🔗 Ligaments", color: "#5B9BD5" },
              ].map(l => (
                <Pill key={l.key} active={layers[l.key]} color={l.color} onClick={() => setLayers(prev => ({ ...prev, [l.key]: !prev[l.key] }))}>
                  {l.label}
                </Pill>
              ))}
            </div>

            {/* SVG Illustration */}
            <Card style={{ marginBottom: 16, padding: 24, background: `linear-gradient(180deg, ${C.bg}, ${C.white})` }}>
              {(selectedSubRegion === "shoulder") && <ShoulderSVG layers={layers}/>}
              {(selectedSubRegion === "knee") && <KneeSVG layers={layers}/>}
              {!["shoulder", "knee"].includes(selectedSubRegion) && (
                <div style={{ textAlign: "center", padding: 40, color: C.textLight }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{regionData.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, fontFamily: FONT_DISPLAY, color: C.text }}>{subData.label}</div>
                  <div style={{ fontSize: 13, marginTop: 8 }}>Toggle layers above to explore anatomy details below</div>
                </div>
              )}
            </Card>

            {/* Anatomy Details */}
            {layers.bones && subData.anatomy.bones && (
              <Card style={{ marginBottom: 12, borderLeft: `4px solid #B8A898` }}>
                <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 800, color: "#8A7A6A" }}>🦴 Bones & Landmarks</h4>
                {subData.anatomy.bones.map((b, i) => <div key={i} style={{ fontSize: 13, color: C.text, padding: "3px 0" }}>• {b}</div>)}
              </Card>
            )}
            {layers.muscles && subData.anatomy.muscles && (
              <Card style={{ marginBottom: 12, borderLeft: `4px solid #C76B6B` }}>
                <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 800, color: "#8B3030" }}>💪 Muscles</h4>
                {subData.anatomy.muscles.map((m, i) => (
                  <div key={i} style={{ fontSize: 12, padding: "6px 0", borderBottom: i < subData.anatomy.muscles.length - 1 ? "1px solid #F5F0F0" : "none" }}>
                    <div style={{ fontWeight: 700, color: C.text, fontSize: 13 }}>{m.name}</div>
                    <div style={{ color: C.textLight, marginTop: 2 }}>
                      <span style={{ fontWeight: 600 }}>O:</span> {m.origin} · <span style={{ fontWeight: 600 }}>I:</span> {m.insertion}
                    </div>
                    <div style={{ color: C.textLight }}><span style={{ fontWeight: 600 }}>Action:</span> {m.action} · <span style={{ fontWeight: 600 }}>Nerve:</span> {m.nerve}</div>
                  </div>
                ))}
              </Card>
            )}
            {layers.nerves && subData.anatomy.nerves && (
              <Card style={{ marginBottom: 12, borderLeft: `4px solid #D4A020` }}>
                <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 800, color: "#9A7A10" }}>⚡ Nerves</h4>
                {subData.anatomy.nerves.map((n, i) => <div key={i} style={{ fontSize: 13, color: C.text, padding: "3px 0" }}>• {n}</div>)}
              </Card>
            )}
            {layers.vessels && subData.anatomy.vessels && (
              <Card style={{ marginBottom: 12, borderLeft: `4px solid #E05555` }}>
                <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 800, color: "#B03030" }}>🔴 Blood Supply</h4>
                {subData.anatomy.vessels.map((v, i) => <div key={i} style={{ fontSize: 13, color: C.text, padding: "3px 0" }}>• {v}</div>)}
              </Card>
            )}
            {layers.ligaments && subData.anatomy.ligaments && (
              <Card style={{ marginBottom: 12, borderLeft: `4px solid #5B9BD5` }}>
                <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 800, color: "#3A6FA0" }}>🔗 Ligaments</h4>
                {subData.anatomy.ligaments.map((l, i) => <div key={i} style={{ fontSize: 13, color: C.text, padding: "3px 0" }}>• {l}</div>)}
              </Card>
            )}
          </div>
        )}

        {anatomyTab === "injuries" && subData?.injuries && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {subData.injuries.map((inj, i) => (
              <Card key={i} style={{ borderLeft: `4px solid ${C.rose}` }}>
                <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 800, color: C.text }}>{inj.name}</h4>
                <div style={{ fontSize: 12, color: C.textLight, lineHeight: 1.6 }}>
                  <div><span style={{ fontWeight: 700, color: C.accentDark }}>Mechanism:</span> {inj.mechanism}</div>
                  <div><span style={{ fontWeight: 700, color: "#D4A020" }}>Nerve at risk:</span> {inj.nerve}</div>
                  <div><span style={{ fontWeight: 700, color: "#8B3030" }}>Findings:</span> {inj.findings}</div>
                  <div><span style={{ fontWeight: 700, color: "#3A6FA0" }}>Exam:</span> {inj.exam}</div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {anatomyTab === "exam" && subData?.specialTests && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {subData.specialTests.map((test, i) => (
              <Card key={i} style={{ borderLeft: `4px solid ${C.mint}` }}>
                <h4 style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 800, color: C.text }}>{test.name}</h4>
                <Badge icon="🎯" label={test.purpose} color={C.accentDark}/>
                <div style={{ fontSize: 12, color: C.textLight, lineHeight: 1.6, marginTop: 8 }}>
                  <div><span style={{ fontWeight: 700, color: C.text }}>Technique:</span> {test.technique}</div>
                  <div><span style={{ fontWeight: 700, color: C.success }}>Positive:</span> {test.positive}</div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {anatomyTab === "cards" && subData && (
          <div>
            {(() => {
              const cards = [
                ...(subData.anatomy.muscles || []).map(m => ({ front: `What is the action of ${m.name}?`, back: `${m.action}\nNerve: ${m.nerve}\nOrigin: ${m.origin}\nInsertion: ${m.insertion}` })),
                ...(subData.injuries || []).map(inj => ({ front: `${inj.name}: What is the mechanism and nerve at risk?`, back: `Mechanism: ${inj.mechanism}\nNerve: ${inj.nerve}\nFindings: ${inj.findings}` })),
                ...(subData.specialTests || []).map(t => ({ front: `How do you perform the ${t.name}?`, back: `Purpose: ${t.purpose}\nTechnique: ${t.technique}\nPositive: ${t.positive}` })),
              ];
              const card = cards[flashcardIdx % cards.length];
              return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
                  <div style={{ fontSize: 13, color: C.textLight }}>Card {(flashcardIdx % cards.length) + 1} of {cards.length}</div>
                  <div onClick={() => { setFlashcardFlipped(!flashcardFlipped); if(!flashcardFlipped) addXp(2); }} style={{ width: "100%", maxWidth: 420, minHeight: 200, background: flashcardFlipped ? `linear-gradient(135deg, ${C.mint}40, ${C.teal}30)` : `linear-gradient(135deg, ${C.purple}30, ${C.blue}20)`, borderRadius: 20, padding: 28, cursor: "pointer", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", transition: "all 0.3s" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.textLight, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{flashcardFlipped ? "Answer" : "Question"}</div>
                    <div style={{ fontSize: 16, fontWeight: flashcardFlipped ? 600 : 700, color: C.text, lineHeight: 1.5, whiteSpace: "pre-line" }}>
                      {flashcardFlipped ? card.back : card.front}
                    </div>
                    <div style={{ fontSize: 11, color: C.textLight, marginTop: 12 }}>Tap to {flashcardFlipped ? "see question" : "reveal answer"}</div>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={(e) => { e.stopPropagation(); setFlashcardIdx(i => i - 1 < 0 ? cards.length - 1 : i - 1); setFlashcardFlipped(false); }} style={{ padding: "8px 20px", borderRadius: 10, border: `2px solid ${C.accent}`, background: C.white, color: C.accent, fontWeight: 700, cursor: "pointer", fontFamily: FONTS }}>← Prev</button>
                    <button onClick={(e) => { e.stopPropagation(); setFlashcardIdx(i => i + 1); setFlashcardFlipped(false); }} style={{ padding: "8px 20px", borderRadius: 10, border: "none", background: C.accent, color: C.white, fontWeight: 700, cursor: "pointer", fontFamily: FONTS }}>Next →</button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    );
  };

  const renderQuiz = () => {
    if (!quizState.active) {
      return (
        <Card style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🏆</div>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, color: C.text, margin: "0 0 8px" }}>Quiz Complete!</h2>
          <div style={{ fontSize: 28, fontWeight: 800, color: C.accent }}>{quizState.score}/{quizState.questions.length}</div>
          <div style={{ fontSize: 14, color: C.textLight, marginBottom: 16 }}>+{quizState.score * 15 + 50} XP earned</div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={startQuiz} style={{ padding: "10px 24px", borderRadius: 12, border: "none", background: C.accent, color: C.white, fontWeight: 700, cursor: "pointer", fontFamily: FONTS, fontSize: 14 }}>Try Again</button>
            <button onClick={() => setView("home")} style={{ padding: "10px 24px", borderRadius: 12, border: `2px solid ${C.accent}`, background: C.white, color: C.accent, fontWeight: 700, cursor: "pointer", fontFamily: FONTS, fontSize: 14 }}>Home</button>
          </div>
        </Card>
      );
    }
    const q = quizState.questions[quizState.current];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Badge icon="📖" label={`Q${quizState.current + 1}/${quizState.questions.length}`} color={C.accent}/>
          <Badge icon="✅" label={`${quizState.score} correct`} color={C.success}/>
        </div>
        <ProgressBar value={quizState.current + 1} max={quizState.questions.length} color={C.accent}/>
        <Card style={{ padding: 24 }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: C.text, lineHeight: 1.6, margin: 0 }}>{q.q}</p>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.options.map((opt, i) => {
            let bg = C.white, border = "#DDE2E8", textColor = C.text;
            if (quizState.answered !== null) {
              if (i === q.answer) { bg = `${C.success}15`; border = C.success; textColor = "#2D7A4F"; }
              else if (i === quizState.answered && i !== q.answer) { bg = `${C.danger}15`; border = C.danger; textColor = "#9B2C2C"; }
            }
            return (
              <button key={i} onClick={() => quizState.answered === null && answerQuiz(i)} disabled={quizState.answered !== null} style={{ padding: "14px 18px", borderRadius: 12, border: `2px solid ${border}`, background: bg, color: textColor, fontWeight: 600, fontSize: 14, cursor: quizState.answered === null ? "pointer" : "default", fontFamily: FONTS, textAlign: "left", transition: "all 0.2s" }}>
                <span style={{ fontWeight: 800, marginRight: 10, color: C.textLight }}>{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>
        {quizState.showExplanation && (
          <Card style={{ borderLeft: `4px solid ${quizState.answered === q.answer ? C.success : C.danger}`, background: quizState.answered === q.answer ? `${C.success}08` : `${C.danger}08` }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: quizState.answered === q.answer ? "#2D7A4F" : "#9B2C2C", marginBottom: 6 }}>
              {quizState.answered === q.answer ? "✅ Correct!" : "❌ Incorrect"}
            </div>
            <p style={{ fontSize: 13, color: C.text, lineHeight: 1.6, margin: 0 }}>{q.explanation}</p>
            <button onClick={nextQuestion} style={{ marginTop: 12, padding: "10px 28px", borderRadius: 10, border: "none", background: C.accent, color: C.white, fontWeight: 700, cursor: "pointer", fontFamily: FONTS, fontSize: 14 }}>
              {quizState.current + 1 >= quizState.questions.length ? "Finish" : "Next →"}
            </button>
          </Card>
        )}
      </div>
    );
  };

  const renderDrill = () => {
    if (!drillMode) {
      return (
        <Card style={{ textAlign: "center", padding: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>⚡</div>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, color: C.text, margin: "0 0 8px" }}>Drill Complete!</h2>
          <div style={{ fontSize: 28, fontWeight: 800, color: C.gold }}>{drillScore} correct</div>
          <div style={{ fontSize: 14, color: C.textLight, marginBottom: 16 }}>+{drillScore * 10} XP earned</div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button onClick={startDrill} style={{ padding: "10px 24px", borderRadius: 12, border: "none", background: C.gold, color: C.white, fontWeight: 700, cursor: "pointer", fontFamily: FONTS }}>Again</button>
            <button onClick={() => setView("home")} style={{ padding: "10px 24px", borderRadius: 12, border: `2px solid ${C.accent}`, background: C.white, color: C.accent, fontWeight: 700, cursor: "pointer", fontFamily: FONTS }}>Home</button>
          </div>
        </Card>
      );
    }
    const wrongOptions = NERVE_DATA.filter(n => n.name !== drillQ.name).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [...wrongOptions, drillQ].sort(() => Math.random() - 0.5);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Badge icon="⏱️" label={`${drillTimer}s`} color={drillTimer < 10 ? C.danger : C.accent}/>
          <Badge icon="⚡" label={`${drillScore} pts`} color={C.gold}/>
        </div>
        <ProgressBar value={drillTimer} max={30} color={drillTimer < 10 ? C.danger : C.accent} height={6}/>
        <Card style={{ textAlign: "center", padding: 24, background: `linear-gradient(135deg, ${C.sand}40, ${C.lime}30)` }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.textLight, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Which nerve?</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.text, lineHeight: 1.5 }}>
            Motor deficit: <span style={{ color: "#8B3030" }}>{drillQ.motor.split(",")[0]}</span>
          </div>
          <div style={{ fontSize: 13, color: C.textLight, marginTop: 4 }}>
            Classic fracture: {drillQ.fracture}
          </div>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {opts.map((opt, i) => (
            <button key={i} onClick={() => drillAnswer(opt.name === drillQ.name)} style={{ padding: "14px 12px", borderRadius: 12, border: `2px solid ${C.blue}44`, background: C.white, color: C.text, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: FONTS, transition: "all 0.15s" }} onMouseEnter={e => e.currentTarget.style.background = `${C.blue}22`} onMouseLeave={e => e.currentTarget.style.background = C.white}>
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderNerves = () => {
    const nerve = NERVE_DATA[nerveIdx];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {NERVE_DATA.map((n, i) => (
            <Pill key={i} active={nerveIdx === i} color={C.accent} onClick={() => setNerveIdx(i)}>
              {n.icon} {n.name.split(" ")[0]}
            </Pill>
          ))}
        </div>
        <Card style={{ padding: 24, borderLeft: `5px solid #F6C547` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 36 }}>{nerve.icon}</span>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: 0 }}>{nerve.name}</h3>
              <div style={{ fontSize: 13, color: C.textLight }}>{nerve.roots}</div>
            </div>
          </div>
          {[
            { label: "Course", value: nerve.course, color: C.accent, icon: "🗺️" },
            { label: "Classic Fracture", value: nerve.fracture, color: C.danger, icon: "💥" },
            { label: "Motor Deficits", value: nerve.motor, color: "#8B3030", icon: "💪" },
            { label: "Sensory Deficits", value: nerve.sensory, color: "#9A7A10", icon: "🖐️" },
            { label: "Exam Findings", value: nerve.exam, color: "#3A6FA0", icon: "🩺" },
          ].map(item => (
            <div key={item.label} style={{ padding: "10px 0", borderBottom: `1px solid #F0F2F5` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: item.color, marginBottom: 3 }}>{item.icon} {item.label}</div>
              <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{item.value}</div>
            </div>
          ))}
        </Card>
      </div>
    );
  };

  const renderExam = () => {
    const allTests = Object.values(ANATOMY_DATA).flatMap(region =>
      Object.values(region.regions).flatMap(sub => (sub.specialTests || []).map(t => ({ ...t, region: sub.label })))
    );
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card style={{ background: `linear-gradient(135deg, ${C.mint}30, ${C.teal}20)`, padding: 20, textAlign: "center" }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, color: C.text, margin: "0 0 8px" }}>🩺 Physical Exam Simulator</h2>
          <p style={{ fontSize: 13, color: C.textLight, margin: 0 }}>Master special tests for musculoskeletal examination</p>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {allTests.map((test, i) => (
            <Card key={i} hover onClick={() => setExamMode(examMode === i ? null : i)} style={{ cursor: "pointer", borderLeft: `4px solid ${C.mint}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{test.name}</div>
                  <div style={{ fontSize: 11, color: C.textLight }}>{test.region} · {test.purpose}</div>
                </div>
                <span style={{ color: C.accent, fontWeight: 800 }}>{examMode === i ? "▲" : "▼"}</span>
              </div>
              {examMode === i && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid #EEF0F3`, fontSize: 13, color: C.text, lineHeight: 1.6 }}>
                  <div style={{ marginBottom: 6 }}><span style={{ fontWeight: 700, color: C.accentDark }}>Technique:</span> {test.technique}</div>
                  <div style={{ padding: "8px 12px", background: `${C.success}12`, borderRadius: 8, border: `1px solid ${C.success}33` }}>
                    <span style={{ fontWeight: 700, color: "#2D7A4F" }}>✅ Positive:</span> {test.positive}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const renderLesion = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Card style={{ background: `linear-gradient(135deg, ${C.rose}30, ${C.mauve}20)`, padding: 20, textAlign: "center" }}>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, color: C.text, margin: "0 0 8px" }}>💥 Lesion & Injury Simulator</h2>
        <p style={{ fontSize: 13, color: C.textLight, margin: 0 }}>Select a nerve injury to predict deficits</p>
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
        {NERVE_DATA.map((nerve, i) => (
          <button key={i} onClick={() => setLesionSim({ nerve: i, showResult: true })} style={{ padding: "12px", borderRadius: 12, border: `2px solid ${lesionSim.nerve === i ? C.accent : "#DDE2E8"}`, background: lesionSim.nerve === i ? `${C.accent}15` : C.white, cursor: "pointer", fontFamily: FONTS, textAlign: "center", transition: "all 0.2s" }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>{nerve.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{nerve.name}</div>
            <div style={{ fontSize: 10, color: C.textLight }}>{nerve.roots}</div>
          </button>
        ))}
      </div>
      {lesionSim.showResult && lesionSim.nerve !== null && (() => {
        const nerve = NERVE_DATA[lesionSim.nerve];
        return (
          <Card style={{ borderLeft: `5px solid ${C.danger}`, padding: 24 }}>
            <h3 style={{ fontWeight: 800, fontSize: 18, fontFamily: FONT_DISPLAY, color: C.text, margin: "0 0 16px" }}>
              {nerve.icon} {nerve.name} Injury
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                { label: "🔨 Classic Fracture Association", value: nerve.fracture, bg: `${C.sand}30` },
                { label: "💪 Expected Motor Deficits", value: nerve.motor, bg: `${C.rose}25` },
                { label: "🖐️ Expected Sensory Loss", value: nerve.sensory, bg: `${C.lime}30` },
                { label: "🩺 Classic Exam Findings", value: nerve.exam, bg: `${C.blue}25` },
              ].map(item => (
                <div key={item.label} style={{ padding: 12, borderRadius: 10, background: item.bg }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </Card>
        );
      })()}
    </div>
  );

  const renderCompartments = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Card style={{ background: `linear-gradient(135deg, ${C.blue}30, ${C.purple}20)`, padding: 20, textAlign: "center" }}>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 22, color: C.text, margin: "0 0 8px" }}>📦 Muscle Compartments</h2>
        <p style={{ fontSize: 13, color: C.textLight, margin: 0 }}>Muscles, innervation, blood supply, and compartment syndrome patterns</p>
      </Card>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {COMPARTMENTS.map((c, i) => (
          <Pill key={i} active={compartmentIdx === i} color={C.purple} onClick={() => setCompartmentIdx(i)}>
            {c.region}
          </Pill>
        ))}
      </div>
      {(() => {
        const comp = COMPARTMENTS[compartmentIdx];
        return (
          <Card style={{ borderLeft: `5px solid ${C.purple}`, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: FONT_DISPLAY, color: C.text, margin: "0 0 16px" }}>{comp.region}</h3>
            {[
              { label: "💪 Muscles", value: comp.muscles.join(", "), icon: "💪", bg: `${C.rose}20` },
              { label: "⚡ Innervation", value: comp.nerve, icon: "⚡", bg: `${C.sand}25` },
              { label: "🔴 Blood Supply", value: comp.artery, icon: "🔴", bg: `${C.teal}20` },
              { label: "🎯 Primary Action", value: comp.action, icon: "🎯", bg: `${C.mint}20` },
              { label: "🚨 Compartment Syndrome", value: comp.syndrome, icon: "🚨", bg: `${C.danger}12` },
            ].map(item => (
              <div key={item.label} style={{ padding: 10, borderRadius: 10, background: item.bg, marginBottom: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.4 }}>{item.value}</div>
              </div>
            ))}
          </Card>
        );
      })()}
    </div>
  );

  const viewMap = {
    home: renderHome,
    anatomy: renderAnatomy,
    quiz: renderQuiz,
    drill: renderDrill,
    nerves: renderNerves,
    exam: renderExam,
    lesion: renderLesion,
    compartments: renderCompartments,
  };

  return (
    <div style={{ fontFamily: FONTS, color: C.text, background: C.bg, minHeight: "100vh", maxWidth: 640, margin: "0 auto", padding: "0 0 80px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet"/>
      <style>{`
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        button:active { transform: scale(0.97); }
        .anim-fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: ${C.blue}; border-radius: 3px; }
      `}</style>

      {/* Header */}
      {view !== "home" && (
        <div style={{ display: "flex", alignItems: "center", padding: "14px 16px", gap: 12, background: C.white, borderBottom: "1px solid #EEF0F3", position: "sticky", top: 0, zIndex: 100 }}>
          <button onClick={() => { if (view === "anatomy" && !selectedRegion) setView("home"); else if (view === "anatomy") { setSelectedRegion(null); setSelectedSubRegion(null); } else setView("home"); }} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: "4px 8px", borderRadius: 8 }}>←</button>
          <div style={{ flex: 1, fontWeight: 800, fontSize: 16, fontFamily: FONT_DISPLAY }}>
            {view === "anatomy" ? "Study" : view === "quiz" ? "Quiz" : view === "drill" ? "Rapid Fire" : view === "nerves" ? "Nerve Injuries" : view === "exam" ? "Physical Exam" : view === "lesion" ? "Lesion Simulator" : view === "compartments" ? "Compartments" : "OrthoMaster"}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Badge icon="⚡" label={`${xp}`} color={C.gold}/>
            <Badge icon="🔥" label={`${streak}`} color="#E05555"/>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ padding: 16 }} className="anim-fade-in">
        {(viewMap[view] || renderHome)()}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 640, background: C.white, borderTop: "1px solid #EEF0F3", display: "flex", justifyContent: "space-around", padding: "8px 0 12px", zIndex: 100 }}>
        {[
          { key: "home", icon: "🏠", label: "Home" },
          { key: "anatomy", icon: "🦴", label: "Anatomy" },
          { key: "nerves", icon: "⚡", label: "Nerves" },
          { key: "exam", icon: "🩺", label: "Exam" },
          { key: "quiz", icon: "🧠", label: "Quiz", action: startQuiz },
        ].map(item => (
          <button key={item.key} onClick={() => { if(item.action) item.action(); else { setView(item.key); if(item.key === "anatomy") { setSelectedRegion(null); setSelectedSubRegion(null); } } }} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", borderRadius: 8, opacity: view === item.key ? 1 : 0.5 }}>
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: view === item.key ? C.accent : C.textLight, fontFamily: FONTS }}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
