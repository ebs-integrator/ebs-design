import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon, Loader } from 'components';
import { modelType } from 'components/Icon/Icon';

const bem = makeBEM('ebs-button');

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'primary' | 'fill' | 'ghost' | 'text' | 'dark' | 'light' | 'danger';

export interface ButtonProps extends Omit<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, 'prefix'> {
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  loading?: boolean;
  submit?: boolean;
  icon?: string | React.ReactNode;
  iconModel?: modelType;
  full?: boolean;
  rounded?: boolean;
}

const ButtonSpinner = ({ type, absolute = false }: { type: ButtonType; absolute?: boolean }) => (
  <Loader.Spinner size="small" className={bem('loader', [type], { absolute })} />
);

export const Button = ({
  submit = false,
  onClick,
  prefix,
  className,
  size = 'medium',
  type = 'primary',
  icon,
  iconModel,
  loading,
  full,
  rounded,
  children,
  disabled,
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
      data-has-icon={!!icon}
      {...props}
    >
      {icon && !showSpinner && (
        <Icon {...(typeof icon === 'string' ? { type: icon, model: iconModel || undefined } : { component: icon })} />
      )}

      {showSpinner && <ButtonSpinner type={type} absolute />}

      {prefix && !icon && (
        <span className={bem('prefix')}>{loading && !disabled ? <ButtonSpinner type={type} /> : prefix}</span>
      )}

      {children && !icon && (showSpinner ? <span className={bem('children-transparent')}>{children}</span> : children)}
    </button>
  );
};
