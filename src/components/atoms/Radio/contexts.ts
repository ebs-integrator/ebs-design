import React from 'react';

import { ButtonProps, ButtonType } from '../Button/Button';

import { RadioChangeHandler } from './types';

export interface RadioContextType {
  name: string;
  value: string;
  disabled: boolean;
  onChange: RadioChangeHandler;
}

export const radioContextDefault: RadioContextType = {
  name: '',
  value: '',
  disabled: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
};
export const RadioContext = React.createContext<RadioContextType>(radioContextDefault);

export interface RadioButtonContextType extends ButtonProps {
  checkedType?: ButtonType;
}

export const radioButtonContextDefault: RadioButtonContextType = { checkedType: 'primary' };
export const RadioButtonContext = React.createContext<RadioButtonContextType>(radioButtonContextDefault);
