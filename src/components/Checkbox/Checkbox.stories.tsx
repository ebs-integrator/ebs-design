import * as React from 'react';
import { Template } from 'components/storybook';

import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { exportStory } from 'libs';

export default {
  title: exportStory('Checkbox', 'form'),
  component: Checkbox,
  subcomponents: { CheckboxGroup },
};

export const Regular: React.FC<CheckboxProps> & { args: CheckboxProps } = ({ children, ...props }) => (
  <Template>
    <Checkbox {...props} />
  </Template>
);

Regular.args = {
  text: 'Example',
  checkAlign: 'left',
};
