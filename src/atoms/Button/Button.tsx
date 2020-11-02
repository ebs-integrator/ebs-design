import * as React from 'react';
import { LoaderSpinner } from 'atoms/Loader/LoaderSpinner';

import './Button.scss';

export type ButtonSize = 'small' | 'medium' | 'large';

interface Props {
  onClick?: () => void;
  prefix?: React.ReactNode;
  size?: ButtonSize;
  type?: 'text' | 'primary' | 'fill' | 'ghost';
  loading?: boolean;
  submit?: boolean;
  disabled?: boolean;
  className?: string;
  form?: string;
  icon?: string;
}

export const Button: React.FC<Props> = ({
  submit = false,
  onClick,
  prefix,
  className = '',
  size = 'large',
  type = 'text',
  loading,
  ...props
}) => {
  const [pulse, setPulse] = React.useState<boolean>(false);
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return (): void => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const onClickHandler = (): void => {
    setPulse(true);

    timer.current = setTimeout(() => {
      setPulse(false);
    }, 1000);

    if (onClick !== undefined) {
      return onClick();
    }
  };

  return (
    <div
      className={`zh-button-wrapper zh-button-size-${size} zh-button-type-${props.disabled ? 'disabled' : type} ${
        prefix !== undefined ? 'has-prefix' : ''
      } ${className}`}
      onClick={onClickHandler}
      role="presentation"
    >
      {prefix ? (
        <div className="zh-button-prefix">{loading ? <LoaderSpinner size="small" /> : prefix}</div>
      ) : loading ? (
        <div className={`zh-button-loading zh-button-loading-${type}`}>
          <LoaderSpinner size="small" />
        </div>
      ) : null}

      <button
        type={submit ? 'submit' : 'button'}
        className="zh-button"
        disabled={props.disabled || loading}
        form={props.form}
      >
        {props.children}
      </button>

      {pulse ? <div className="zh-button-pulse" /> : null}
    </div>
  );
};

export const ButtonGroup: React.FC<{ className?: string }> = ({ children, className = '' }) => (
  <div className={`zh-button-group ${className}`}>{children}</div>
);
