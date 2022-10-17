import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Input } from './Input';

export default {
  title: exportStory('Input', 'form'),
  component: Input,
  argTypes: {
    label: { control: 'text' },
    extra: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
} as ComponentMeta<typeof Input>;

export const Regular: ComponentStory<typeof Input> = ({ children, ...props }) => {
  const [value, setValue] = React.useState<string | number | undefined>();

  return (
    <Template>
      <Input value={value} onChange={setValue} {...props} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  placeholder: 'Example',
};
