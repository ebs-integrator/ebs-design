import * as React from 'react';
import { Icon } from 'atoms';

export type CheckAlign = 'left' | 'right';

export type CheckboxValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  checkAlign?: CheckAlign;
  name?: string;
  value?: CheckboxValue;
  indeterminate?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  text?: React.ReactNode;
  disabled?: boolean;
}

export const Checkbox: React.FC<Props> = ({
  className = '',
  checkAlign = 'left',
  name,
  value,
  indeterminate,
  checked,
  onChange,
  text,
  disabled,
}) => {
  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange !== undefined) {
      onChange(target.checked);
    }
  };

  return (
    <div
      className={`ebs-checkbox-wrapper ebs-checkbox-align-${checkAlign}${text ? ' has-text' : ''}${
        disabled ? ' disabled' : ''
      }${indeterminate ? ' indeterminate' : ''} ${className}`}
    >
      <input
        name={name}
        type="checkbox"
        className="ebs-checkbox-input"
        value={value}
        onChange={onChangeHandler}
        {...(checked !== undefined ? { checked } : {})}
        disabled={disabled}
      />

      <div className="ebs-checkbox">
        <Icon type="indeterminate" className="ebs-checkbox-indeterminate" />

        <Icon type="check-2" className="ebs-checkbox-check" />
      </div>

      {text && <div className="ebs-checkbox-text">{text}</div>}
    </div>
  );
};
