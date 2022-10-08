import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';
import { Radio } from 'components/Radio/Radio';

const bem = makeBEM('ebs-radio-group');

type RadioAlign = 'left' | 'right';
type RadioSize = 'small' | 'medium' | 'large';
type RadioSpacing = 'small' | 'medium' | 'large';
type RadioDirection = 'column' | 'row';
type RadioValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: RadioValue;
  disabled?: boolean;
  error?: boolean;
}

export interface RadioGroupProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'value'>, 'onChange'> {
  name: string;
  options: Option[];
  value: RadioValue;
  size?: RadioSize;
  radioAlign?: RadioAlign;
  direction?: RadioDirection;
  spacing?: RadioSpacing;
  onChange: (value: string | number) => void;
}

export const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    { className, options, value, radioAlign = 'left', direction = 'column', spacing = 'medium', onChange, ...props },
    ref,
  ) => {
    return (
      <div className={cn(bem(null, [`spacing-${spacing}`]), className)} data-direction={direction} ref={ref}>
        {options.map((option, idx) => (
          <Radio
            key={idx}
            className={bem('item')}
            radioAlign={radioAlign}
            onChange={() => onChange(option.value)}
            checked={value === option.value}
            {...option}
            {...props}
          >
            {option.text}
          </Radio>
        ))}
      </div>
    );
  },
);
