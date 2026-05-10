import { setupPlugins } from '@responsive-image/vite-plugin'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'
import magicalSvg from 'vite-plugin-magical-svg'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    // See: https://rollupjs.org/configuration-options/#external
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    setupPlugins({
      format: ['original', 'webp'],
      include: /^[^?]+\.(jpe?g|png|webp)\?.*responsive.*$/,
      lqip: { type: 'color' },
    }),
    magicalSvg({
      target: 'react19-jsx',
      preserveWidthHeight: true,
      restoreMissingViewBox: true,
      setWidthHeight: { width: '24', height: '24' },
    }),
  ],
  optimizeDeps: {
    include: [
      'vite-plugin-magical-svg/runtime/react19-jsx.js',
      '@responsive-image/core',
    ],
  },
  environments: {
    ssr: { build: { rollupOptions: { input: './server.ts' } } },
  },
})

export default config
