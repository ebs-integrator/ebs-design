import * as React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Switch: React.FC<Props> = ({ className, disabled, checked, onChange }) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={cn(`ebs-switch`, `ebs-switch-${checked ? `checked` : `unchecked`}`, className, disabled && `disabled`)}
      onClick={onClickHandler}
    >
      {checked && <div className="ebs-switch__checked-sheet" />}

      <div className="ebs-switch__dot" />
    </div>
  );
};
