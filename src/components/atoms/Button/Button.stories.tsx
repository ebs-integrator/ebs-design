import * as React from 'react';
import { Icon } from 'components/atoms';
import { Template } from 'components/storybook';

import { Button, ButtonGroup, ButtonProps } from './Button';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Button', 'atoms'),
  component: Button,
  subcomponents: { ButtonGroup },
};

export const Regular: React.FC<ButtonProps> & { args: ButtonProps } = ({ children, ...props }) => (
  <Template>
    <Button {...props}>{children}</Button>
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
