import * as React from 'react';
import { SelectDropdown } from './SelectDropdown';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('SelectDropdown', 'molecules'),
  component: SelectDropdown,
};

export const Regular = (): React.ReactElement => (
  <SelectDropdown
    mode="multiple"
    options={[
      { text: 'test', value: 'test' },
      { text: 'test2', value: 'test2' },
      { text: 'test3', value: 'test3' },
    ]}
  />
);
