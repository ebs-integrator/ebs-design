import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: exportStory('Checkbox', 'form'),
  component: Checkbox,
  subcomponents: { CheckboxGroup },
} as ComponentMeta<typeof Checkbox>;

export const Regular: ComponentStory<typeof Checkbox> = (args) => (
  <Template>
    <Checkbox {...args} />
  </Template>
);

Regular.args = {
  text: 'Example',
  checkAlign: 'left',
};
