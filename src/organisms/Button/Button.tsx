import * as React from 'react';
import { LoaderSpinner } from 'atoms';

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
  className = '',
  buttonClass = '',
  size = 'large',
  type = 'ghost',
  loading,
  block,
  ...props
}) => {
  return (
    <div
      className={`ebs-button-wrapper ebs-button-size-${size} ebs-button-type-${props.disabled ? 'disabled' : type}${
        prefix !== undefined ? ' has-prefix' : ''
      }${block ? ' block' : ''} ${className}`}
      onClick={onClick}
      role="presentation"
    >
      {prefix ? (
        <div className="ebs-button-prefix">{loading ? <LoaderSpinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={`ebs-button-loading ebs-button-loading-${type}`}>
          <LoaderSpinner size="small" />
        </div>
      ) : null}

      <button
        type={submit ? 'submit' : 'button'}
        className={`ebs-button ${buttonClass}`}
        disabled={props.disabled || loading}
        {...props}
      />
    </div>
  );
};

export const ButtonGroup: React.FC<{ className?: string }> = ({ children, className = '' }) => (
  <div className={`ebs-button-group ${className}`}>{children}</div>
);
