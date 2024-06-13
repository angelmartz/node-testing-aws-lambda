const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

function createPackageJson(dest) {
    const packageJson = {
        name: "my-nodejs-project",
        version: "1.0.0",
        main: "index.js"
    };
  
    const content = JSON.stringify(packageJson, null, 2);
    fs.writeFileSync(dest, content);
}
esbuild.build({
    entryPoints: ['src/index.js'],  // Archivo(s) de entrada
    bundle: true,                   // Habilita el bundle
    outfile: 'dist/index.js',      // Archivo de salida
    minify: true,                   // Minimiza el archivo de salida
    sourcemap: true,                // Genera un archivo source map
    platform: 'node',               // Plataforma de destino (node)
    target: 'es2020',               // Versión de ECMAScript de destino
}).then(() => {
    createPackageJson('dist/package.json');
}).catch(() => process.exit(1));