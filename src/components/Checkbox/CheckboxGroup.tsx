import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';
import { Checkbox } from './Checkbox';

const bem = makeBEM('ebs-checkbox-group');

type CheckboxAlign = 'left' | 'right';
type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxSpacing = 'small' | 'medium' | 'large';
type CheckboxDirection = 'column' | 'row';
type CheckboxValue = string | number;

export interface Option {
  text: React.ReactNode;
  value: CheckboxValue;
  disabled?: boolean;
  error?: boolean;
}

export interface CheckboxGroupProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'value'>, 'onChange'> {
  name?: string;
  options: Option[];
  values?: CheckboxValue[];
  size?: CheckboxSize;
  checkAlign?: CheckboxAlign;
  direction?: CheckboxDirection;
  spacing?: CheckboxSpacing;
  onChange?: (value: CheckboxValue[]) => void;
}

export const CheckboxGroup = React.forwardRef<HTMLInputElement, CheckboxGroupProps>(
  (
    { className, options, values, checkAlign = 'left', direction = 'column', spacing = 'medium', onChange, ...props },
    ref,
  ) => {
    const [checkedValues, setCheckedValues] = React.useState(values || []);

    const handleChange = (target: string | number, targetValue: boolean): void => {
      const newValues = targetValue ? [...checkedValues, target] : checkedValues.filter((value) => value !== target);
      setCheckedValues(newValues);
      onChange && onChange(newValues);
    };

    return (
      <div className={cn(bem(null, [`spacing-${spacing}`]), className)} data-direction={direction} ref={ref}>
        {options.map((option, idx) => (
          <Checkbox
            key={idx}
            className={bem('item')}
            checkAlign={checkAlign}
            onChange={(value) => handleChange(option.value, value)}
            checked={checkedValues?.includes(option.value)}
            {...option}
            {...props}
          />
        ))}
      </div>
    );
  },
);
