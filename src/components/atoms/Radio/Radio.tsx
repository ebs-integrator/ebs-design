import * as React from 'react';
import cn from 'classnames';
import { makeid } from 'libs/string';

export type RadioAlign = 'left' | 'right';

type RadioValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: RadioValue;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  radioAlign?: RadioAlign;
  textClass?: string;
  textStyle?: React.CSSProperties;
  onChange?: (e?: any) => void;
  value?: RadioValue;
  options?: Option[];
  name?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ className, radioAlign = 'left', textClass = '', textStyle, options, value, onChange, ...props }, ref) => {
    const name = props.name || React.useMemo(() => makeid(), []);

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
        {options.map((option, idx) => (
          <div key={idx} className={cn(`ebs-radio__wrapper`, { 'has-text': option.text, disabled: option.disabled })}>
            <input
              ref={ref}
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
  },
);
