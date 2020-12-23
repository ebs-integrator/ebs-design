import * as React from 'react';

interface Props {
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  text?: React.ReactNode;
}

export const Chips: React.FC<Props> = ({ className = '', prefix, suffix, disabled, checked, onChange, text }) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={`ebs-chips ebs-chips-${checked ? 'checked' : 'unchecked'}${prefix ? ' has-prefix' : ''}${
        suffix ? ' has-suffix' : ''
      }${disabled ? ' disabled' : ''} ${className}`}
      onClick={onClickHandler}
    >
      {prefix && <div className="ebs-chips-prefix">{prefix}</div>}

      {text}

      {suffix && <div className="ebs-chips-suffix">{suffix}</div>}
    </div>
  );
};
