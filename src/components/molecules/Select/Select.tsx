import * as React from 'react';
import useClickAway from 'react-use/esm/useClickAway';
import useScrolling from 'react-use/esm/useScrolling';
import useWindowScroll from 'react-use/esm/useWindowScroll';
import useMouseWheel from 'react-use/esm/useMouseWheel';
import useIntersection from 'react-use/esm/useIntersection';
import cn from 'classnames';
import { Label, Icon, Button, Input } from 'components/atoms';
import { Loader } from 'components/molecules';
import { usePortal, useEventListener } from 'hooks';
import { isArray, toArray, uniqueArray, isEqual as isEqualArray } from 'libs';
import { GenericObject, SizeType } from 'types';

import { Search } from './Search';
import { Pagination, PaginationProps } from './Pagination';
import { Options, OptionsProps, OptionsComposition } from './Options';
import { isEqual } from './utils';

import { InputSearchProps } from '../InputSearch/InputSearch';

export interface SelectComposition {
  Options: React.FC<OptionsProps> & OptionsComposition;
  Search: React.FC<InputSearchProps>;
  Pagination: React.FC<PaginationProps>;
}

export type SelectMode = 'single' | 'multiple' | 'tags';
export type OptionsMode = 'dropdown' | 'box';
export type OptionValue = string | number;
export type Option = {
  value: OptionValue;
  text: React.ReactNode;
};

export interface SelectProps {
  mode?: SelectMode;
  optionsMode?: OptionsMode;
  className?: string;
  size?: SizeType;
  label?: React.ReactNode;
  placeholder?: string;
  newPlaceholder?: string;
  loading?: boolean;
  disabled?: boolean;
  options?: Option[];
  emptyLabel?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  rootRef?: React.MutableRefObject<HTMLDivElement | null>;

  value?: OptionValue | OptionValue[];
  selected?: Option | Option[];
  isClearable?: boolean;
  onChange?: (value: OptionValue | OptionValue[]) => void;
  onSelect?: (value: Option[]) => void;
  onSearch?: (value: string) => void;
  onAddNew?: (value: string) => void;
}

