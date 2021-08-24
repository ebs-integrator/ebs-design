import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import '../src/styles/index.scss';
import './storybook.scss';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    previewSource: 'open',
  },
});

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal');
document.body.append(modalRoot);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  themes: {
    default: 'Blue',
    list: [
      { name: 'Blue', class: '', color: '#3bc0f9' },
      { name: 'Dark', class: 'theme--dark', color: '#222222' },
      { name: 'Grey', class: 'theme--grey', color: '#888888' },
      { name: 'Green', class: 'theme--green', color: '#2ac952' },
      { name: 'Yellow', class: 'theme--yellow', color: '#ffd83d' },
      { name: 'Red', class: 'theme--red', color: '#ff3a30' },
      { name: 'Violet', class: 'theme--violet', color: '#9b1dd9' },
    ],
  },
};
