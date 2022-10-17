import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';

const bem = makeBEM('ebs-checkbox');

export type CheckAlign = 'left' | 'right';

export type CheckboxValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
        className={cn(bem('wrapper', [checkAlign], { indeterminate, disabled, 'has-text': text }), className)}
        {...props}
      >
        <input
          ref={ref}
          name={name}
          type="checkbox"
          className={bem('input')}
          value={value}
          onChange={onChangeHandler}
          {...(checked !== undefined ? { checked } : {})}
          disabled={disabled}
        />

        <div className={bem()}>
          <Icon type="indeterminate" model="bold" className={bem('indeterminate')} />

          <Icon type="check" model="bold" className={bem('check')} />
        </div>

        {text && <div className={bem('text')}>{text}</div>}
      </div>
    );
  },
);
