import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-radio');

type RadioAlign = 'left' | 'right';
type RadioSize = 'small' | 'medium' | 'large';
type RadioValue = string | number;

export interface RadioProps extends Omit<Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'> {
  name?: string;
  text?: React.ReactNode;
  value: RadioValue;
  size?: RadioSize;
  checked?: boolean;
  radioAlign?: RadioAlign;
  disabled?: boolean;
  invalid?: boolean;
  onChange?: (value: RadioValue) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, React.PropsWithChildren<RadioProps>>(
  (
    {
      className,
      value,
      name,
      text,
      size = 'medium',
      radioAlign = 'left',
      checked = false,
      invalid,
      disabled,
      onChange,
      ...props
    },
    ref,
  ) => {
    const id = React.useMemo(() => makeid(), []);
    const [isFocused, setIsFocused] = React.useState(false);

    const labelDataAttributes = {
      'data-checked': checked,
      ...(invalid && { 'data-invalid': true }),
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
          name={name}
          checked={checked}
          disabled={disabled}
          aria-checked={checked}
          aria-hidden
          onChange={() => onChange && onChange(value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <span className={bem('label', [size, `radio-align-${radioAlign}`])} {...labelDataAttributes}>
          {text}
        </span>
      </label>
    );
  },
);
