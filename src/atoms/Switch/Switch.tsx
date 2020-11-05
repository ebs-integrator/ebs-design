import * as React from 'react';

import './Switch.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

export const Switch: React.FC<Props> = ({ className = '', disabled, checked, onChange }) => {
  const onClickHandler = (): void => (!disabled && onChange !== undefined ? onChange(!checked) : undefined);

  return (
    <div
      className={`ebs-switch ebs-switch-${checked ? 'checked' : 'unchecked'}${
        disabled ? ' disabled' : ''
      } ${className}`}
      onClick={onClickHandler}
    >
      {checked && <div className="ebs-switch-checked-sheet" />}

      <div className="ebs-switch-dot" />
    </div>
  );
};
