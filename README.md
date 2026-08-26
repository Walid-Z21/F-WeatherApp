# Add in package.json :
- ... ,"overrides":{"esbuild":"npm:esbuild-wasm@latest","rollup":"npm:@rollup/wasm-node"}
- devDependencies : ... , "@rollup/rollup-win32-x64-msvc":"^4.55.1",... 

# Add in .env:
- VITE_API_URL : bring it from where you deployed the backend server b-weather-app.