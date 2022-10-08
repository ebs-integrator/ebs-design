import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-radio');

type RadioAlign = 'left' | 'right';
type RadioSize = 'small' | 'medium' | 'large';
type RadioValue = string | number;

export interface RadioProps extends Omit<Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'> {
  name?: string;
  value: RadioValue;
  size?: RadioSize;
  checked?: boolean;
  radioAlign?: RadioAlign;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: RadioValue) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, React.PropsWithChildren<RadioProps>>(
  (
    {
      className,
      value,
      radioAlign = 'left',
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
    };

    return (
      <label className={cn(bem(), className)} data-checked={checked}>
        <input
          ref={ref}
          type="radio"
          className={bem('input')}
          id={id}
          value={value}
          defaultChecked={checked}
          disabled={disabled}
          aria-checked={checked}
          aria-hidden
          onClick={() => onChange && onChange(value)}
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
