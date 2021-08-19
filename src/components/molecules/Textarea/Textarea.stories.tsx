import * as React from 'react';
import { Template } from 'components/storybook';

import { Textarea, TextareaProps } from './Textarea';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Textarea', 'molecules'),
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    extra: { control: 'text' },
  },
};

export const Regular: React.FC<TextareaProps> & { args: TextareaProps } = ({ children, ...props }) => (
  <Template>
    <Textarea {...props} />
  </Template>
);

Regular.args = {
  placeholder: 'Text field',
};
