import * as React from 'react';
import cn from 'classnames';
import { makeBEM, makeid } from 'libs';

const bem = makeBEM('ebs-radio');

export type RadioAlign = 'left' | 'right';

type RadioValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: RadioValue;
  disabled?: boolean;
}

export interface RadioProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'value'>, 'onChange'> {
  name?: string;
  textClass?: string;
  radioAlign?: RadioAlign;
  value?: RadioValue;
  options?: Option[];
  textStyle?: React.CSSProperties;
  onChange?: (value?: string | number) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, radioAlign = 'left', textClass = '', textStyle, options, value, onChange, ...props }, ref) => {
    const id = React.useMemo(() => makeid(), []);
    const name = props.name || id;

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
      <div className={cn(bem('group', [radioAlign]), className)}>
        {options.map((option, idx) => (
          <div
            key={idx}
            className={bem('wrapper', { 'has-text': option.text, disabled: option.disabled })}
            onClick={() => onClickHandler(option.value)}
          >
            <input
              ref={ref}
              type="radio"
              className={bem('input')}
              name={name}
              value={option.value}
              onChange={onChangeHandler}
              disabled={option.disabled}
              {...(value !== undefined && option.value !== undefined
                ? { ...props, checked: `${value}` === `${option.value}` }
                : props)}
            />

            <div className={bem()}>
              <div className={bem('dot')} />
            </div>

            {option.text && (
              <div className={cn(bem('text'), textClass)} style={textStyle}>
                {option.text}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  },
);
