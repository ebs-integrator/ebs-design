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

export const regular = (): React.ReactNode => <InputSelect options={options} placeholder="Select" />;

export const hasValue = (): React.ReactNode => (
  <InputSelect options={options} value="Selected value" placeholder="Select" />
);

export const multiple = (): React.ReactNode => <InputSelect mode="multiple" options={options} placeholder="Select" />;

export const multipleHasValue = (): React.ReactNode => (
  <InputSelect mode="multiple" options={options} value="Selected value" placeholder="Select" />
);
