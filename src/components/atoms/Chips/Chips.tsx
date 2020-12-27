import * as React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  text?: React.ReactNode;
}

export const Chips: React.FC<Props> = ({ className, prefix, suffix, disabled, checked, onChange, text }) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(`ebs-chips`, `ebs-chips-${checked ? 'checked' : 'unchecked'}`, className, {
        'has-prefix': prefix,
        'has-suffix': suffix,
        disabled: disabled,
      })}
      onClick={onClickHandler}
    >
      {prefix && <div className="ebs-chips__prefix">{prefix}</div>}

      {text}

      {suffix && <div className="ebs-chips__suffix">{suffix}</div>}
    </div>
  );
};
