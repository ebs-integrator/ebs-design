import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Checkbox } from 'components';
import { SelectMode, OptionValue } from '../../../interfaces';

const bem = makeBEM('ebs-select');
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
      className={cn(bem('options-item', { active, selected, 'has-prefix': prefix, 'has-suffix': suffix }), className)}
      onClick={onClickHandler}
      {...props}
    >
      {prefix && <div className={bem('options-item-prefix')}>{prefix}</div>}

      <div className={bem('options-item-text')}>{text}</div>

      {suffix || isMultiple ? (
        <div className={bem('options-item-suffix')}>{isMultiple ? <Checkbox checked={active} /> : suffix}</div>
      ) : null}
    </div>
  );
};
