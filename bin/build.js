const esbuild = require('esbuild')
const isDev = process.argv.includes('--dev')

esbuild
    .build({
        define: {
            'process.env.NODE_ENV': isDev ? `'development'` : `'production'`,
        },
        entryPoints: ['./resources/js/index.js'],
        outfile: './resources/dist/filament-google-charts-widgets.js',
        bundle: true,
        sourcemap: isDev ? 'inline' : false,
        sourcesContent: isDev,
        platform: 'neutral',
        mainFields: ['module', 'main'],
        watch: isDev,
    })
    .catch(() => process.exit(1))
