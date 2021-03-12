import * as React from 'react';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { Animated, Space } from 'components/atoms';
import { GenericObject } from 'types';

import { SelectDropdownItem } from './SelectDropdownItem/SelectDropdownItem';
import { SelectMode, OptionValue, Option } from './Select';
import { Search } from './Search';
import { Pagination } from './Pagination';

export interface SelectDropdownProps {
  className?: string;
  mode: SelectMode;
  options?: Option[];
  loading?: boolean;
  value?: OptionValue | OptionValue[];
  emptyLabel?: string;
  onChange?: (value: OptionValue | OptionValue[]) => void;
  onPrev?: () => void;
  onNext?: () => void;
  onClose?: () => void;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  className,
  mode,
  onClose,
  onChange,
  loading,
  options = [],
  emptyLabel = 'No found',
  value,
  onNext,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [activeItem, setActiveItem] = React.useState(0);

  const onScroll = (e): void => {
    const scrollTop = Math.floor(e.target.scrollTop);

    if (onNext && e.target.scrollHeight - e.target.offsetHeight - scrollTop <= 3) {
      onNext();
    }
  };

  const childs = React.useMemo(() => React.Children.toArray(children) as GenericObject[], [children]);

  const elSearch = childs.find((child) => child.type === Search);
  const elPagination = childs.find((child) => child.type === Pagination);

  const paginationProps = React.useMemo(() => (elPagination && elPagination.props) || {}, [elPagination]);
  const isScrollModePagination = React.useMemo(() => paginationProps.mode === 'scroll', [paginationProps]);

  React.useEffect(() => {
    if (ref.current && !isScrollModePagination && options.length) {
      ref.current.scrollTop = 0;
    }
  }, [ref, options]);

  React.useEffect(() => {
    if (ref.current && isScrollModePagination) {
      ref.current.addEventListener('scroll', onScroll);
    }

    return () => {
      if (ref.current && isScrollModePagination) {
        ref.current.removeEventListener('scroll', onScroll);
      }
    };
  }, [ref, onScroll, isScrollModePagination]);

  useEventListener('keydown', ({ key }: { key: string }) => {
    if (['ArrowUp', 'ArrowDown', 'Escape', 'Enter'].includes(key)) {
      if (key === 'Escape' && mode === 'single' && onClose !== undefined) {
        onClose();
      }

      if (key === 'Enter' && onChange !== undefined) {
        const option = options[activeItem - 1];
        onChange(option.value);

        if (mode === 'single' && onClose !== undefined) {
          onClose();
        }
      }

      // User pressed the up arrow
      if (key === 'ArrowUp') {
        setActiveItem((s) => (s !== 0 ? s - 1 : options.length));
      }

      // User pressed the down arrow
      if (key === 'ArrowDown') {
        setActiveItem((s) => (s < options.length ? s + 1 : 0));
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

  const hasOptions = React.useMemo(() => options && options.length > 0, [options]);

  return (
    <div className={cn(`ebs-select__dropdown`, className)}>
      {elSearch}

      <div ref={ref} className="ebs-select__dropdown-items">
        <Animated loading={loading} duration={100}>
          {hasOptions ? (
            options.map((option, key) => (
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
            <Space size="large" justify="center" className="ebs-select__dropdown--empty">
              {emptyLabel}
            </Space>
          )}
        </Animated>
      </div>

      {elPagination && elPagination.props.mode === 'regular' ? elPagination : null}
    </div>
  );
};
