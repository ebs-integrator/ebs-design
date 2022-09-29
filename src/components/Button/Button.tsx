import * as React from 'react';
import cn from 'classnames';
import { Icon, Loader } from 'components';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'text' | 'primary' | 'fill' | 'ghost' | 'dark' | 'light';

export interface ButtonProps extends Omit<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, 'prefix'> {
  onClick?: () => void;
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  loading?: boolean;
  submit?: boolean;
  buttonClass?: string;
  form?: string;
  icon?: any;
  block?: boolean;
  round?: boolean;
}

export const Button = ({
  submit = false,
  onClick,
  prefix,
  className,
  buttonClass,
  size = 'medium',
  type = 'ghost',
  icon,
  loading,
  block,
  round,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={cn(
        `ebs-button__wrapper`,
        `ebs-button--${size}`,
        `ebs-button--${props.disabled ? 'disabled' : type}`,
        className,
        {
          'ebs-button--block': block,
          'ebs-button--prefix': prefix,
          'ebs-button--icon': icon,
          'ebs-button--round': round,
        },
      )}
      onClick={!props.disabled ? onClick : undefined}
      role="presentation"
    >
      {prefix ? (
        <div className="ebs-button__prefix">{loading ? <Loader.Spinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={cn(`ebs-button__loading`, `ebs-button__loading-${type}`)}>
          <Loader.Spinner size="small" />
        </div>
      ) : null}

      <button
        type={submit ? 'submit' : 'button'}
        className={cn(`ebs-button`, buttonClass, { 'ebs-button--is-icon': icon })}
        disabled={props.disabled || loading}
        {...props}
      >
        {icon ? (
          <Icon
            component={typeof icon !== 'string' ? icon : undefined}
            type={typeof icon === 'string' ? icon : undefined}
          />
        ) : (
          props.children
        )}
      </button>
    </div>
  );
};

export const ButtonGroup = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(`ebs-button__group`, className)} {...props}>
    {children}
  </div>
);
