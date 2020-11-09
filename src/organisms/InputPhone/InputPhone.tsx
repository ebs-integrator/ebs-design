import * as React from 'react';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import { Extra, Label } from 'atoms';

import './InputPhone.scss';

export interface Props extends PhoneInputProps {
  className?: string;
  dropdownClass?: string;
  disabled?: boolean;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
}

export const InputPhone: React.FC<Props> = ({
  className = '',
  dropdownClass = '',
  disabled,
  hasError,
  value,
  onChange,
  label,
  extra,
  ...props
}) => (
  <div className="ebs-input-phone-wrapper">
    <Label text={label} disabled={disabled} />

    <PhoneInput
      value={value}
      onChange={onChange}
      containerClass={`ebs-input-phone${disabled ? ' disabled' : ''}${value ? ' active' : ''}${
        hasError ? ' has-error' : ''
      } ${className}`}
      dropdownClass={`ebs-input-phone-dropdown ${dropdownClass}`}
      disabled={disabled}
      {...props}
    />

    <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
  </div>
);
