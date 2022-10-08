import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Radio } from './Radio';

export default {
  title: exportStory('Radio', 'form'),
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Regular: ComponentStory<typeof Radio> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <Template>
      <Radio onClick={() => updateArgs({ checked: true })} {...args} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  radioAlign: 'left',
  children: 'Radio input',
  value: 'yes',
  name: 'yes-no',
  id: 'yes-no',
  checked: false,
  error: false,
  disabled: false,
};
