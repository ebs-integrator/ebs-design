import * as React from 'react';
import { Template } from 'components/storybook';

import { InputSearch, InputSearchProps } from './InputSearch';
import { exportStory } from 'libs';

export default {
  title: exportStory('InputSearch', 'form'),
  component: InputSearch,
  argTypes: {
    label: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    extra: { control: 'text' },
  },
};

export const Regular: React.FC<InputSearchProps> & { args: InputSearchProps } = ({ children, ...props }) => {
  const [value, setValue] = React.useState('');

  return (
    <Template>
      <InputSearch value={value} onSearch={setValue} {...props} />
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
