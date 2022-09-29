import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Radio } from './Radio';

export default {
  title: exportStory('Radio', 'form'),
  component: Radio,
} as ComponentMeta<typeof Radio>;

const options = [{ text: 'Simple Radio', value: 1 }];

export const Regular: ComponentStory<typeof Radio> = (args) => {
  const [checked, setChecked] = React.useState<string | number | undefined>();

  return (
    <Template>
      <Radio options={options} value={checked} onChange={setChecked} {...args} />
    </Template>
  );
};

Regular.args = {
  className: '',
  radioAlign: 'left',
  textClass: '',
  textStyle: {},
  value: undefined,
  options,
  onChange: (value?: string | number) => console.log(value),
};
