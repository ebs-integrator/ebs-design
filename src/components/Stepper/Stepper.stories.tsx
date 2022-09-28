import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Stepper } from './Stepper';

export default {
  title: exportStory('Stepper', 'navigation'),
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

export const Regular: ComponentStory<typeof Stepper> = (args) => (
  <Template>
    <Stepper {...args} />
  </Template>
);
