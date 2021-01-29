import * as React from 'react';
import { Button } from 'components/atoms';

import { Space } from './Space';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Space', 'atoms'),
  component: Space,
};

export const Regular = (): React.ReactElement => (
  <Space>
    <Button>Button 1</Button>
    <h3>green</h3>
    <Button>Button 2</Button>
    <h2>blue</h2>
    <div></div>
    <Button>Button 3</Button>
  </Space>
);
