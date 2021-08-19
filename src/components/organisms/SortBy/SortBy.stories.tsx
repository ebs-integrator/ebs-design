import * as React from 'react';
import { Template } from 'components/storybook';

import { SortBy, SortByProps } from './SortBy';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('SortBy', 'organisms'),
  component: SortBy,
};

export const Regular: React.FC<SortByProps> & { args: SortByProps } = ({ children, ...props }) => (
  <Template>
    <SortBy {...props} />
  </Template>
);

Regular.args = {
  size: 'medium',
  options: [
    { title: 'Example', value: 'example' },
    { title: 'Example 2', value: 'example_2' },
  ],
  onChange: (): null => null,
};
