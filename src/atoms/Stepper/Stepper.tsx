import * as React from 'react';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import { Icon } from 'atoms';

import './Stepper.scss';

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
    {label && <div className="ebs-stepper-label">{label}</div>}

    <InputNumber
      className="ebs-stepper"
      disabled={disabled}
      value={value}
      upHandler={<Icon type="arrow-up" />}
      downHandler={<Icon type="arrow-down" />}
      {...props}
    />

    {extra && <div className="ebs-stepper-extra">{extra}</div>}
  </div>
);
