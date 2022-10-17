import * as React from 'react';
import cn from 'classnames';
import InputNumber, { InputNumberProps } from 'rc-input-number';

import { makeBEM } from 'libs';
import { Extra, Icon, Label } from 'components';

const bem = makeBEM('ebs-stepper');

export type AlignType = 'left' | 'right';

export interface StepperProps extends Omit<InputNumberProps, 'onChange'> {
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
  onChange?: (value: number | string | undefined | null) => void;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Stepper = ({
  className,
  align = 'right',
  hasError,
  label,
  extra,
  disabled,
  value,
  ...props
}: StepperProps) => (
  <div className={cn(bem('wrapper', { 'has-error': hasError, active: value, disabled }), className, align)}>
    <Label text={label} disabled={disabled} />

    <InputNumber
      className={bem()}
      disabled={disabled}
      value={value}
      {...props}
      upHandler={<Icon type="arrow-top" model="bold" />}
      downHandler={<Icon type="arrow-bottom" model="bold" />}
    />

    <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
  </div>
);
