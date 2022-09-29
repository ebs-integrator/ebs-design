module.exports = {
  stories: [
    '../src/components/ReadMe.stories.mdx',
    '../src/components/*.stories.mdx',
    '../src/components/**/*.stories.@(tsx|mdx)',
  ],
  staticDirs: ['../.storybook/images'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
    'storybook-addon-themes',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
