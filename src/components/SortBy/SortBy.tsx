import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Tooltip, Icon, Button, IconButton } from 'components';
import { ButtonSize } from 'components/Button/Button';

const bem = makeBEM('ebs-sort-by');

interface Sort {
  title: React.ReactNode;
  value: string;
  type?: SortDirection;
}

enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortByProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  title?: string;
  sortByTitle?: string;
  value?: string;
  options: Sort[];
  size?: ButtonSize;
  onChange: (newValue: string) => void;
}

export const SortBy = ({
  title = 'Sort By',
  sortByTitle = 'by',
  size = 'medium',
  options,
  value,
  onChange,
  ...props
}: SortByProps) => {
  const [selected, setSelected] = React.useState(options.find((item) => item.value === value?.replace('-', '')));
  const [type, setType] = React.useState(value?.charAt(0) === '-' ? SortDirection.DESC : SortDirection.ASC);

  React.useEffect(() => {
    if (selected) {
      onChange((type === SortDirection.ASC ? '' : '-') + selected?.value);
    } else {
      onChange('');
    }
  }, [selected, type]);

  const onChangeHandler = React.useCallback((newValue) => {
    setSelected((prevActive) => (prevActive?.value !== newValue.value ? newValue : undefined));
  }, []);

  const onChangeType = (): void => {
    if (!selected && options.length) {
      setSelected(options[0]);
    }
    setType((s) => (s === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC));
  };

  return (
    <div className={cn(bem('wrapper', [type]), props.className)} {...props}>
      <IconButton type="ghost" icon="sort" size={size} onClick={onChangeType} />
      <Tooltip
        bodyClass={bem('tooltip')}
        trigger="click"
        placement="bottom"
        tooltip={
          <>
            <div className={bem('tooltip-title')}>{title}</div>
            <div className={bem('tooltip-items')}>
              {options &&
                options.map((item) => {
                  const active = selected?.value === item.value;
                  return (
                    <div
                      key={item.value}
                      className={bem('tooltip-item', { active })}
                      onClick={() => onChangeHandler(item)}
                    >
                      {item.title}
                      {active && <Icon type="check" model="bold" />}
                    </div>
                  );
                })}
            </div>
          </>
        }
      >
        <Button type="ghost" size={size} className={bem('tooltip-button', [type])}>
          {selected ? `${sortByTitle} ${selected.title}` : title}
        </Button>
      </Tooltip>
    </div>
  );
};
