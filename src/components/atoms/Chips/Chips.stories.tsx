import * as React from 'react';
import { Icon } from 'components/atoms';
import { Template } from 'components/storybook';

import { Chips, ChipsProps } from './Chips';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Chips', 'atoms'),
  component: Chips,
  argTypes: {
    text: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
};

export const Regular: React.FC<ChipsProps> = ({
  children,
  prefix = <Icon type="check" />,
  text = 'Simple Chips',
  ...props
}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Template>
      <Chips onChange={setChecked} checked={checked} prefix={prefix} text={text} {...props} />
    </Template>
  );
};
