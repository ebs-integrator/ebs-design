import * as React from 'react';
import { Checkbox } from 'organisms';

import { InputSelectMode } from '../InputSelect/InputSelect';

import './SelectDropdownItem.scss';

export interface Props {
  className?: string;
  mode: InputSelectMode;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  text?: React.ReactNode;
  active?: boolean;
  selected?: boolean;

  // TODO: decide the type
  onClick?: (value: any) => void;
  // TODO: decide the type
  value?: any;
}

export const SelectDropdownItem: React.FC<Props> = ({
  className = '',
  mode,
  onClick,
  prefix,
  suffix,
  value,
  text,
  active,
  selected,
}) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined) {
      onClick(value);
    }
  };

  const isMultiple = React.useMemo(() => mode === 'multiple', [mode]);

  return (
    <div
      className={`ebs-select-dropdown-item${prefix ? ' has-prefix' : ''}${suffix ? ' has-suffix' : ''}${
        active ? ' active' : ''
      }${selected ? ' selected' : ''} ${className}`}
      onClick={onClickHandler}
    >
      {prefix && <div className="ebs-select-dropdown-item-prefix">{prefix}</div>}

      <div className="ebs-select-dropdown-item-text">{text}</div>

      {suffix || isMultiple ? (
        <div className="ebs-select-dropdown-item-suffix">{isMultiple ? <Checkbox checked={active} /> : suffix}</div>
      ) : null}
    </div>
  );
};
