import * as React from 'react';
import { Template } from 'components/storybook';

import { Label, LabelProps } from './Label';
import { exportStory } from 'libs';

export default {
  title: exportStory('Label', 'form'),
  component: Label,
  argTypes: {
    text: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
};

export const Regular: React.FC<LabelProps> & { args: LabelProps } = ({ children, ...props }) => (
  <Template>
    <Label {...props} />
  </Template>
);

Regular.args = {
  text: 'Example',
};
