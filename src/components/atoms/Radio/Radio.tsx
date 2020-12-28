import * as React from 'react';
import cn from 'classnames';
import { makeid } from 'libs/string';

export type RadioAlign = 'left' | 'right';

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  radioAlign?: RadioAlign;
  textClass?: string;
  textStyle?: { [key: string]: any };
  onChange?: (value: string) => void;
  value?: string | number;
  options?: Option[];
}

// name attribute makes it grouped ones

export const Radio: React.FC<Props> = ({
  className,
  radioAlign = 'left',
  textClass = '',
  textStyle,
  onChange,
  value,
  options,
}) => {
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
    <div className={cn(`ebs-radio__group`, `ebs-radio__align--${radioAlign}`, className)}>
      {options.map((option) => (
        <div className={cn(`ebs-radio__wrapper`, { 'has-text': option.text, disabled: option.disabled })}>
          <input
            type="radio"
            className="ebs-radio__input"
            name={name}
            onClick={() => onClickHandler(option.value)}
            value={option.value}
            onChange={onChangeHandler}
            {...(value !== undefined && option.value !== undefined
              ? { checked: `${value}` === `${option.value}` }
              : {})}
            disabled={option.disabled}
          />

          <div className="ebs-radio">
            <div className="ebs-radio__dot" />
          </div>

          {option.text && (
            <div className={cn(`ebs-radio__text`, textClass)} style={textStyle}>
              {option.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
