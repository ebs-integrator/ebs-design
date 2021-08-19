import * as React from 'react';
import cn from 'classnames';

export interface ChipsProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onChange'> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  text?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

export const Chips: React.FC<ChipsProps> = ({
  className,
  prefix,
  suffix,
  disabled,
  checked,
  onChange,
  text,
  ...props
}) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(`ebs-chips`, `ebs-chips--${checked ? 'checked' : 'unchecked'}`, className, {
        'has-prefix': prefix,
        'has-suffix': suffix,
        disabled: disabled,
      })}
      onClick={onClickHandler}
      {...props}
    >
      {prefix && <div className="ebs-chips__prefix">{prefix}</div>}

      {text}

      {suffix && <div className="ebs-chips__suffix">{suffix}</div>}
    </div>
  );
};
