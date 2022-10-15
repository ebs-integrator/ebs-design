import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Icon } from 'components/';
import { Chip } from './Chip';

export default {
  title: exportStory('Chip', 'data-display'),
  component: Chip,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: { actions: { argTypesRegex: null } },
} as ComponentMeta<typeof Chip>;

export const Regular: ComponentStory<typeof Chip> = (args) => {
  return (
    <Template>
      <Chip {...args} />
    </Template>
  );
};

export const WithPrefix = Regular.bind({});
export const Removable = Regular.bind({});
export const Clickable = Regular.bind({});

Regular.args = {
  size: 'medium',
  type: 'outlined',
  color: 'primary',
  text: 'Simple Chip',
  disabled: false,
};

WithPrefix.args = {
  ...Regular.args,
  prefix: <Icon type="bell" />,
};

Clickable.args = {
  ...Regular.args,
  onClick: () => console.log('click'),
};

Removable.args = {
  ...Regular.args,
  onDelete: () => console.log('delete'),
};
