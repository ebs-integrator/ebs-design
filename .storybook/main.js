module.exports = {
  stories: [
    '../src/components/ReadMe.stories.mdx',
    '../src/components/*.stories.mdx',
    '../src/components/**/*.stories.@(tsx|mdx)',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  addons: ['@storybook/addon-essentials', 'storybook-addon-themes', '@storybook/preset-create-react-app'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
