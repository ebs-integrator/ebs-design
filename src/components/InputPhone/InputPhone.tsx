import * as React from 'react';
import { makeBEM } from 'libs';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';

import cn from 'classnames';
import { Extra, Label } from 'components';
import { SizeType } from 'types';

const bem = makeBEM('ebs-input-phone');

export interface InputPhoneProps extends PhoneInputProps {
  className?: string;
  size?: SizeType;
  dropdownClass?: string;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  isClearable?: boolean;
}

export const InputPhone: React.FC<InputPhoneProps> = ({
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
  <div className={bem('wrapper')}>
    <Label text={label} disabled={disabled} />

    <div className={bem('wrapper-container', [size])}>
      <PhoneInput
        value={value}
        onChange={onChange}
        containerClass={cn(bem(null, { disabled, active: value, hasError: hasError }), className)}
        dropdownClass={cn(bem('dropdown'), dropdownClass)}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      {isClearable && !!value?.length && (
        <div
          className={bem('clear')}
          onClick={() => onChange && onChange('', {}, {} as React.ChangeEvent<HTMLInputElement>, '')}
        >
          &#215;
        </div>
      )}
    </div>

    <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
  </div>
);
