import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Icon } from 'components';
import { Button, ButtonGroup } from './Button';

export default {
  title: exportStory('Button', 'form'),
  component: Button,
  subcomponents: { ButtonGroup },
} as ComponentMeta<typeof Button>;

export const Regular: ComponentStory<typeof Button> = (args) => (
  <Template>
    <Button {...args}>Button</Button>
  </Template>
);

Regular.args = {
  type: 'primary',
  size: 'medium',
  children: 'Example',
  form: '',
  icon: '',
  buttonClass: '',
  loading: false,
  submit: false,
  block: false,
  onClick: () => console.log,
  prefix: <Icon type="home" />,
};
