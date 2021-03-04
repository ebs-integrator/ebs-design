import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { Animated, Icon, Input } from 'components/atoms';
import { InputSelectMode, Option } from 'components/molecules/InputSelect/InputSelect';

import { SelectDropdownItem } from './SelectDropdownItem/SelectDropdownItem';

export interface Props {
  mode: InputSelectMode;
  className?: string;
  onClose?: () => void;
  options?: Option[];

  // TODO: decide the type
  onChange?: (value: any) => void;
  // TODO: decide the type
  value?: any;

  // FIXME: Remove this prop and refactor with compound components
  showSearch?: boolean;
}

export const SelectDropdown: React.FC<Props> = ({
  className,
  mode,
  onClose,
  onChange,
  options = [],
  value,
  showSearch,
}) => {
  const [search, setSearch] = React.useState('');
  const [activeItem, setActiveItem] = React.useState(0);

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

  return (
    <div className={cn(`ebs-select__dropdown`, className)}>
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

      <Animated className="ebs-select__dropdown-items" duration={100}>
        {hasOptions ? (
          $options.map((option, key) => (
            <SelectDropdownItem
              key={option.value}
              mode={mode}
              active={Array.isArray(value) ? value.includes(option.value) : value === option.value}
              selected={activeItem === key + 1}
              value={option.value}
              text={option.text}
              onClick={onChangeHandler}
              className={option.className}
              children={option.children}
            />
          ))
        ) : (
          <div className="ebs-select__dropdown--empty">No found</div>
        )}
      </Animated>
    </div>
  );
};
