const path = require('path');
const { override, useEslintRc } = require('customize-cra');

module.exports = {
  stories: [
    '../src/components/atoms/**/*.stories.tsx',
    '../src/components/organisms/**/*.stories.tsx',
    '../src/features/**/**/*.stories.tsx',
  ],
  presets: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    },
  ],
  webpack: override(useEslintRc(path.resolve(__dirname, '../.eslintrc.js'))),
};
