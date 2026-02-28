# Medical Learning Platform — Architecture

## Overview
Two coordinated React apps (Neuro + MSK) sharing a single verified knowledge base.

## Directory Structure
```
med-learning-platform/
├── shared/
│   ├── knowledge-base.json  # Single source of truth
│   ├── kb-schema.ts         # TypeScript types
│   ├── citations.json       # All references
│   └── consistency-checker.js
├── neuro/
│   └── neuro-app.jsx        # Refactored to consume KB
├── msk/
│   └── msk-platform.jsx     # Refactored to consume KB
├── diagrams/                # Standalone verified SVGs
├── validation/
│   ├── content-linter.js
│   ├── rule-validator.js
│   ├── diagram-validator.js
│   └── quiz-validator.js
└── docs/
    ├── REFERENCES.md
    └── VERIFICATION-LOG.md
```

## Design System
- Pastel palette: #9EC8CF, #AEBBD0, #C9BFD5, #D7C3CF, #E0C3C3, #E6D2B8, #E8E1B3, #B8D6C2
- Text: #222222 (primary), #1F2933 (secondary)
- Vector diagrams only (SVG), Fonts: DM Sans / Nunito / Quicksand

## Content Pipeline
1. Extract data from existing JSX → unified KB
2. Verify each fact against references
3. Build KB with citations
4. Run validation suite
5. Refactor apps to consume KB
