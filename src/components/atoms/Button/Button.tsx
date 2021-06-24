import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';
import { Loader } from 'components/molecules';
import { IconType } from '../Icon/Icon';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'text' | 'primary' | 'fill' | 'ghost' | 'dark' | 'light';

export interface ButtonProps {
  onClick?: () => void;
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  loading?: boolean;
  submit?: boolean;
  disabled?: boolean;
  className?: string;
  buttonClass?: string;
  form?: string;
  icon?: IconType;
  block?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
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
  ...props
}) => {
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
        },
      )}
      onClick={onClick}
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
        {icon ? <Icon type={icon} /> : props.children}
      </button>
    </div>
  );
};

export const ButtonGroup: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn(`ebs-button__group`, className)}>{children}</div>
);
