import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Button } from 'components';
import { Space } from './Space';

export default {
  title: exportStory('Space', 'layout'),
  component: Space,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Space>;

export const Regular: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    <Button>Button 1</Button>
    <h3>green</h3>
    <Button>Button 2</Button>
    <h2>blue</h2>
    <div></div>
    <Button>Button 3</Button>
  </Space>
);

Regular.args = {
  size: 'medium',
  direction: 'horizontal',
  wrap: false,
  align: 'center',
  justify: 'start',
};
