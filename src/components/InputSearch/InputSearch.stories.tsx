import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { InputSearch } from './InputSearch';

export default {
  title: exportStory('InputSearch', 'form'),
  component: InputSearch,
  argTypes: {
    label: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    extra: { control: 'text' },
  },
} as ComponentMeta<typeof InputSearch>;

export const Regular: ComponentStory<typeof InputSearch> = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <Template>
      <InputSearch value={value} onSearch={setValue} {...args} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  placeholder: 'Text field',
  iconAlign: 'suffix',
  styleType: 'stroke',
  autoFocus: true,
  isClearable: true,
};
