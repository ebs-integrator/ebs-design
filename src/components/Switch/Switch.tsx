import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-switch');

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Switch = ({ className, disabled, checked, onChange, ...props }: SwitchProps) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(bem(null, { disabled }, [checked ? 'checked' : 'unchecked']), className)}
      onClick={onClickHandler}
      {...props}
    >
      {checked && <div className={bem('checked-sheet')} />}

      <div className={bem('dot')} />
    </div>
  );
};
