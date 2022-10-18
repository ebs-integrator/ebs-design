import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { ButtonSpinner } from './ButtonSpinner';

export const bem = makeBEM('ebs-button');

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'primary' | 'fill' | 'ghost' | 'text' | 'dark' | 'light' | 'danger';

export interface ButtonProps extends Omit<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, 'prefix'> {
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  loading?: boolean;
  submit?: boolean;
  full?: boolean;
  rounded?: boolean;
}

export const Button = ({
  submit,
  prefix,
  className,
  size = 'medium',
  type = 'primary',
  loading,
  full,
  rounded,
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const showSpinner = loading && !disabled && !prefix;

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={cn(bem(null, [size, type], { full, rounded }), className)}
      onClick={onClick}
      disabled={disabled}
      data-is-loading={loading}
      {...props}
    >
      {showSpinner && <ButtonSpinner type={type} absolute />}

      {prefix && <span className={bem('prefix')}>{loading && !disabled ? <ButtonSpinner type={type} /> : prefix}</span>}

      {children && (showSpinner ? <span className={bem('children-transparent')}>{children}</span> : children)}
    </button>
  );
};
