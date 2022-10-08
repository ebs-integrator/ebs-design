import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Checkbox } from './Checkbox';

export default {
  title: exportStory('Checkbox', 'form'),
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Regular: ComponentStory<typeof Checkbox> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <Template>
      <Checkbox {...args} onChange={(checked) => updateArgs({ checked })} />
    </Template>
  );
};

Regular.args = {
  checkAlign: 'left',
  size: 'medium',
  text: 'Checkbox input',
  value: 'value-1',
  name: 'checkbox',
  id: 'checkbox',
  error: false,
  disabled: false,
};
