import * as React from 'react';
import cn from 'classnames';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import { Extra, Label } from 'components/atoms';
import { SizeType } from 'types';

export interface Props extends PhoneInputProps {
  className?: string;
  size?: SizeType;
  dropdownClass?: string;
  disabled?: boolean;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  isClearable?: boolean;
}

export const InputPhone: React.FC<Props> = ({
  className,
  dropdownClass,
  size = 'medium',
  placeholder = '',
  disabled,
  hasError,
  value,
  onChange,
  label,
  extra,
  isClearable,
  ...props
}) => (
  <div className="ebs-input__phone-wrapper">
    <Label text={label} disabled={disabled} />

    <div className={cn('ebs-input__phone-wrapper__container', `ebs-input__phone--${size}`)}>
      <PhoneInput
        value={value}
        onChange={onChange}
        containerClass={cn(`ebs-input__phone`, className, {
          'has-error': hasError,
          active: value,
          disabled: disabled,
        })}
        dropdownClass={cn(`ebs-input__phone-dropdown`, dropdownClass)}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      {isClearable && !!value?.length && (
        <div
          className="ebs-input__phone__clear"
          onClick={() => onChange && onChange('', {}, {} as React.ChangeEvent<HTMLInputElement>, '')}
        >
          &#215;
        </div>
      )}
    </div>

    <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
  </div>
);
