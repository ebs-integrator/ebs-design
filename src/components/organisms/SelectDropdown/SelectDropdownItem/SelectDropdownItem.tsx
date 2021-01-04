import * as React from 'react';
import cn from 'classnames';
import { Checkbox } from 'components/organisms';

import { InputSelectMode } from '../../InputSelect/InputSelect';

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
  className,
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
      className={cn(`ebs-select__dropdown-item`, className, {
        active: active,
        selected: selected,
        'has-prefix': prefix,
        'has-suffix': suffix,
      })}
      onClick={onClickHandler}
    >
      {prefix && <div className="ebs-select__dropdown-item-prefix">{prefix}</div>}

      <div className="ebs-select__dropdown-item-text">{text}</div>

      {suffix || isMultiple ? (
        <div className="ebs-select__dropdown-item-suffix">{isMultiple ? <Checkbox checked={active} /> : suffix}</div>
      ) : null}
    </div>
  );
};
