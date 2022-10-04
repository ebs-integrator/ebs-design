import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Icon } from 'components';
import { Button, ButtonGroup } from './Button';

export default {
  title: exportStory('Button', 'form'),
  component: Button,
  subcomponents: { ButtonGroup },
} as ComponentMeta<typeof Button>;

export const Regular: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button {...args}>Button</Button>
  </div>
);

Regular.args = {
  type: 'primary',
  size: 'medium',
  children: 'Example',
  prefix: <Icon type="home" />,
  icon: '',
  loading: false,
  submit: false,
  disabled: false,
  full: false,
  rounded: false,
};
