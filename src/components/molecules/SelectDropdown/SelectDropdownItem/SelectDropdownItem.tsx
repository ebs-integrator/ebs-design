import * as React from 'react';
import cn from 'classnames';
import { Checkbox } from 'components/molecules';

import { InputSelectMode } from '../../InputSelect/InputSelect';

import { OptionValue } from '../../Select/Select';

export interface Props {
  className?: string;
  mode?: InputSelectMode;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  text?: React.ReactNode;
  value: OptionValue;
  active?: boolean;
  selected?: boolean;
  onClick?: (value: OptionValue) => void;
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
    if (onClick) {
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
