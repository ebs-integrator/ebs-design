import * as React from 'react';
import cn from 'classnames';
import { Extra, Label, Button, Icon } from 'components/atoms';
import { Loader } from 'components/molecules';

export type InputSize = 'small' | 'medium' | 'large';
export type InputStyleType = 'white' | 'grey';
export type InputType = 'text' | 'number' | 'email' | 'password';

export interface InputProps {
  styleType?: InputStyleType;
  type?: InputType;
  onClick?: (e: any) => void;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
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
  isClearable?: boolean;
  size?: InputSize;
  min?: string | number;
  max?: string | number;
  pattern?: string;
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
      min,
      max,
      pattern,
      isClearable,
      ...props
    },
    ref,
  ) => {
    // eslint-disable-next-line eqeqeq
    const hasValue = React.useMemo(() => value != undefined && value.toString().length, [value]);

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
            `ebs-input__wrapper--${hasValue ? `active` : `unactive`}`,
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
              {loading ? <Loader.Spinner size="small" /> : prefix}
            </div>
          ) : null}

          {suffix ? (
            <div
              className={cn(`ebs-input__suffix`, !loading && props.onClickSuffix ? `clickable` : `not-clickable`)}
              onClick={onClickSuffixHandler}
            >
              {loading && !prefix ? <Loader.Spinner size="small" /> : suffix}
            </div>
          ) : null}

          <div className="ebs-input__container">
            <input
              ref={ref}
              min={min}
              max={max}
              pattern={pattern}
              name={name}
              type={type}
              autoFocus={autoFocus}
              className={cn('ebs-input', `ebs-input--${size}`)}
              value={value || ''}
              placeholder={props.placeholder}
              disabled={disabled || loading}
              onClick={onClick}
              onKeyDown={onKeyDown}
              onChange={onClickHandler}
              style={{ minWidth: width }}
            />

            {hasValue && isClearable ? (
              <div className="ebs-input__clear">
                <Button size="small" type="primary" onClick={onChange && (() => onChange(''))}>
                  <Icon type="close" model="bold" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
