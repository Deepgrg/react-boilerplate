// .storybook/main.js|ts
const viteTsconfig = require('vite-tsconfig-paths')
const tsconfigPaths = viteTsconfig.default

const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx','../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-addon-sass-postcss',
    // {
    //   name: 'storybook-addon-sass-postcss',
    //   options: {
    //     rule: {
    //       test: /\.(scss|sass)$/i,
    //     },
    //   },
    // },
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },

  async viteFinal(config) {
    return mergeConfig(config,{
      plugins: [tsconfigPaths(),require('tailwindcss')],
    })
  },
}
