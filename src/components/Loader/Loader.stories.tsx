import * as React from 'react';
import { Template } from 'components/storybook';

import { Loader, LoaderProps } from './Loader';
import { exportStory } from 'libs';

const { Inline, Spinner } = Loader;

export default {
  title: exportStory('Loader', 'feedback'),
  component: Loader,
  subcomponents: { Inline, Spinner },
  argTypes: {
    size: {
      options: ['small', 'middle', 'regular'],
      control: { type: 'select' },
    },
  },
};

export const Regular: React.FC<LoaderProps> & { args: LoaderProps } = ({ children, ...props }) => (
  <Template>
    <Loader {...props}>Loaded</Loader>
  </Template>
);

Regular.args = {
  size: 'regular',
  loading: true,
  fade: true,
  fixed: true,
  height: '100%',
};

export const _Inline: React.FC<LoaderProps> & { args: LoaderProps } = ({ children, ...props }) => (
  <Template>
    <Loader.Inline {...props} />
  </Template>
);

_Inline.args = Regular.args;

export const _Spinner: React.FC<LoaderProps> & { args: LoaderProps } = ({ children, ...props }) => (
  <Template>
    <Loader.Spinner {...props} />
  </Template>
);

_Spinner.args = Regular.args;
