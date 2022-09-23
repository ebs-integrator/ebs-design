import * as React from 'react';
import { Button } from 'components';

import { Space, SpaceProps } from './Space';
import { exportStory } from 'libs';

export default {
  title: exportStory('Space', 'layout'),
  component: Space,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

export const Regular: React.FC<SpaceProps> & { args: SpaceProps } = ({ children, ...props }) => (
  <Space {...props}>
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
