import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon, Loader } from 'components';

const bem = makeBEM('ebs-button');

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
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={cn(
        bem(null, [size, disabled ? 'disabled' : type, 'wrapper'], { block, prefix, icon, round }),
        className,
      )}
      onClick={!disabled ? onClick : undefined}
      role="presentation"
    >
      {prefix ? (
        <div className={bem('prefix')}>{loading ? <Loader.Spinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={bem('loading', [type])}>
          <Loader.Spinner size="small" />
        </div>
      ) : null}

      <button
        type={submit ? 'submit' : 'button'}
        className={cn(bem(null, { 'is-icon': icon }), buttonClass)}
        disabled={disabled || loading}
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

export const ButtonGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={cn(bem('group'), className)} {...props}>
    {children}
  </div>
);
