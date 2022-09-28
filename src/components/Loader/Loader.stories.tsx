import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Loader } from './Loader';

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
} as ComponentMeta<typeof Loader>;

export const Regular: ComponentStory<typeof Loader> = (args) => (
  <Template>
    <Loader {...args}>Loaded</Loader>
  </Template>
);

Regular.args = {
  size: 'regular',
  loading: true,
  fade: true,
  fixed: true,
  height: '100%',
};

export const _Inline: ComponentStory<typeof Loader> = (args) => (
  <Template>
    <Loader.Inline {...args} />
  </Template>
);

_Inline.args = Regular.args;

export const _Spinner: ComponentStory<typeof Loader> = (args) => (
  <Template>
    <Loader.Spinner {...args} />
  </Template>
);

_Spinner.args = Regular.args;
