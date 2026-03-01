const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// First build the bundle
async function build() {
  let jsx = fs.readFileSync('neuro/neuro-app.jsx', 'utf8');
  jsx = 'import React from "react";\n' + jsx;
  jsx = jsx.replace('const { useState, useEffect, useCallback, useMemo, useRef } = React;', '');
  fs.writeFileSync('neuro/temp-input.jsx', jsx);
  
  await esbuild.build({
    entryPoints: ['neuro/temp-input.jsx'],
    bundle: true,
    outfile: 'docs/neuro-app-bundle.js',
    format: 'iife',
    globalName: 'NeuroApp',
    minify: true,
    jsx: 'transform',
    external: ['react', 'react-dom'],
  });
  
  // Now create the HTML that uses the bundle
  let html = fs.readFileSync('docs/neuro.html', 'utf8');
  
  // Replace the Babel script with the pre-bundled script
  const babelScriptMatch = html.match(/<script type="text\/babel">[\s\S]*?<\/script>/);
  if (babelScriptMatch) {
    const bundleScript = '<script src="neuro-app-bundle.js"></script>';
    html = html.replace(babelScriptMatch[0], bundleScript);
  }
  
  // Add App const if not present
  if (!html.includes('const App = ')) {
    html = html.replace(
      "ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));",
      "const App = NeuroApp;\nReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));"
    );
  }
  
  fs.writeFileSync('docs/neuro.html', html);
  console.log('Done!');
}

build().catch(console.error);
