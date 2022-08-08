module.exports = {
  stories: ['../src/components/ReadMe.stories.mdx', '../src/components/*.stories.mdx', '../src/components/**/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-controls', 'storybook-addon-themes'],
  presets: ['@storybook/preset-create-react-app'],
  core: {
    builder: '@storybook/builder-webpack5'
  }
};