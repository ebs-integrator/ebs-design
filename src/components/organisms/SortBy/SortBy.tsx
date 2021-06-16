import * as React from 'react';
import { Tooltip, Button, Icon } from 'components/atoms';
import { ButtonSize } from 'components/atoms/Button/Button';

export type Sorts = 'data' | 'relevant' | '';

interface Sort {
  title: React.ReactNode;
  value: string;
  type?: 'asc' | 'desc';
}

export interface SortByProps {
  title?: string;
  sortByTitle?: string;
  value: Sorts;
  options: Sort[];
  size?: ButtonSize;
  onChange: (newValue: string) => void;
}

export const SortBy: React.FC<SortByProps> = ({
  title = 'Sort By',
  sortByTitle = 'by',
  size = 'medium',
  options,
  value,
  onChange,
}) => {
  const [changed, setChanged] = React.useState(false);
  const [active, setActive] = React.useState('');
  const [type, setType] = React.useState('asc');

  React.useEffect(() => {
    if (changed) {
      onChange(`${type === 'desc' ? '-' : ''}${active}`);
    }
  }, [changed, type, active]);

  const onChangeHandler = React.useCallback((newValue) => {
    setActive((prevActive) => (prevActive !== newValue ? newValue : ''));

    setChanged(true);
  }, []);

  const onChangeType = React.useCallback(() => {
    if (!active.length && options.length) {
      setActive(options[0].value);
    }

    setType((s) => (s === 'asc' ? 'desc' : 'asc'));

    setChanged(true);
  }, [options, active]);

  const selected = React.useMemo(
    () => (options ? options.filter(({ value: val }) => `${type === 'desc' ? '-' : ''}${val}` === value) : []),
    [value, type],
  );

  return (
    <div className={`ebs-sort-by__wrapper ebs-sort-${type}`}>
      <Button type="ghost" icon="sort" size={size} onClick={onChangeType} />

      <Tooltip
        bodyClass="ebs-sort-by__tooltip"
        trigger="click"
        placement="bottom"
        tooltip={
          <>
            <div className="ebs-sort-by__tooltip-title">{title}</div>

            <div className="ebs-sort-by__tooltip-items">
              {options
                ? options.map(({ value: val, title }) => {
                    const active = value === `${type === 'desc' ? '-' : ''}${val}`;

                    return (
                      <div
                        key={val}
                        className={`ebs-sort-by__tooltip-item${active ? ' ebs-sort-by__tooltip-item--active' : ''}`}
                        onClick={() => onChangeHandler(val)}
                      >
                        {title}

                        {active && <Icon type="check" model="bold" />}
                      </div>
                    );
                  })
                : null}
            </div>
          </>
        }
      >
        <Button type="ghost" size={size} className={`ebs-sort-by__tooltip-button ebs-sort-${type}`}>
          {selected.length ? `${sortByTitle} ${selected[0].title}` : title}
        </Button>
      </Tooltip>
    </div>
  );
};