const Select: React.FC<SelectProps> & SelectComposition = ({
  mode = 'single',
  optionsMode = 'dropdown',
  options: optionsList = [],
  rootRef,
  size = 'medium',
  emptyLabel,
  className,
  label,
  value,
  selected,
  onChange,
  onSelect,
  onAddNew,
  onSearch,
  placeholder,
  newPlaceholder,
  loading,
  disabled,
  prefix,
  suffix,
  isClearable,
  children,
}) => {
  const createPortal = usePortal();
  const inputRef = React.useRef<HTMLDivElement | null>(null);
  const optionsRef = React.useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(inputRef, {
    root: rootRef?.current || null,
    threshold: 1,
  });
  const isScrolling = useScrolling(rootRef || React.createRef());
  const isWindowScrolling = useWindowScroll();
  const isMouseScrolling = useMouseWheel();

  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const [options, setOptions] = React.useState<Option[]>([]);
  const [cacheOptions, setCacheOptions] = React.useState<Option[]>([]);
  const [newOption, setNewOption] = React.useState<string | undefined>();

  const [optionsStyle, setOptionsStyle] = React.useState({});
  const [maxHeight, setMaxHeight] = React.useState(350);

  React.useEffect(() => {
    if (openDropdown && intersection && intersection.intersectionRatio < 1) {
      setOpenDropdown(false);
    }
  }, [intersection, openDropdown]);

  React.useEffect(() => {
    if (!loading) {
      setLoaded(false);
    }
  }, [loading]);

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

      setCacheOptions(data);
    }
  }, [options, value, selected, cacheOptions, onSelect]);

  const childs = React.useMemo(() => {
    const childrens = React.Children.toArray(children) as GenericObject[];
    const optionsEl = childrens.find((child) => child.type === Options);

    return [...childrens, ...(!optionsEl ? (React.Children.toArray(<Options />) as GenericObject[]) : [])];
  }, [children]);

  const $options = React.useMemo(() => {
    const child = childs.find((i) => i.type === Options);

    return !!optionsList.length
      ? optionsList
      : !!child?.props?.children?.length
      ? child.props.children.map((i) => ({
          text: i.props.children,
          ...i.props,
        }))
      : optionsList;
  }, [optionsList, childs]);

  const searchEl = React.useMemo(() => childs.find((child) => child.type === Search), [childs]);

  const isBox = React.useMemo(() => optionsMode === 'box', [optionsMode]);
  const isSearch = React.useMemo(() => (searchEl && !!searchEl.props?.value?.length) || false, [searchEl]);
  const paginationProps = React.useMemo(() => childs.find((child) => child.type === Pagination)?.props, [childs]);

  React.useEffect(() => {
    if (!isBox && openDropdown && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const offsetTop = rect.top + rect.height;
      const style = {
        position: 'absolute',
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        top: `${offsetTop}px`,
        bottom: `auto`,
        zIndex: `9999999`,
      };

      if (!isEqual(style, optionsStyle)) {
        setOptionsStyle(style);
        setMaxHeight(window.innerHeight - offsetTop - 50);
      }
    }
  }, [openDropdown, inputRef, optionsStyle, isScrolling, isWindowScrolling, isMouseScrolling]);

  React.useEffect(() => {
    if (searchEl?.props?.value !== undefined && search !== searchEl.props.value) {
      setLoaded(false);
      setSearch(searchEl.props.value);
    }
  }, [searchEl]);

  React.useEffect(() => {
    if (!isBox && !openDropdown && searchEl && searchEl.props?.value?.length) {
      searchEl.props.onSearch('');
    }
  }, [isBox, openDropdown, searchEl]);

  const hasValue = React.useMemo(
    () => (!isArray(value) && value !== undefined) || (isArray(value) && (value as OptionValue[]).length > 0),
    [value],
  );

  const textValue = React.useMemo(() => {
    if (isArray(value)) {
      return cacheOptions
        .filter((option) => (value as OptionValue[]).includes(option.value))
        .map((option) => option.text);
    }

    return (cacheOptions.find((option) => option.value === value) || { text: value }).text;
  }, [value, cacheOptions]);

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
    (key: number) => {
      if (isArray(value)) {
        const newValue = (value as OptionValue[]).filter((_, $key) => key !== $key);

        if (onChange !== undefined) {
          onChange(newValue);
        }
      }
    },
    [value, onChange],
  );

  const onToggleOpenDropdown = (): void => setOpenDropdown((s) => !s);

  useClickAway(inputRef, (e) => {
    if (openDropdown && !isBox && optionsRef.current && !optionsRef.current.contains(e.target as Node)) {
      setOpenDropdown(false);
    }
  });

  React.useEffect(() => {
    if ((!paginationProps || paginationProps.page === 1) && !isSearch && !isEqual($options, options)) {
      setOptions($options);
    }
  }, [$options, options, isSearch]);

  React.useEffect(() => {
    if (!isEqual($options, options, 'value') && !loaded) {
      setLoaded(true);
      setOptions(() => {
        if (paginationProps?.mode === 'scroll' && !isSearch) {
          return uniqueArray(options, $options) as Option[];
        } else {
          return $options;
        }
      });

      if (isSearch) {
        setLoaded(false);
      }
    }
  }, [$options, options, loaded, paginationProps, isSearch, setLoaded, setOptions]);

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
        setLoaded(false);
      }
    }
  }, [paginationProps]);

  const onClear = (): void => onChangeHandler(mode === 'single' ? undefined : []);

  const onClickAddNew = React.useCallback(() => {
    if (onAddNew && newOption) {
      onAddNew(newOption);
      setNewOption(undefined);

      if (onSearch) {
        onSearch('');
      }

      onChangeHandler(newOption);
    }
  }, [newOption, onAddNew, onSearch]);

  useEventListener(
    'keypress',
    ({ key, ctrlKey }: { key: string; ctrlKey: boolean }) => {
      if (ctrlKey && ['Enter'].includes(key)) {
        onClickAddNew();
      }
    },
    inputRef,
  );

  const optionsBlock = React.useMemo(
    () => (
      <div ref={optionsRef} className={cn(`ebs-select__options`, className)} style={optionsStyle}>
        {childs.map((child, i) => {
          if (child.type === Options) {
            return (
              <Options
                key={i}
                mode={mode}
                scrollMode={paginationProps && paginationProps.mode === 'scroll'}
                options={options}
                value={value}
                loading={loading}
                className={cn({ 'ebs-select--box': isBox })}
                emptyLabel={emptyLabel}
                maxHeight={maxHeight > 250 ? 250 : maxHeight}
                newOption={newOption}
                onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
                onChange={onChangeHandler}
                onPrev={onPrev}
                onNext={onNext}
                onClickAddNew={onClickAddNew}
                {...child.props}
              />
            );
          } else if (child.type === Pagination && child.props.mode === 'scroll') {
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
      maxHeight,
      newOption,
      onToggleOpenDropdown,
      onChangeHandler,
      onPrev,
      onNext,
      onClickAddNew,
    ],
  );

  const onKeyDownNewOption = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (onSearch && e.keyCode === 13 && newOption?.length) {
        onSearch(newOption);
      }
    },
    [newOption, onSearch],
  );

  const onChangeNewOption = React.useCallback((value) => {
    setOpenDropdown(true);
    setNewOption(value);
  }, []);

  return (
    <div
      ref={inputRef}
      className={cn(`ebs-select__wrapper`, `ebs-select--${mode}`, className, {
        active: hasValue,
        disabled: disabled,
      })}
    >
      <Label text={label} disabled={disabled} />

      <div className="ebs-select-dropdown__wrapper">
        <div className="ebs-select-dropdown__container">
          {prefix && <div className="ebs-select__prefix">{prefix}</div>}

          <div
            className={cn('ebs-select', `ebs-select--${size}`, {
              'ebs-select--box': isBox,
              'ebs-select--tags': mode === 'tags',
              'has-suffix': suffix,
            })}
            onClick={onToggleOpenDropdown}
          >
            <div className="ebs-select-value">
              <div className="ebs-select-value__container">
                {loading ? (
                  <Loader.Inline />
                ) : isArray(textValue) ? (
                  (textValue as React.ReactNode[]).map((item, key) => (
                    <Label
                      key={key}
                      className="ebs-select-label"
                      type="primary"
                      circle
                      text={item}
                      suffix={!disabled ? <Icon type="close" model="bold" /> : undefined}
                      onClickSuffix={() => !disabled && onDeleteSelect(key)}
                    />
                  ))
                ) : (
                  textValue || placeholder
                )}
              </div>
              {mode === 'tags' && (
                <Input
                  size="small"
                  placeholder={newPlaceholder}
                  value={newOption}
                  onChange={onChangeNewOption}
                  onKeyDown={onKeyDownNewOption}
                />
              )}
            </div>

            {hasValue && isArray(textValue) ? (
              <div className="ebs-select-count" style={isBox ? { right: '1rem' } : undefined}>
                {(textValue as OptionValue[]).length}
              </div>
            ) : null}

            {hasValue && isClearable ? (
              <div className="ebs-select__clear">
                <Button size="small" type="primary" onClick={onClear}>
                  <Icon type="close" model="bold" />
                </Button>
              </div>
            ) : null}

            {!isBox && (
              <div className="ebs-select__suffix">
                <Icon type={`arrow-${!disabled && openDropdown ? 'top' : 'bottom'}`} model="bold" />
              </div>
            )}

            {hasValue && isArray(textValue) ? <div className="ebs-select-transition" /> : null}
          </div>

          {suffix && <div className="ebs-select__suffix">{suffix}</div>}
        </div>

        {!disabled && (openDropdown || isBox) && (isBox ? optionsBlock : createPortal(optionsBlock))}
      </div>
    </div>
  );
};

Select.displayName = 'Select';

Select.Search = Search;
Select.Options = Options;
Select.Pagination = Pagination;

export { Select };
