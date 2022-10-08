import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { RadioGroup } from './RadioGroup';

export default {
  title: exportStory('Radio Group', 'form'),
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

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
    error: true,
  },
  {
    text: 'Radio input 4',
    value: 'value-4',
    disabled: true,
  },
];

export const Regular: ComponentStory<typeof RadioGroup> = (args) => {
  const [, updateArgs] = useArgs();
  const [value, setValue] = React.useState<string | number>(args.value);

  React.useEffect(() => console.log('radio value:', value), [value]);

  return (
    <Template>
      <RadioGroup
        {...args}
        onChange={(value) => {
          updateArgs({ value });
          setValue(value);
        }}
      />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  radioAlign: 'left',
  direction: 'column',
  spacing: 'medium',
  name: 'input-example',
  value: 'value-1',
  options,
};
