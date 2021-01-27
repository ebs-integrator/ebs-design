import * as React from 'react';
import cn from 'classnames';
import { Extra, Label, LoaderSpinner } from 'components/atoms';

export type InputSize = 'small' | 'medium' | 'large';
export type InputStyleType = 'white' | 'grey';
export type InputType = 'text' | 'email' | 'password';

export interface InputProps {
  styleType?: InputStyleType;
  type?: InputType;
  onClick?: (e: any) => void;
  onChange?: (value: string) => void;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  name?: string;
  value?: string | number | null | undefined;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  width?: number | string;
  autoFocus?: boolean;
  className?: string;
  containerClass?: string;
  size?: InputSize;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      styleType = 'white',
      type = 'text',
      size = 'medium',
      onClick,
      onChange,
      hasError,
      label,
      extra,
      name,
      value,
      prefix,
      suffix,
      loading,
      disabled,
      width,
      autoFocus,
      className,
      containerClass,
      ...props
    },
    ref,
  ) => {
    const onClickHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      if (onChange !== undefined) {
        onChange(target.value);
      }
    };

    const onClickPrefixHandler = (): void => {
      if (!loading && props.onClickPrefix !== undefined) {
        props.onClickPrefix();
      }
    };

    const onClickSuffixHandler = (): void => {
      if (!loading && props.onClickSuffix !== undefined) {
        props.onClickSuffix();
      }
    };

    return (
      <div className={cn(`ebs-input__container`, containerClass)}>
        <Label text={label} disabled={disabled} />

        <div
          className={cn(
            `ebs-input__wrapper`,
            `ebs-input__wrapper--${value ? `active` : `unactive`}`,
            `ebs-input__type--${type}`,
            `ebs-input-style-${styleType}`,
            className,
            {
              'ebs-input__empty': value === '',
              'has-prefix': prefix,
              'has-suffix': suffix,
              'has-error': hasError,
              disabled: disabled,
            },
          )}
        >
          {loading || prefix ? (
            <div
              className={cn(`ebs-input__prefix`, !loading && props.onClickPrefix ? `clickable` : `not-clickable`)}
              onClick={onClickPrefixHandler}
            >
              {loading ? <LoaderSpinner size="small" /> : prefix}
            </div>
          ) : null}

          {suffix ? (
            <div
              className={cn(`ebs-input__suffix`, !loading && props.onClickSuffix ? `clickable` : `not-clickable`)}
              onClick={onClickSuffixHandler}
            >
              {loading && !prefix ? <LoaderSpinner size="small" /> : suffix}
            </div>
          ) : null}

          <div className="ebs-input__container">
            <input
              ref={ref}
              name={name}
              type={type}
              autoFocus={autoFocus}
              className={cn('ebs-input', `ebs-input--${size}`)}
              value={value || ''}
              onChange={onClickHandler}
              placeholder={props.placeholder}
              disabled={disabled || loading}
              onClick={onClick}
              style={{ minWidth: width }}
            />
          </div>
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
