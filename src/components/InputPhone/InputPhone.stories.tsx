import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { InputPhone } from './InputPhone';

export default {
  title: exportStory('InputPhone', 'form'),
  component: InputPhone,
  argTypes: {
    label: { control: 'text' },
    extra: { control: 'text' },
  },
} as ComponentMeta<typeof InputPhone>;

export const Regular: ComponentStory<typeof InputPhone> = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <Template>
      <InputPhone value={value} onChange={setValue} {...args} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  country: 'md',
  isClearable: true,
  value: '',
  onlyCountries: [],
  preferredCountries: [],
  excludeCountries: [],
  placeholder: 'Phone field',
  searchPlaceholder: '',
  searchNotFound: 'Not found',
  disabled: undefined,
  autoFormat: undefined,
  enableAreaCodes: undefined,
  enableTerritories: undefined,
  disableCountryCode: undefined,
  disableDropdown: undefined,
  enableLongNumbers: undefined,
  countryCodeEditable: undefined,
  enableSearch: undefined,
  disableSearchIcon: undefined,
  regions: undefined,
  inputProps: {},
  localization: {},
  masks: {},
  areaCodes: {},
  preserveOrder: [],
  defaultMask: undefined,
  alwaysDefaultMask: undefined,
  prefix: undefined,
  copyNumbersOnly: undefined,
  renderStringAsFlag: undefined,
  autocompleteSearch: undefined,
  jumpCursorToEnd: undefined,
  priority: undefined,
  enableAreaCodeStretch: undefined,
  enableClickOutside: undefined,
  showDropdown: undefined,
  defaultErrorMessage: undefined,
  specialLabel: undefined,
  disableInitialCountryGuess: undefined,
  disableCountryGuess: undefined,
};
