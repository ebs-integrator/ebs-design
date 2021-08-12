import * as React from 'react';
import useClickAway from 'react-use/esm/useClickAway';
import cn from 'classnames';
import { useEventListener } from 'hooks';
import { isArray, toArray, uniqueArray, isEqual as isEqualArray } from 'libs';
import { GenericObject } from 'types';

import { Search, Pagination, Options } from './components';
import { Context, ContextProps } from './Context';
import { OptionValue, Option } from './interfaces';
import { isEqual } from './utils';

interface Props extends ContextProps {
  dropdownOptions?: React.ReactNode;
  hasValue?: boolean;
  textValue?: Option[] | Option;
  isBox: boolean;
  isScrolling?: boolean;
  isMouseScrolling?: number;
  onClear: () => void;
  onDeleteSelect: (key: number | string) => void;
  onChangeNewOption: (value: string | number) => void;
  onKeyDownNewOption: (e: React.KeyboardEvent) => void;
}

export default ({ loading, ref, children, ...params }): Props => {
  const {
    mode = 'single',
    optionsMode = 'dropdown',
    options: optionsList = [],
    value,
    selected,
    emptyLabel,
    className,
    onAddNew,
    onSearch,
    onChange,
    onSelect,
  } = params;
  const optionsRef = React.useRef<HTMLDivElement | null>(null);

  const {
    options,
    cache: cacheOptions,
    style: optionsStyle,
    newOption,
    search,
    isOpen,
    isLoaded,
    setState,
    ...props
  } = React.useContext(Context);

  const childs = React.useMemo(() => {
    const childrens = React.Children.toArray(children) as GenericObject[];
    const optionsEl = childrens.find((child) => child?.type === Options);

    return [...childrens, ...(!optionsEl ? (React.Children.toArray(<Options />) as GenericObject[]) : [])];
  }, [children]);

  const $options = React.useMemo(() => {
    const child = childs.find((i) => i?.type === Options);

    return !!optionsList.length
      ? optionsList
      : !!child?.props?.children?.length
      ? child.props.children.map((i) => ({
          text: i.props.children,
          ...i.props,
        }))
      : optionsList;
  }, [optionsList, childs]);

  const searchEl = React.useMemo(() => childs.find((child) => child?.type === Search), [childs]);

  const isBox = React.useMemo(() => optionsMode === 'box', [optionsMode]);
  const isSearch = React.useMemo(() => (searchEl && !!searchEl.props?.value?.length) || false, [searchEl]);
  const paginationProps = React.useMemo(() => childs.find((child) => child?.type === Pagination)?.props, [childs]);

  useEventListener(
    'keypress',
    ({ key, ctrlKey }: { key: string; ctrlKey: boolean }) => {
      if (ctrlKey && ['Enter'].includes(key)) {
        onClickAddNew();
      }
    },
    ref,
  );

  useClickAway(ref, (e) => {
    if (isOpen && !isBox && optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
      setState({ isOpen: false });
    }
  });

  React.useEffect(() => {
    if (!isBox && isOpen && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const offsetBottom = rect.bottom + rect.height;

      const style: React.CSSProperties = {
        width: `${rect.width}px`,
      };

      if (!isEqual(style, optionsStyle)) {
        setState({ style, offsetBottom });
      }
    }
  }, [isOpen, ref, optionsStyle]);

  React.useEffect(() => {
    if (searchEl?.props?.value !== undefined && search !== searchEl.props.value) {
      setState({ search: searchEl.props.value, isLoaded: false });
    }
  }, [searchEl]);

  React.useEffect(() => {
    if (!isBox && !isOpen && searchEl && searchEl.props?.value?.length) {
      searchEl.props.onSearch('');
    }
  }, [isBox, isOpen, searchEl]);

  React.useEffect(() => {
    if (!isEqual($options, options, 'value') && !isLoaded) {
      setState({
        isLoaded: isSearch ? false : true,
        options:
          paginationProps?.mode === 'scroll' && !isSearch ? (uniqueArray(options, $options) as Option[]) : $options,
      });
    }
  }, [$options, options, isLoaded, paginationProps, isSearch]);

  React.useEffect(() => {
    if (!loading) {
      setState({ isLoaded: false });
    }
  }, [loading]);

  React.useEffect(() => {
    if ((!paginationProps || paginationProps.page === 1) && !isSearch && !isEqual($options, options)) {
      setState({ options: $options });
    }
  }, [$options, options, isSearch]);

  React.useEffect(() => {
    let data = cacheOptions;

    if (value) {
      const cache = options
        .filter((x) => !toArray(selected).includes(x))
        .filter((i) => (isArray(value) && (value as OptionValue[]).includes(i.value)) || value === i.value);

      data = cache.length ? cache : selected ? toArray(selected) : cacheOptions;
    } else if (selected) {
      data = toArray(selected);
    }

    if (!isEqualArray(data, cacheOptions)) {
      if (onSelect) {
        onSelect(data);
      }

      setState({ cache: data });
    }
  }, [options, value, selected, cacheOptions, onSelect]);

  const onPrev = React.useCallback(() => {
    if (paginationProps) {
      const { page, setPage } = paginationProps;

      if (page > 1) {
        setPage(page - 1);
      }
    }
  }, [paginationProps]);

  const onNext = React.useCallback(() => {
    if (paginationProps) {
      const { page, count, limit, setPage } = paginationProps;

      if (page < Math.ceil(count / limit)) {
        setPage(page + 1);
      }

      if (paginationProps.mode === 'scroll') {
        setState({ isLoaded: false });
      }
    }
  }, [paginationProps]);

  const onClear = (): void => onChangeHandler(mode === 'single' ? undefined : []);

  const onClickAddNew = React.useCallback(() => {
    if (onAddNew && newOption) {
      onAddNew(newOption);
      setState({ newOption: '' });

      if (onSearch) {
        onSearch('');
      }

      onChangeHandler(newOption);
    }
  }, [newOption, onAddNew, onSearch]);

  const onChangeHandler = React.useCallback(
    (newValue) => {
      const $newValue = mode === 'single' ? (newValue === value ? undefined : newValue) : newValue;

      const newModeValue =
        ['multiple', 'tags'].includes(mode) && !isArray($newValue)
          ? isArray(value) && (value as OptionValue[]).includes($newValue)
            ? (value as OptionValue[]).filter((item) => $newValue !== item)
            : [...(isArray(value) ? (value as OptionValue[]) : []), $newValue]
          : $newValue;

      if (onChange) {
        onChange(newModeValue);
      }
    },
    [mode, value, onChange],
  );

  const onDeleteSelect = React.useCallback(
    (key: number | string) => {
      if (isArray(value) && onChange) {
        onChange(value.filter((item) => key !== item));
      }
    },
    [value, onChange],
  );

  const onChangeNewOption = (value): void => setState({ isOpen: true, newOption: value });

  const onToggleOpenDropdown = (): void => setState((prevState) => ({ isOpen: !prevState.isOpen }));

  const onKeyDownNewOption = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (onSearch && e.keyCode === 13 && newOption?.length) {
        onSearch(newOption);
      }
    },
    [newOption, onSearch],
  );

  const hasValue = React.useMemo(
    () => (!isArray(value) && value !== undefined) || (isArray(value) && (value as OptionValue[]).length > 0),
    [value],
  );

  const textValue = React.useMemo(() => {
    if (isArray(value)) {
      return cacheOptions.filter((option) => (value as OptionValue[]).includes(option.value));
    }

    return cacheOptions.find((option) => option.value === value) || { value, text: value };
  }, [value, cacheOptions]);

  const dropdownOptions = React.useMemo(
    () => (
      <div ref={optionsRef} className={cn(`ebs-select__options`, className)} style={optionsStyle}>
        {childs.map((child, i) => {
          if (child?.type === Options) {
            return (
              <Options
                key={i}
                mode={mode}
                scrollMode={paginationProps?.mode || 'regular'}
                options={options}
                value={value}
                loading={loading}
                className={cn({ 'ebs-select--box': isBox })}
                emptyLabel={emptyLabel}
                newOption={newOption}
                onClose={!['multiple', 'tags'].includes(mode) ? onToggleOpenDropdown : undefined}
                onChange={onChangeHandler}
                onPrev={onPrev}
                onNext={onNext}
                onClickAddNew={onClickAddNew}
                {...child.props}
              />
            );
          } else if (child?.type === Pagination && child.props.mode === 'scroll') {
            return null;
          }

          return child;
        })}
      </div>
    ),
    [
      optionsRef,
      className,
      optionsStyle,
      childs,
      mode,
      paginationProps,
      options,
      value,
      loading,
      isBox,
      emptyLabel,
      newOption,
      onToggleOpenDropdown,
      onChangeHandler,
      onPrev,
      onNext,
      onClickAddNew,
    ],
  );

  return {
    options,
    cache: cacheOptions,
    style: optionsStyle,
    search,
    hasValue,
    newOption,
    textValue: textValue as Option[],
    dropdownOptions,
    isOpen,
    isLoaded,
    isBox,
    setState,
    onDeleteSelect,
    onKeyDownNewOption,
    onChangeNewOption,
    onClear,
    ...props,
  };
};
