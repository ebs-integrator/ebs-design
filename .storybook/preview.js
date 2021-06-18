import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import '../src/styles/index.scss';
import './storybook.scss';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    previewSource: 'open'
  },
});

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.append(modalRoot);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};
