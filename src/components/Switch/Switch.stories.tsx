import * as React from 'react';
import { Template } from 'components/storybook';

import { Switch, SwitchProps } from './Switch';
import { exportStory } from 'libs';

export default {
  title: exportStory('Switch', 'inputs'),
  component: Switch,
};

export const Regular: React.FC<SwitchProps> & { args: SwitchProps } = ({ children, ...props }) => (
  <Template>
    <Switch {...props} />
    {children}
  </Template>
);

Regular.args = {
  checked: false,
  children: 'Example',
};
