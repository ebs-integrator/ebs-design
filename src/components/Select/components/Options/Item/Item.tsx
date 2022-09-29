import * as React from 'react';
import cn from 'classnames';
import { Checkbox } from 'components';

import { SelectMode, OptionValue } from '../../../interfaces';

export interface ItemProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onClick'> {
  mode?: SelectMode;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  text?: React.ReactNode;
  active?: boolean;
  value: OptionValue;
  selected?: boolean;

  onClick?: (value: OptionValue) => void;
}

export const Item = ({
  className,
  mode = 'single',
  onClick,
  prefix,
  suffix,
  value,
  text,
  active,
  selected,
  ...props
}: ItemProps) => {
  const onClickHandler = (): void => {
    if (onClick) {
      onClick(value);
    }
  };

  const isMultiple = React.useMemo(() => mode === 'multiple', [mode]);

  return (
    <div
      className={cn(`ebs-select__options-item`, className, {
        active: active,
        selected: selected,
        'has-prefix': prefix,
        'has-suffix': suffix,
      })}
      onClick={onClickHandler}
      {...props}
    >
      {prefix && <div className="ebs-select__options-item-prefix">{prefix}</div>}

      <div className="ebs-select__options-item-text">{text}</div>

      {suffix || isMultiple ? (
        <div className="ebs-select__options-item-suffix">{isMultiple ? <Checkbox checked={active} /> : suffix}</div>
      ) : null}
    </div>
  );
};
