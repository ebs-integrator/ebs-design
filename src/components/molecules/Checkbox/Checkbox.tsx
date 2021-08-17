import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';

export type CheckAlign = 'left' | 'right';

export type CheckboxValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  className?: string;
  checkAlign?: CheckAlign;
  name?: string;
  value?: CheckboxValue;
  text?: React.ReactNode;
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, checkAlign = 'left', name, value, indeterminate, checked, onChange, text, disabled, ...props },
    ref,
  ) => {
    const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      if (onChange !== undefined) {
        onChange(target.checked);
      }
    };

    return (
      <div
        className={cn(`ebs-checkbox__wrapper`, `ebs-checkbox--${checkAlign}`, className, {
          'has-text': text,
          indeterminate: indeterminate,
          disabled: disabled,
        })}
        {...props}
      >
        <input
          ref={ref}
          name={name}
          type="checkbox"
          className="ebs-checkbox__input"
          value={value}
          onChange={onChangeHandler}
          {...(checked !== undefined ? { checked } : {})}
          disabled={disabled}
        />

        <div className="ebs-checkbox">
          <Icon type="indeterminate" model="bold" className="ebs-checkbox__indeterminate" />

          <Icon type="check" model="bold" className="ebs-checkbox__check" />
        </div>

        {text && <div className="ebs-checkbox__text">{text}</div>}
      </div>
    );
  },
);
