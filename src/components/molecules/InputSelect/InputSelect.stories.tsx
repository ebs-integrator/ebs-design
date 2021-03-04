import * as React from 'react';

import { InputSelect } from './InputSelect';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('InputSelect', 'molecules'),
  component: InputSelect,
};

const options = [
  { value: 1, text: 'Item 1' },
  { value: 2, text: 'Item 2' },
  { value: 3, text: 'Item 3' },
  { value: 4, text: 'Item 4' },
  { value: 5, text: 'Item 5' },
  { value: 6, text: 'Item 6' },
  { value: 7, text: 'Item 7' },
  { value: 8, text: 'Item 8' },
  { value: 9, text: 'Item 9' },
  { value: 10, text: 'Item 10' },
  { value: 11, text: 'Item 11' },
  { value: 12, text: 'Item 12' },
  { value: 13, text: 'Item 13' },
  { value: 14, text: 'Item 14' },
  { value: 15, text: 'Item 15' },
];

export const Regular = (): React.ReactNode => <InputSelect options={options} placeholder="Select" />;

export const HasValue = (): React.ReactNode => (
  <InputSelect options={options} value="Selected value" placeholder="Select" />
);

export const Multiple = (): React.ReactNode => <InputSelect mode="multiple" options={options} placeholder="Select" />;

export const MultipleHasValue = (): React.ReactNode => (
  <InputSelect mode="multiple" options={options} value={['Selected value']} placeholder="Select" />
);

export const OptionsAsChildren = (): React.ReactNode => (
  <InputSelect placeholder="Select">
    <InputSelect.Option value="2" text="a">
      aaa
    </InputSelect.Option>
    <InputSelect.Option value="3" text="c">
      bb
    </InputSelect.Option>
  </InputSelect>
);
