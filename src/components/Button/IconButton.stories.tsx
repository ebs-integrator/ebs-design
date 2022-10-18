import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { IconButton } from './IconButton';

export default {
  title: exportStory('IconButton', 'form'),
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['home', 'eye', 'search', 'bell', 'info', 'star', 'error'],
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

export const Regular: ComponentStory<typeof IconButton> = (args) => (
  <Template>
    <IconButton {...args}>IconButton</IconButton>
  </Template>
);

Regular.args = {
  type: 'primary',
  size: 'medium',
  icon: 'home',
  loading: false,
  rounded: false,
  disabled: false,
  submit: false,
};
