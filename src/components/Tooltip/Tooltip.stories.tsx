import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Button } from 'components';
import { Tooltip } from './Tooltip';

export default {
  title: exportStory('Tooltip', 'data-display'),
  component: Tooltip,
  argTypes: {
    title: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Tooltip>;

export const Regular: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Template>
      <Tooltip {...args}>
        <Button>Example</Button>
      </Tooltip>
      <div className="mr-15 inline"></div>
      <Tooltip {...args}>
        <Button>Example</Button>
      </Tooltip>
      <div className="mr-15 inline"></div>
      <Tooltip {...args}>
        <Button>Example</Button>
      </Tooltip>
    </Template>
  );
};

Regular.args = {
  tooltip: 'Tooltip content',
  inline: true,
  trigger: 'hover',
};
