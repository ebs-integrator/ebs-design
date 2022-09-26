import * as React from 'react';
import { Button } from 'components';
import { Template } from 'components/storybook';

import { Badge, BadgeProps } from './Badge';
import { exportStory } from 'libs';

export default {
  title: exportStory('Badge', 'data-display'),
  component: Badge,
};

export const Regular: React.FC<BadgeProps> & { args: BadgeProps } = ({ children, ...props }) => (
  <Template>
    <Badge {...props}>
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
