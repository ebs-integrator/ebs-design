import * as React from 'react';
import { Template } from 'components/storybook';

import { InputPhone, InputPhoneProps } from './InputPhone';
import { exportStory } from 'libs';

export default {
  title: exportStory('InputPhone', 'form'),
  component: InputPhone,
  argTypes: {
    label: { control: 'text' },
    extra: { control: 'text' },
  },
};

export const Regular: React.FC<React.PropsWithChildren<InputPhoneProps>> & { args: InputPhoneProps } = ({
  children,
  ...props
}) => {
  const [value, setValue] = React.useState('');

  return (
    <Template>
      <InputPhone value={value} onChange={setValue} {...props} />
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
