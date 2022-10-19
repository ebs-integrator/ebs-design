import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: exportStory('Checkbox Group', 'form'),
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const options = [
  {
    text: 'Radio input 1',
    value: 'value-1',
  },
  {
    text: 'Radio input 2',
    value: 'value-2',
  },
  {
    text: 'Radio input 3',
    value: 'value-3',
  },
  {
    text: 'Radio input 4',
    value: 'value-4',
    disabled: true,
  },
];

export const Regular: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <Template>
      <CheckboxGroup {...args} onChange={(values) => updateArgs({ values })} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  checkAlign: 'left',
  direction: 'column',
  spacing: 'medium',
  name: 'input-example',
  values: [],
  options,
};
