import * as React from 'react';
import cn from 'classnames';
import { Checkbox } from 'components/molecules';
import { SelectMode, OptionValue } from './Select';

export interface OptionItemProps {
  className?: string;
  mode: SelectMode;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  text?: React.ReactNode;
  active?: boolean;
  value: OptionValue;
  selected?: boolean;

  onClick?: (value: OptionValue) => void;
}

export const OptionItem: React.FC<OptionItemProps> = ({
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
