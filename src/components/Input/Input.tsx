import * as React from 'react';
import cn from 'classnames';
import { Extra, Label, Loader } from 'components';

export type InputSize = 'small' | 'medium' | 'large';
export type InputStyleType = 'white' | 'grey';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'onChange'> {
  styleType?: InputStyleType;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  loading?: boolean;
  autoFocus?: boolean;
  containerClass?: string;
  size?: InputSize;
  isClearable?: boolean;
  onClick?: (e: any) => void;
  onChange?: (value: string | number) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      styleType = 'white',
      type = 'text',
      size = 'medium',
      onClick,
      onChange,
      onKeyDown,
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
      isClearable,
      onClickPrefix,
      onClickSuffix,
      ...props
    },
    ref,
  ) => {
    // eslint-disable-next-line eqeqeq
    const hasValue = React.useMemo(() => value != undefined && value.toString().length, [value]);

    const onClickHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      if (onChange) {
        onChange(
          props.min !== undefined && parseFloat(props.min as string) >= parseFloat(target.value)
            ? props.min
            : props.max !== undefined && parseFloat(props.max as string) <= parseFloat(target.value)
            ? props.max
            : target.value,
        );
      }
    };

    const onClickPrefixHandler = (): void => {
      if (!loading && onClickPrefix) {
        onClickPrefix();
      }
    };

    const onClickSuffixHandler = (): void => {
      if (!loading && onClickSuffix) {
        onClickSuffix();
      }
    };

    return (
      <div className={cn(`ebs-input__container`, containerClass)}>
        <Label text={label} disabled={disabled} />

        <div
          className={cn(
            `ebs-input__wrapper`,
            `ebs-input__wrapper--${hasValue ? `active` : `unactive`}`,
            `ebs-input__type--${type}`,
            `ebs-input-style--${styleType}`,
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
          {(loading && !suffix) || prefix ? (
            <div
              className={cn(`ebs-input__prefix`, !loading && onClickPrefix ? `clickable` : `not-clickable`)}
              onClick={onClickPrefixHandler}
            >
              {loading && !suffix ? <Loader.Spinner size="small" /> : prefix}
            </div>
          ) : null}

          {(loading && !prefix && suffix) || suffix ? (
            <div
              className={cn(`ebs-input__suffix`, !loading && onClickSuffix ? `clickable` : `not-clickable`)}
              onClick={onClickSuffixHandler}
            >
              {loading && suffix ? <Loader.Spinner size="small" /> : suffix}
            </div>
          ) : null}

          <div className="ebs-input__container">
            <input
              ref={ref}
              name={name}
              type={type}
              value={value}
              autoFocus={autoFocus}
              className={cn('ebs-input', `ebs-input--${size}`)}
              disabled={disabled || loading}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onChange={onClickHandler}
              {...props}
            />

            {hasValue && isClearable ? (
              <div className="ebs-input__clear" onClick={onChange && (() => onChange(''))}>
                &#215;
              </div>
            ) : null}
          </div>
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
