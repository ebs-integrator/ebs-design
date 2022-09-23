import * as React from 'react';
import { Template } from 'components/storybook';

import { Radio, RadioProps } from './Radio';
import { exportStory } from 'libs';

export default {
  title: exportStory('Radio', 'inputs'),
  component: Radio,
};

const options = [{ text: 'Simple Radio', value: 1 }];

export const Regular: React.FC<RadioProps> & { args: RadioProps } = ({ children, ...props }) => {
  const [checked, setChecked] = React.useState<string | number | undefined>();

  return (
    <Template>
      <Radio options={options} value={checked} onChange={setChecked} {...props} />
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
