import * as React from 'react';
import cn from 'classnames';
import { Icon, LoaderSpinner } from 'components/atoms';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonType = 'text' | 'primary' | 'fill' | 'ghost';

interface Props {
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
  icon?: string;
  block?: boolean;
}

export const Button: React.FC<Props> = ({
  submit = false,
  onClick,
  prefix,
  className,
  buttonClass,
  size = 'large',
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
        `ebs-button__size-${size}`,
        `ebs-button__type-${props.disabled ? 'disabled' : type}`,
        className,
        {
          block: block,
          'has-prefix': prefix,
        },
      )}
      onClick={onClick}
      role="presentation"
    >
      {prefix ? (
        <div className="ebs-button__prefix">{loading ? <LoaderSpinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={cn(`ebs-button__loading`, `ebs-button__loading-${type}`)}>
          <LoaderSpinner size="small" />
        </div>
      ) : null}

      <button
        type={submit ? 'submit' : 'button'}
        className={cn(`ebs-button`, buttonClass, icon && `ebs-button-icon`)}
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
