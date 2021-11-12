(async () => {
  const { build } = require('esbuild')

  try {
    const res = await build({
      entryPoints: ['./src/main.js'],
      outfile: './dist/main.js',
      minify: true,
      bundle: true
    })
    console.log("res", res)
  } catch(e) {}
})()