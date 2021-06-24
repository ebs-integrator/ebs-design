import React from 'react';

import { Button, ButtonGroup, ButtonProps } from '../Button/Button';

import { RadioButtonContext, radioButtonContextDefault, RadioButtonContextType } from './contexts';
import { RadioProps } from './Radio';
import { useRadio } from './useRadio';
import { withoutRadioProps } from './utils';

export const RadioButton: React.FC<RadioProps & Omit<ButtonProps, 'onClick'>> = ({ ...myProps }) => {
  const { inputProps, props } = useRadio(myProps);
  const { checkedType, ...commonBtnProps } = React.useContext(RadioButtonContext);
  const buttonProps = { ...commonBtnProps, ...withoutRadioProps<ButtonProps>(myProps) };

  const labelRef = React.useRef<HTMLLabelElement>(document.createElement('label'));

  if (props.checked) buttonProps.type = checkedType;

  return (
    <Button {...buttonProps} onClick={() => labelRef.current.click()} disabled={props.disabled}>
      <label ref={labelRef} className="ebs-radio-button__label">
        <input {...inputProps} />
        {myProps.children}
      </label>
    </Button>
  );
};

export const RadioButtonContainer: React.FC<RadioButtonContextType> = ({ children, ...commonBtnProps }) => {
  return (
    <RadioButtonContext.Provider value={{ ...radioButtonContextDefault, ...commonBtnProps }}>
      <ButtonGroup>{children}</ButtonGroup>
    </RadioButtonContext.Provider>
  );
};
