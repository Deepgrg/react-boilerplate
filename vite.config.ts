/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { GetEnvVars } from 'env-cmd'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = await GetEnvVars({
    rc: {
      filePath: path.join(__dirname, `/.env-cmdrc.json`),
      environments: [mode],
    },
  })

  return {

    plugins: [
      react(),
      ...(mode !== 'test'
        ? [
          checker({
            eslint: {
              lintCommand: 'eslint ./src',
            },
            typescript: true,
            enableBuild: false,
            overlay: { panelStyle: 'height:100%;' },
          }),
        ]
        : []),
    ],
    esbuild: {
      // drop: ['console', 'debugger'],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: [path.join(__dirname, './src/config/setupTests.ts')],
      coverage: {
        reporter: ['text','html'],
        provider: 'c8',
      },
    },
    server: {
      port: env.PORT,
      open: true,
      https: env.HTTPS,
    },
    define: {
      'process.env.VITE_NODE_ENV': `"${mode}"`,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname,'./src'),
        '~bootstrap': path.resolve(__dirname,'node_modules/bootstrap'),
        /**
         * Storybook (specifically the interactions addon) requires that we use their
         *   instrumented version of jest-expect. So our storybook does so. To make
         *   these interactions still work in vitest we have @storybook/jest aliased
         *   to resolve to vitest which, critically, exports { expect } as well.
         */
        '@storybook/jest': 'vitest',
      },
    },
    build: {
      outDir: env.BUILD_PATH,
      rollupOptions: {
        output: {
          sourcemap: env.GENERATE_SOURCEMAP,
          generatedCode: 'es5',
        },
        plugins: [
          babel({
            babelHelpers: 'bundled',
            configFile: path.resolve(__dirname,'.babelrc'),
          }),
          resolve(),
        ],
      },
    },
  }
})
