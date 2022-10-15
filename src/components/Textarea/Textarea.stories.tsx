import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Textarea } from './Textarea';

export default {
  title: exportStory('Textarea', 'form'),
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Regular: ComponentStory<typeof Textarea> = (args) => (
  <Template>
    <Textarea {...args} />
  </Template>
);

Regular.args = {
  placeholder: 'Text field',
  radius: 'medium',
  resize: 'none',
  autoresize: false,
  disabled: false,
  invalid: false,
  value: '',
  name: 'textarea',
};
