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
}

export const Radio: React.FC<RadioProps> = (myProps) => {
  const {
    inputProps,
    props: { disabled, checked },
  } = useRadio(myProps);

  return (
    <label className={clsModifiers('ebs-radio__wrapper', { disabled })}>
      <span className={clsModifiers('ebs-radio-checkbox__wrapper', { disabled })}>
        <input {...inputProps} />
        <span className={clsModifiers('ebs-radio-checkbox__mark', { disabled, checked })}>
          <span className={clsModifiers('ebs-radio-checkbox__fill', { disabled, checked })}></span>
        </span>
      </span>
      <span className={clsModifiers('ebs-radio__children', { disabled })}>{myProps.children}</span>
    </label>
  );
};

export default Object.assign(Radio, {
  Group: RadioGroup,
  Button: RadioButton,
  ButtonContainer: RadioButtonContainer,
  useRadio,
});
