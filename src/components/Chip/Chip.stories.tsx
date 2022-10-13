import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Icon } from 'components/';
import { Chip } from './Chip';

export default {
  title: exportStory('Chip', 'data-display'),
  component: Chip,
  argTypes: {
    text: { control: 'text' },
    suffix: { control: 'text' },
    checked: { control: 'boolean' },
  },
} as ComponentMeta<typeof Chip>;

export const Regular: ComponentStory<typeof Chip> = (args) => {
  const [{ checked }, updateArgs] = useArgs();

  return (
    <Template>
      <Chip onChange={() => updateArgs({ checked: !checked })} {...args} />
    </Template>
  );
};

Regular.args = {
  text: 'Simple Chip',
  prefix: <Icon type="check" />,
  checked: false,
};
