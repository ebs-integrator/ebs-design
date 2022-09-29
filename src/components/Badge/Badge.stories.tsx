import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Button } from 'components';
import { Badge } from './Badge';

export default {
  title: exportStory('Badge', 'data-display'),
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Regular: ComponentStory<typeof Badge> = (args) => (
  <Template>
    <Badge {...args}>
      <Button>Button</Button>
    </Badge>
  </Template>
);

Regular.args = {
  type: 'success',
  text: 'Example',
  count: undefined,
  className: '',
};
