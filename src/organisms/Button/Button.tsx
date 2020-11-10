import * as React from 'react';
import { LoaderSpinner } from 'atoms';

import './Button.scss';

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
  form?: string;
  icon?: string;
}

export const Button: React.FC<Props> = ({
  submit = false,
  onClick,
  prefix,
  className = '',
  size = 'large',
  type = 'ghost',
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
      className={`ebs-button-wrapper ebs-button-size-${size} ebs-button-type-${props.disabled ? 'disabled' : type} ${
        prefix !== undefined ? 'has-prefix' : ''
      } ${className}`}
      onClick={onClickHandler}
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
        className="ebs-button"
        disabled={props.disabled || loading}
        {...props}
      />

      {pulse ? <div className="ebs-button-pulse" /> : null}
    </div>
  );
};

export const ButtonGroup: React.FC<{ className?: string }> = ({ children, className = '' }) => (
  <div className={`ebs-button-group ${className}`}>{children}</div>
);
