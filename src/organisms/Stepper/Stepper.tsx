import * as React from 'react';
import InputNumber from 'rc-input-number';
import { Extra, Label, Icon } from 'atoms/';

export type AlignType = 'left' | 'right';

interface Props {
  className?: string;
  align?: AlignType;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;

  // InputNumberProps part
  formatter?: (value: number | string | undefined) => string;
  max?: number;
  min?: number;
  parser?: (displayValue: string | undefined) => number | string;
  precision?: number;
  decimalSeparator?: string;
  step?: number | string;
  value?: number;
  onChange?: (value: number | string | undefined) => void;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Stepper: React.FC<Props> = ({
  className = '',
  align = 'right',
  hasError,
  label,
  extra,
  disabled,
  value,
  ...props
}) => (
  <div
    className={`ebs-stepper-wrapper${disabled ? ' disabled' : ''}${hasError ? ' has-error' : ''}${
      value ? ' active' : ''
    } ${align} ${className}`}
  >
    <Label text={label} disabled={disabled} />

    <InputNumber
      className="ebs-stepper"
      disabled={disabled}
      value={value}
      upHandler={<Icon type="arrow-top" />}
      downHandler={<Icon type="arrow-bottom" />}
      {...props}
    />

    <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
  </div>
);
