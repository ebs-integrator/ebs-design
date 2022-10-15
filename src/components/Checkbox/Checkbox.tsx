import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-checkbox');

type CheckboxAlign = 'left' | 'right';
type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxValue = string | number;

export interface CheckboxProps extends Omit<Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'> {
  name?: string;
  text?: React.ReactNode;
  value?: CheckboxValue;
  size?: CheckboxSize;
  checked?: boolean;
  indeterminate?: boolean;
  checkAlign?: CheckboxAlign;
  disabled?: boolean;
  invalid?: boolean;
  onChange?: (value: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      value,
      text,
      name,
      indeterminate,
      checkAlign = 'left',
      checked,
      invalid = false,
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
    const [isChecked, setIsChecked] = React.useState(checked);

    const labelDataAttributes = {
      'data-checked': isChecked,
      ...(invalid && { 'data-invalid': true }),
      ...(disabled && { 'data-disabled': true }),
      ...(isFocused && { 'data-focused': true }),
      ...(indeterminate && !checked && { 'data-indeterminate': true }),
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(target.checked);
      onChange && onChange(target.checked);
    };

    return (
      <label className={cn(bem(), className)} data-checked={isChecked}>
        <input
          ref={ref}
          type="checkbox"
          className={bem('input')}
          id={id}
          value={value}
          name={name}
          defaultChecked={isChecked}
          disabled={disabled}
          aria-checked={isChecked}
          aria-hidden
          onChange={handleChange}
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
