import React from 'react';

import { RadioContext, RadioContextType, radioContextDefault } from './contexts';
import { RadioChangeHandler } from './types';

export interface RadioGroupProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  onChange?: RadioChangeHandler;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [state, setState] = React.useState({ value: '' });

  const contextValue: RadioContextType = {
    ...radioContextDefault,
    name: props.name || '',
    value: state.value,
    disabled: !!props.disabled,
    onChange: (value) => {
      setState({ value });
      props.onChange && props.onChange(value);
    },
  };

  React.useEffect(() => {
    if (props.defaultValue !== undefined) contextValue.onChange(props.defaultValue);
  }, []);

  React.useEffect(() => {
    if (props.value !== undefined && props.value !== state.value) contextValue.onChange(props.value);
  }, [props.value]);

  return <RadioContext.Provider value={contextValue}>{props.children}</RadioContext.Provider>;
};
