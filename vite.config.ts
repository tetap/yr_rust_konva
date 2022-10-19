import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import vitePluginImp from 'vite-plugin-imp'
import ViteRsw from 'vite-plugin-rsw'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    // base: `${loadEnv(mode, process.cwd()).VITE_APP_API_BASE_NAME}/`,
    base: './',
    server: {
      fs: {
        strict: false,
        allow: ['./@wasm/image']
      }
    },
    plugins: [
      svgr(),
      ViteRsw(),
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin']
        }
      }),
      manualChunksPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      vitePluginImp({
        libList: []
      }),
      eslintPlugin()
    ],
    esbuild: {
      treeShaking: false
    },
    build: {
      cssTarget: ['chrome61'],
      reportCompressedSize: false,
      sourcemap: false,
      minify: 'esbuild'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  })
}
