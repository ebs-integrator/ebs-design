import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-chip');

type ChipType = 'filled' | 'outlined';
type ChipSize = 'small' | 'medium' | 'large';
type ChipColor = 'default' | 'primary';

export interface ChipProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onChange'> {
  type?: ChipType;
  size?: ChipSize;
  color?: ChipColor;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  onChange?: (value: boolean) => void;
}

export const Chip = ({
  className,
  size = 'medium',
  type = 'outlined',
  color = 'primary',
  prefix,
  clickable,
  suffix,
  disabled,
  checked,
  onChange,
  text,
  ...props
}: ChipProps) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(bem(null, [size, color], { clickable, 'has-prefix': prefix, 'has-suffix': suffix }), className)}
      data-type={type}
      onClick={onClickHandler}
      data-checked={checked}
      {...(checked && { 'data-checked': true })}
      {...(disabled && { 'data-disabled': true })}
      {...props}
    >
      {prefix && <div className={bem('prefix')}>{prefix}</div>}

      {text}

      {suffix && <div className={bem('prefix')}>{suffix}</div>}
    </div>
  );
};
