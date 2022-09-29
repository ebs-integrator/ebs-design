import * as React from 'react';
import cn from 'classnames';

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Switch = ({ className, disabled, checked, onChange, ...props }: SwitchProps) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(`ebs-switch`, `ebs-switch--${checked ? `checked` : `unchecked`}`, className, {
        disabled: disabled,
      })}
      onClick={onClickHandler}
      {...props}
    >
      {checked && <div className="ebs-switch__checked-sheet" />}

      <div className="ebs-switch__dot" />
    </div>
  );
};
