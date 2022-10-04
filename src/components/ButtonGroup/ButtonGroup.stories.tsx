import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Button } from 'components';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export default {
  title: exportStory('ButtonGroup', 'form'),
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Primary: ComponentStory<typeof ButtonGroup> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  </div>
);

Primary.args = {
  size: 'medium',
};

export const Ghost: ComponentStory<typeof ButtonGroup> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ButtonGroup {...args}>
      <Button type="ghost">Button 1</Button>
      <Button type="ghost">Button 2</Button>
      <Button type="ghost">Button 3</Button>
    </ButtonGroup>
  </div>
);

Ghost.args = {
  size: 'medium',
};
