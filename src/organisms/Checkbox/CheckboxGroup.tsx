import * as React from 'react';
import { makeid } from 'libs/string';
import { Checkbox } from 'organisms';

import { CheckAlign } from './Checkbox';

export type CheckboxGroupValue = (string | number)[];

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface Props {
  className?: string;
  checkboxClass?: string;
  checkAlign?: CheckAlign;
  options?: Option[];
  values: CheckboxGroupValue;
  onChange?: (value: CheckboxGroupValue) => void;
  disabled?: boolean;
}

export const CheckboxGroup: React.FC<Props> = ({
  className = '',
  checkboxClass = '',
  checkAlign = 'left',
  options,
  values,
  onChange,
  disabled,
}) => {
  const name = React.useMemo(() => makeid(), []);

  const onChangeHandler = (target: string | number, targetValue: boolean): void => {
    if (onChange !== undefined) {
      onChange(targetValue ? [...values, target] : values.filter((value) => target !== value));
    }
  };

  if (!options || (options && options.length === 0)) {
    return null;
  }

  return (
    <div className={`ebs-checkbox-group ${className}`}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          className={checkboxClass}
          checkAlign={checkAlign}
          name={name}
          text={option.text}
          value={option.value}
          {...(values !== undefined
            ? {
                checked: values.includes(option.value),
              }
            : {})}
          onChange={(value) => onChangeHandler(option.value, value)}
          disabled={disabled || option.disabled}
        />
      ))}
    </div>
  );
};
