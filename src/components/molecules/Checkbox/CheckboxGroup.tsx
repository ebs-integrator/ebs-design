import * as React from 'react';
import cn from 'classnames';
import { makeid } from 'libs/string';
import { Checkbox, CheckAlign } from './Checkbox';

export type CheckboxGroupValue = (string | number)[];

export interface Option {
  text: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  checkboxClass?: string;
  checkAlign?: CheckAlign;
  options?: Option[];
  values: CheckboxGroupValue;
  disabled?: boolean;
  onChange?: (value: CheckboxGroupValue) => void;
}

export const CheckboxGroup: React.FC<Props> = ({
  className,
  checkboxClass,
  checkAlign = 'left',
  options,
  values,
  onChange,
  disabled,
  ...props
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
    <div className={cn(`ebs-checkbox__group`, className)} {...props}>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          className={cn(checkboxClass)}
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
