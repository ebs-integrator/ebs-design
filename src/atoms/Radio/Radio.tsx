import * as React from 'react';
import { makeid } from 'libs/string';

import './Radio.scss';

export type RadioAlign = 'left' | 'right';

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  radioAlign?: RadioAlign;
  onChange?: (value: string) => void;
  value?: string | number;
  options?: Option[];
}

// name attribute makes it grouped ones

export const Radio: React.FC<Props> = ({ className = '', radioAlign = 'left', onChange, value, options }) => {
  const name = React.useMemo(() => makeid(), []);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange !== undefined) {
      onChange(target.value);
    }
  };

  const onClickHandler = (newValue: string | number): void => {
    if (onChange !== undefined && `${value}` === `${newValue}`) {
      onChange('');
    }
  };

  if (!options || (options && options.length === 0)) {
    return null;
  }

  return (
    <div className={`ebs-radio-group ebs-radio-align-${radioAlign} ${className}`}>
      {options.map((option) => (
        <div className={`ebs-radio-wrapper ${option.text ? ' has-text' : ''}${option.disabled ? ' disabled' : ''}`}>
          <input
            type="radio"
            className="ebs-radio-input"
            name={name}
            onClick={() => onClickHandler(option.value)}
            onChange={onChangeHandler}
            value={option.value}
            {...(value !== undefined && option.value !== undefined
              ? { checked: `${value}` === `${option.value}` }
              : {})}
            disabled={option.disabled}
          />

          <div className="ebs-radio">
            <div className="ebs-radio-dot" />
          </div>

          {option.text && <div className="ebs-radio-text">{option.text}</div>}
        </div>
      ))}
    </div>
  );
};
