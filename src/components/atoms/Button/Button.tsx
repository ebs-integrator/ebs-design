import * as React from 'react';
import cn from 'classnames';
import { Icon, LoaderSpinner } from 'components/atoms';

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
  icon?: string;
  block?: boolean;
  stopPropagation?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  submit = false,
  onClick,
  prefix,
  className,
  buttonClass,
  size = 'medium',
  type = 'ghost',
  stopPropagation = false,
  icon,
  loading,
  block,
  ...props
}) => {
  const onClickHandler = React.useCallback(
    (e) => {
      if (stopPropagation) {
        e.stopPropagation();
      }

      if (onClick) {
        onClick();
      }
    },
    [onClick],
  );

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
      onClick={onClickHandler}
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
