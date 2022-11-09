import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Switch } from './Switch';

export default {
  title: exportStory('Switch', 'form'),
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Regular: ComponentStory<typeof Switch> = (args) => (
  <Template>
    <Switch {...args} />
  </Template>
);

Regular.args = {
  size: 'medium',
  text: 'Example',
  checked: false,
  loading: false,
  disabled: false,
};
