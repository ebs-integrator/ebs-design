import * as React from 'react';
import { Template } from 'components/storybook';

import { Input, InputProps } from './Input';
import { exportStory } from 'libs';

export default {
  title: exportStory('Input', 'form'),
  component: Input,
  argTypes: {
    label: { control: 'text' },
    extra: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
};

export const Regular: React.FC<InputProps> & { args: InputProps } = ({ children, ...props }) => {
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
