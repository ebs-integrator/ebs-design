import React from 'react';

import { clsModifiers } from 'libs';

import { RadioGroup } from './RadioGroup';
import { RadioButton, RadioButtonContainer } from './RadioButton';
import { useRadio } from './useRadio';

export interface RadioProps {
  value: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  children?: React.ReactNode;
}

export const Radio = (radioProps: RadioProps): JSX.Element => {
  const {
    inputProps,
    props: { disabled, checked },
  } = useRadio(radioProps);

  return (
    <label className={clsModifiers('ebs-radio__wrapper', { disabled })}>
      <span className={clsModifiers('ebs-radio-checkbox__wrapper', { disabled })}>
        <input {...inputProps} />
        <span className={clsModifiers('ebs-radio-checkbox__mark', { disabled, checked })}>
          <span className={clsModifiers('ebs-radio-checkbox__fill', { disabled, checked })}></span>
        </span>
      </span>
      <span className={clsModifiers('ebs-radio__children', { disabled })}>{radioProps.children}</span>
    </label>
  );
};

Radio.Button = RadioButton;
Radio.ButtonContainer = RadioButtonContainer;
Radio.Group = RadioGroup;
