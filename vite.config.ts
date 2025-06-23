import { resolve, join } from 'node:path'
import { readFileSync, existsSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import process from 'node:process'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import VueRouter from 'unplugin-vue-router/vite'
import VueComponents from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import browserslist from 'browserslist'
import { Features as LightningCssFeatures, browserslistToTargets } from 'lightningcss'
import openapiTS, { astToString } from 'openapi-typescript'

const env = loadEnv('', './')

try {
  if (!existsSync('./src/types/schema.d.ts') && env.VITE_API_URL !== '') {
    const schema = await openapiTS(new URL(`${env.VITE_API_URL}/open-api-spec/json`))

    writeFileSync('./src/types/schema.d.ts', astToString(schema))
  }
} catch (error) {
  console.error(error)
}

const lightningcss = process.env.NODE_ENV === 'production'
  ? {
      include: LightningCssFeatures.Nesting,
    }
  : {
      exclude: LightningCssFeatures.Nesting,
    }

export default {
  plugins: [
    tailwindcss(),
    VueRouter({
      dts: './src/types/typed-router.d.ts',
      importMode: 'sync',
    }),
    VueComponents({
      dirs: ['./components/'],
      dts: './types/components.d.ts',
    }),
    vue({
      features: {
        customElement: false,
      },
    }),
    vueI18n({
      include: [resolve(process.cwd(), 'src/locales/**')],
      strictMessage: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '/src': resolve(process.cwd(), 'src'),
    },
  },
  server: {
    host: true,
    https: existsSync(join(homedir(), `.ssh/localhost-key.pem`))
      ? {
          key: readFileSync(join(homedir(), `.ssh/localhost-key.pem`)),
          cert: readFileSync(join(homedir(), `.ssh/localhost.pem`)),
        }
      : false,
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist()),
      ...lightningcss,
      drafts: {
        customMedia: true,
      },
    },
  },
  root: resolve(process.cwd(), 'src'),
  base: env.VITE_BASE_URL,
  publicDir: resolve(process.cwd(), 'public'),
  envDir: process.cwd(),
  build: {
    target: browserslistToEsbuild(),
    outDir: resolve(process.cwd(), 'dist'),
  },
}
