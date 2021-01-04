import * as React from 'react';
import { InputSelect } from './InputSelect';

export default {
  title: 'InputSelect',
  component: InputSelect,
};

const options = [
  { value: 1, text: 'Item 1' },
  { value: 2, text: 'Item 2' },
  { value: 3, text: 'Item 3' },
  { value: 4, text: 'Item 4' },
  { value: 5, text: 'Item 5' },
];

export const Regular = (): React.ReactNode => <InputSelect options={options} placeholder="Select" />;

export const HasValue = (): React.ReactNode => (
  <InputSelect options={options} value="Selected value" placeholder="Select" />
);

export const Multiple = (): React.ReactNode => <InputSelect mode="multiple" options={options} placeholder="Select" />;

export const MultipleHasValue = (): React.ReactNode => (
  <InputSelect mode="multiple" options={options} value="Selected value" placeholder="Select" />
);
