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
      <Radio {...args} onChange={() => updateArgs({ checked: true })} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  radioAlign: 'left',
  text: 'Radio input',
  value: 'example',
  name: 'example',
  id: 'example',
  checked: false,
  disabled: false,
};
