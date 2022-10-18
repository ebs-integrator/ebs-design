import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Icon } from 'components';
import { Template } from 'components/storybook';
import { Button } from './Button';

export default {
  title: exportStory('Button', 'form'),
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['home', 'eye', 'search', 'bell', 'info', 'star', 'error'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Regular: ComponentStory<typeof Button> = (args) => (
  <Template>
    <Button {...args}>Button</Button>
  </Template>
);

export const WithPrefix: ComponentStory<typeof Button> = (args) => (
  <Template>
    <Button {...args}>Button</Button>
  </Template>
);

export const IconButton: ComponentStory<typeof Button> = (args) => (
  <Template>
    <Button {...args} />
  </Template>
);

Regular.args = {
  type: 'primary',
  size: 'medium',
  prefix: '',
  loading: false,
  submit: false,
  disabled: false,
  full: false,
  rounded: false,
};

WithPrefix.args = {
  ...Regular.args,
  prefix: <Icon type="home" />,
};
