// Build script for GitHub Pages - creates static HTML from JSX apps
const fs = require('fs');
const path = require('path');

const KB = JSON.parse(fs.readFileSync('shared/knowledge-base.json', 'utf8'));

function buildApp(jsxPath, title, outputName) {
  const jsx = fs.readFileSync(jsxPath, 'utf8');

  // Detect the exported component name (e.g. "export default function NeuroLearnApp")
  const exportMatch = jsx.match(/export\s+default\s+function\s+(\w+)/);
  const componentName = exportMatch ? exportMatch[1] : 'App';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'DM Sans', 'Nunito', 'Quicksand', -apple-system, sans-serif; background: #f8f9fa; color: #222; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
${jsx}

const App = ${componentName};
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  </script>
</body>
</html>`;
  
  fs.writeFileSync(`docs/${outputName}`, html);
  console.log(`Built: docs/${outputName} (${(html.length/1024).toFixed(0)}KB)`);
}

// Create docs directory for GitHub Pages
fs.mkdirSync('docs', { recursive: true });
fs.mkdirSync('docs/diagrams', { recursive: true });

// Build both apps
buildApp('neuro/neuro-app.jsx', 'Neuroanatomy Learning Platform | Step 1', 'neuro.html');
buildApp('msk/msk-platform.jsx', 'MSK & Orthopedics Learning Platform | Step 1', 'msk.html');

// Copy SVG diagrams
const diagrams = fs.readdirSync('diagrams').filter(f => f.endsWith('.svg'));
diagrams.forEach(d => {
  fs.copyFileSync(`diagrams/${d}`, `docs/diagrams/${d}`);
});
console.log(`Copied ${diagrams.length} SVG diagrams`);

// Build index page
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Step 1 Medical Learning Platform</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'DM Sans', sans-serif; background: linear-gradient(135deg, #9EC8CF 0%, #AEBBD0 25%, #C9BFD5 50%, #D7C3CF 75%, #E0C3C3 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .container { max-width: 800px; margin: 2rem; text-align: center; }
    h1 { font-size: 2.5rem; color: #1F2933; margin-bottom: 0.5rem; }
    .subtitle { color: #4a5568; font-size: 1.1rem; margin-bottom: 2rem; }
    .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
    .card { background: white; border-radius: 16px; padding: 2rem; text-decoration: none; color: #222; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.2s, box-shadow 0.2s; }
    .card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
    .card h2 { font-size: 1.4rem; margin-bottom: 0.5rem; }
    .card p { color: #666; font-size: 0.95rem; line-height: 1.5; }
    .emoji { font-size: 3rem; margin-bottom: 1rem; }
    .stats { display: inline-block; background: #E8E1B3; color: #1F2933; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-top: 0.75rem; }
    .badge { display: inline-block; background: #B8D6C2; color: #1F2933; padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-top: 1rem; }
    .footer { margin-top: 2rem; color: #4a5568; font-size: 0.85rem; }
    @media (max-width: 600px) { .cards { grid-template-columns: 1fr; } h1 { font-size: 1.8rem; } }
  </style>
</head>
<body>
  <div class="container">
    <h1>🩺 Step 1 Study Platform</h1>
    <p class="subtitle">Verified medical learning with First Aid 2024 page references</p>
    <div class="badge">KB v${KB.version} · ${KB.neuroQuizBank.length + KB.mskQuizBank.length} verified questions · ${KB.tracts.length} tracts · ${KB.cranialNerves.length} cranial nerves</div>
    
    <div class="cards">
      <a href="neuro.html" class="card">
        <div class="emoji">🧠</div>
        <h2>Neuroanatomy</h2>
        <p>Spinal cord tracts, cranial nerves, brainstem syndromes, brain regions, lesion localization</p>
        <div class="stats">${KB.neuroQuizBank.length} quiz questions</div>
      </a>
      
      <a href="msk.html" class="card">
        <div class="emoji">🦴</div>
        <h2>MSK & Orthopedics</h2>
        <p>Nerve injuries, fractures, clinical tests, joint exam, pediatric orthopedics</p>
        <div class="stats">${KB.mskQuizBank.length} quiz questions</div>
      </a>
    </div>
    
    <p class="footer">
      All content verified against First Aid 2024 Step 1 · Built with 🦞 by Claw<br>
      <a href="https://github.com/andrewjfiore/med-learning-platform" style="color:#7B68AE;">GitHub</a>
    </p>
  </div>
</body>
</html>`;

fs.writeFileSync('docs/index.html', indexHtml);
console.log('Built: docs/index.html');
console.log('\\nDone! GitHub Pages ready in docs/');
