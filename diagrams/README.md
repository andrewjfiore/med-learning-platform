# Diagram Verification Checklists

## spinal-cord-cross-section.svg
| Check | Status | Notes |
|-------|--------|-------|
| Label placement | ✅ | DCML posterior, STT anterolateral, CST lateral, SCT posterolateral |
| Structure boundaries | ✅ | Tracts within white matter, gray matter butterfly shape |
| Adjacent relationships | ✅ | SCT between CST and DCML, STT anterolateral |
| Laterality | ✅ | Bilateral symmetric |
| Level-specific variants | ⚠️ | Generic cross-section; cervical/thoracic/lumbar variants TODO |
| Semantic IDs | ✅ | All IDs match KB: tract_dorsal_column, tract_spinothalamic, etc. |
| Named layers | ✅ | layer_cord, layer_gray_matter, layer_tract_* |
| Sources | Netter's Atlas, First Aid 2024, StatPearls |

## shoulder-anatomy.svg (in-app, JSX-rendered)
| Check | Status | Notes |
|-------|--------|-------|
| Bones | ✅ | Clavicle, scapula, humeral head, tuberosities |
| Rotator cuff muscles | ✅ | Supraspinatus, infraspinatus, teres minor, subscapularis |
| Deltoid | ✅ | Correct wrapping origin-insertion |
| Nerves | ✅ | Axillary, suprascapular |
| Vessels | ✅ | Circumflex humeral arteries |
| Ligaments | ✅ | Coracohumeral, glenohumeral |

## knee-anatomy.svg (in-app, JSX-rendered)
| Check | Status | Notes |
|-------|--------|-------|
| Bones | ✅ | Femur, tibia, fibula, patella |
| Ligaments | ✅ | ACL, PCL, MCL, LCL, menisci |
| Nerves | ✅ | Common peroneal at fibular neck, tibial |
| Vessels | ✅ | Popliteal artery |

## brainstem cross-sections (in-app, JSX-rendered)
| Level | Structures | Status |
|-------|-----------|--------|
| Midbrain | Cerebral peduncle, substantia nigra, red nucleus, CN III, superior colliculus, aqueduct | ✅ |
| Pons | Basilar pons, CN V/VI/VII, MCP, 4th ventricle | ✅ |
| Medulla | Pyramids, olives, nucleus gracilis/cuneatus, CN XII, 4th ventricle | ✅ |
