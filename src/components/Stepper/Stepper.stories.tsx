import * as React from 'react';
import { Template } from 'components/storybook';

import { Stepper, StepperProps } from './Stepper';
import { exportStory } from 'libs';

export default {
  title: exportStory('Stepper', 'navigation'),
  component: Stepper,
};

export const Regular: React.FC<StepperProps> = ({ children, ...props }) => (
  <Template>
    <Stepper {...props} />
  </Template>
);
