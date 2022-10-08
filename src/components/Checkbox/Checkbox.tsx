import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-checkbox');

type CheckboxAlign = 'left' | 'right';
type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxValue = string | number;

export interface CheckboxProps extends Omit<Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'> {
  name?: string;
  text?: string;
  value?: CheckboxValue;
  size?: CheckboxSize;
  checked?: boolean;
  indeterminate?: boolean;
  checkAlign?: CheckboxAlign;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: CheckboxValue) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      value,
      text,
      indeterminate = false,
      checkAlign = 'left',
      checked = false,
      error = false,
      size = 'medium',
      disabled,
      children,
      onChange,
      ...props
    },
    ref,
  ) => {
    const id = React.useMemo(() => makeid(), []);
    const [isFocused, setIsFocused] = React.useState(false);

    const labelDataAttributes = {
      'data-checked': checked,
      ...(error && { 'data-error': true }),
      ...(disabled && { 'data-disabled': true }),
      ...(isFocused && { 'data-focused': true }),
      ...(indeterminate && !checked && { 'data-indeterminate': true }),
    };

    return (
      <label className={cn(bem(), className)} data-checked={checked}>
        <input
          ref={ref}
          type="checkbox"
          className={bem('input')}
          id={id}
          value={value}
          defaultChecked={checked}
          disabled={disabled}
          aria-checked={checked}
          aria-hidden
          onClick={() => onChange && value && onChange(value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <span className={bem('label', [size, `check-align-${checkAlign}`])} {...labelDataAttributes}>
          {text}
        </span>
      </label>
    );
  },
);
