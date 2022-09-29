import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Icon } from 'components/';
import { Chips } from './Chips';

export default {
  title: exportStory('Chips', 'data-display'),
  component: Chips,
  argTypes: {
    text: { control: 'text' },
    suffix: { control: 'text' },
    checked: { control: 'boolean' },
  },
} as ComponentMeta<typeof Chips>;

export const Regular: ComponentStory<typeof Chips> = (args) => {
  const [{ checked }, updateArgs] = useArgs();

  return (
    <Template>
      <Chips onChange={() => updateArgs({ checked: !checked })} {...args} />
    </Template>
  );
};

Regular.args = {
  text: 'Simple Chip',
  prefix: <Icon type="check" />,
  checked: false,
};
