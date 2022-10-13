import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-chip');

export interface ChipProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onChange'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

export const Chip = ({ className, prefix, suffix, disabled, checked, onChange, text, ...props }: ChipProps) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(
        bem(null, [checked ? 'checked' : 'unchecked'], { disabled, 'has-prefix': prefix, 'has-suffix': suffix }),
        className,
      )}
      onClick={onClickHandler}
      {...props}
    >
      {prefix && <div className={bem('prefix')}>{prefix}</div>}

      {text}

      {suffix && <div className={bem('prefix')}>{suffix}</div>}
    </div>
  );
};
