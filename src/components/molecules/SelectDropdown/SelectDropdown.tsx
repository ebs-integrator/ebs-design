import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { debounce } from 'libs';
import { Animated, Icon, Input } from 'components/atoms';
import { Loader } from 'components/molecules';
import { InputSelectMode, Option } from 'components/molecules/InputSelect/InputSelect';

import { SelectDropdownItem } from './SelectDropdownItem/SelectDropdownItem';

export interface Props {
  mode: InputSelectMode;
  className?: string;
  onClose?: () => void;
  options?: Option[];
  onChange?: (value: any) => void;
  value?: any;
  loading?: boolean;
  loadMore?: () => void;
  hasMore?: boolean;
  showSearch?: boolean;
  onSearch?: (search: string) => void;
}

export const SelectDropdown: React.FC<Props> = ({
  className,
  mode,
  onClose,
  onChange,
  options = [],
  value,
  showSearch = false,
  onSearch,
  loading = false,
  hasMore = false,
  loadMore,
}) => {
  const [search, setSearch] = React.useState('');
  const [activeItem, setActiveItem] = React.useState(0);

  const filteredOptions = React.useMemo(
    () => {
      if (!showSearch || onSearch) {
        return options;
      }
      return options.filter((option) => option.text.toLowerCase().match(search.toLowerCase()))
    },
    [showSearch, onSearch, options, search],
  );

  useEventListener('keydown', ({ key }: { key: string }) => {
    if (key === 'Escape' && mode === 'single' && onClose !== undefined) {
      onClose();
    }

    if (key === 'Enter' && onChange !== undefined) {
      const option = filteredOptions[activeItem - 1];
      onChange(option ? option.value : undefined);

      if (mode === 'single' && onClose !== undefined) {
        onClose();
      }
    }

    if (key === 'ArrowUp') {
      setActiveItem((s) => (s !== 0 ? s - 1 : filteredOptions.length));
    }

    if (key === 'ArrowDown') {
      setActiveItem((s) => (s < filteredOptions.length ? s + 1 : 0));
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

  const _onSearch = React.useMemo(() => onSearch && debounce(onSearch, 100), [onSearch]);

  const handleSearch = React.useCallback((search) => {
    setSearch(search);
    if (_onSearch) {
      _onSearch(search);
    }
  }, [_onSearch]);

  const onScroll = React.useCallback((e) => {
    if (hasMore && loadMore)  {
      // if scroll position is at the end
      if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
        loadMore();
      }
    }
  }, [hasMore, loadMore]);

  const hasOptions = React.useMemo(() => filteredOptions && filteredOptions.length > 0, [filteredOptions]);

  return (
    <div className={cn(`ebs-select__dropdown`, className)}>
      {showSearch && (
        <Input
          suffix={<Icon type="search" className="cursor" />}
          disabled={search === '' && options.length === 0}
          autoFocus
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="ebs-select__dropdown-search"
        />
      )}
      <Animated
        className="ebs-select__dropdown-items"
        duration={100}
        onScroll={onScroll}
      >
        {hasOptions ? (
          filteredOptions.map((option, key) => (
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
      <Loader size="middle" loading={loading} height={30}/>
    </div>
  );
};
