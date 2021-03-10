import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { Animated, Icon, Input } from 'components/atoms';
import { InputSelectMode, Option } from 'components/molecules/InputSelect/InputSelect';
import { SelectValue } from 'components/organisms/SmartSelect/SmartSelect';
import { Search } from 'components/organisms/SmartSelect/Search';
import { Pagination } from 'components/organisms/SmartSelect/Pagination';
import { GenericObject } from 'types';

import { SelectDropdownItem } from './SelectDropdownItem/SelectDropdownItem';

export interface SelectDropdownProps {
  mode: InputSelectMode;
  className?: string;
  options?: Option[];
  loading?: boolean;
  showSearch?: boolean;

  value?: SelectValue | SelectValue[];
  onChange?: (value: SelectValue | SelectValue[]) => void;
  onClose?: () => void;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  className,
  mode,
  onClose,
  onChange,
  loading,
  options = [],
  value,
  showSearch,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [search, setSearch] = React.useState('');
  const [activeItem, setActiveItem] = React.useState(0);

  const onScroll = (e): void => {
    console.log(Math.round(e.target.scrollTop), e.target.scrollHeight - e.target.offsetHeight);
  };

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', onScroll);
    }
  }, [ref, onScroll]);

  const childs = React.useMemo(() => React.Children.toArray(children) as GenericObject[], [children]);

  const $options = React.useMemo(
    () => options.filter((option) => option.text.toLowerCase().match(search.toLowerCase())),
    [options, search],
  );

  useEventListener('keydown', ({ key }: { key: string }) => {
    if (['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(key)) {
      if (key === 'Escape' && mode === 'single' && onClose !== undefined) {
        onClose();
      }

      if (key === 'Enter' && onChange !== undefined) {
        const option = $options[activeItem - 1];
        onChange(option ? option.value : undefined);

        if (mode === 'single' && onClose !== undefined) {
          onClose();
        }
      }

      // User pressed the up arrow
      if (key === 'ArrowUp') {
        setActiveItem((s) => (s !== 0 ? s - 1 : $options.length));
      }

      // User pressed the down arrow
      if (key === 'ArrowDown') {
        setActiveItem((s) => (s < $options.length ? s + 1 : 0));
      }
    }
  });

  const onChangeHandler = (value: any): void => {
    if (onChange !== undefined) {
      onChange(value);
    }

    if (onClose !== undefined) {
      onClose();
    }
  };

  const onSearch = (newSearch: string): void => setSearch(newSearch);

  const hasOptions = React.useMemo(() => $options && $options.length > 0, [$options]);
  console.log('ref', ref);
  return (
    <div className={cn(`ebs-select__dropdown`, className)}>
      {childs.find((child) => child.type === Search)}

      {showSearch && (
        <Input
          suffix={<Icon type="search" className="cursor" />}
          disabled={!options || (options && options.length === 0)}
          autoFocus
          placeholder="Search"
          value={search}
          onChange={onSearch}
          className="ebs-select__dropdown-search"
        />
      )}

      <div ref={ref} className="ebs-select__dropdown-items">
        <Animated loading={loading} duration={100}>
          {hasOptions ? (
            $options.map((option, key) => (
              <SelectDropdownItem
                key={option.value}
                mode={mode}
                active={
                  mode === 'multiple' && Array.isArray(value) ? value.includes(option.value) : value === option.value
                }
                selected={activeItem === key + 1}
                value={option.value}
                text={option.text}
                onClick={onChangeHandler}
              />
            ))
          ) : (
            <div className="ebs-select__dropdown--empty">No found</div>
          )}
        </Animated>
      </div>

      {childs.find((child) => child.type === Pagination)}
    </div>
  );
};
