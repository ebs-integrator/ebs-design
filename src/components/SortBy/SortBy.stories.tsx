import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { SortBy } from './SortBy';
import { Template } from 'components/storybook';

export default {
  title: exportStory('SortBy', 'utils'),
  component: SortBy,
} as ComponentMeta<typeof SortBy>;

export const Regular: ComponentStory<typeof SortBy> = (args) => (
  <Template>
    <SortBy {...args} />
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
