import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';
import { Loader } from 'components/Loader/Loader';

const bem = makeBEM('ebs-switch');

type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps extends Omit<Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>, 'size'> {
  checked?: boolean;
  disabled?: boolean;
  size?: SwitchSize;
  name?: string;
  text?: string;
  error?: boolean;
  loading?: boolean;
  onChange?: (value: boolean) => void;
}

export const Switch = ({
  className,
  disabled,
  name,
  checked = false,
  loading = false,
  size = 'medium',
  text,
  error,
  onChange,
  ...props
}: SwitchProps) => {
  const id = React.useMemo(() => makeid(), []);

  const [isChecked, setIsChecked] = React.useState(checked);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !loading) {
      setIsChecked(checked);
      onChange && onChange(checked);
    }
  };

  const sliderDataAttributes = {
    'data-checked': isChecked,
    ...(disabled && { 'data-disabled': true }),
    ...(isFocused && { 'data-focused': true }),
    ...(isHovered && { 'data-hovered': true }),
    ...(isActive && { 'data-active': true }),
    ...(loading && { 'data-loading': true }),
    ...(error && { 'data-error': true }),
  };

  return (
    <label
      className={cn(bem(null, [isChecked ? 'checked' : 'unchecked', size]), className)}
      data-checked={isChecked}
      onMouseEnter={() => setIsHovered(!disabled)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(!disabled)}
      onMouseUp={() => setIsActive(false)}
      {...(disabled && { 'data-disabled': true })}
      {...(loading && { 'data-loading': true })}
    >
      <input
        type="checkbox"
        className={bem('input', [size])}
        id={id}
        name={name || id}
        checked={isChecked}
        aria-checked={isChecked}
        onFocus={() => setIsFocused(!disabled)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        {...props}
      />
      <div className={bem('slider', [size])} {...sliderDataAttributes}>
        {loading && !disabled && <Loader className={bem('loader')} size="small" loading />}
      </div>

      {text && <span className={bem('text')}>{text}</span>}
    </label>
  );
};
