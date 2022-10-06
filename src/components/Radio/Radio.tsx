import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-radio');

export type RadioAlign = 'left' | 'right';
export type RadioSize = 'small' | 'medium' | 'large';

type RadioValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: RadioValue;
  disabled?: boolean;
}

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'size'> {
  size?: RadioSize;
  name?: string;
  value?: RadioValue;
  checked?: boolean;
  radioAlign?: RadioAlign;
  disabled?: boolean;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, React.PropsWithChildren<RadioProps>>(
  (
    {
      className,
      value,
      name,
      radioAlign = 'left',
      checked = false,
      error = false,
      size = 'medium',
      disabled,
      children,
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
    };

    return (
      <label className={cn(bem(), className)} data-checked={checked}>
        <input
          ref={ref}
          type="radio"
          className={bem('input')}
          id={id}
          name={name || id}
          value={value}
          defaultChecked={checked}
          disabled={disabled}
          aria-checked={checked}
          aria-hidden
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <span className={bem('label', [size, `radio-align-${radioAlign}`])} {...labelDataAttributes}>
          {children}
        </span>
      </label>
    );
  },
);
