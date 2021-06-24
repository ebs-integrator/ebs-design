import React from 'react';

import { RadioProps } from './Radio';
import { RadioContext, RadioContextType } from './contexts';

export interface UseRadioResult {
  context: RadioContextType;
  props: RadioProps;
  inputProps: React.HTMLProps<HTMLInputElement>;
}

export const useRadio = (radioProps: RadioProps): UseRadioResult => {
  const props = { ...radioProps };
  const context = React.useContext(RadioContext);

  props.disabled = !!(context.disabled || props.disabled);

  React.useEffect(() => {
    if (props.defaultChecked) context.onChange(props.value);
  }, []);

  if (props.checked === undefined) props.checked = !!context.value && context.value === props.value;

  return {
    context,
    props,
    inputProps: {
      ref: props.inputRef,
      type: 'radio',
      checked: props.checked,
      disabled: props.disabled,
      name: context.name,
      onChange: (e) =>
        (e.target as HTMLInputElement).checked
          ? context.onChange(props.value)
          : context.value === props.value && context.onChange(''),
    },
  };
};
