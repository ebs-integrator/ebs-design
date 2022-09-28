import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Label } from './Label';

export default {
  title: exportStory('Label', 'form'),
  component: Label,
  argTypes: {
    text: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
} as ComponentMeta<typeof Label>;

export const Regular: ComponentStory<typeof Label> = (args) => (
  <Template>
    <Label {...args} />
  </Template>
);

Regular.args = {
  text: 'Example',
};
