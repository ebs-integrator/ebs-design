import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Switch } from './Switch';

export default {
  title: exportStory('Switch', 'form'),
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Regular: ComponentStory<typeof Switch> = ({ children, ...args }) => (
  <Template>
    <Switch {...args} />
    {children}
  </Template>
);

Regular.args = {
  checked: false,
  children: 'Example',
};
