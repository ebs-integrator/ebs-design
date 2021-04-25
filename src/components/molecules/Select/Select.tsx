import * as React from 'react';
import useClickAway from 'react-use/esm/useClickAway';
import cn from 'classnames';
import { Label, Icon } from 'components/atoms';
import { Loader } from 'components/molecules';
import { isArray, isEqualArrays, uniqueArray } from 'libs';
import { GenericObject, SizeType } from 'types';

import { Search } from './Search';
import { Pagination, PaginationProps } from './Pagination';
import { Options, OptionsProps, OptionsComposition } from './Options';

import { InputSearchProps } from '../InputSearch/InputSearch';

export interface SelectComposition {
  Options: React.FC<OptionsProps> & OptionsComposition;
  Search: React.FC<InputSearchProps>;
  Pagination: React.FC<PaginationProps>;
}

export type SelectMode = 'single' | 'multiple';
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
  loading?: boolean;
  disabled?: boolean;
  options?: Option[];
  emptyLabel?: string;
  prefix?: React.ReactNode;

  value?: OptionValue | OptionValue[];
  onChange?: (value: OptionValue | OptionValue[]) => void;
}

const Select: React.FC<SelectProps> & SelectComposition = ({
  mode = 'single',
  optionsMode = 'dropdown',
  options: optionsList = [],
  size = 'medium',
  emptyLabel,
  className,
  label,
  value,
  onChange,
  placeholder,
  loading,
  disabled,
  prefix,
  children,
}) => {
  const inputRef = React.useRef<HTMLDivElement | null>(null);

  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  const [options, setOptions] = React.useState<Option[]>([]);
  const [cacheOptions, setCacheOptions] = React.useState<Option[]>([]);

  React.useEffect(() => {
    if (!loading) {
      setLoaded(false);
    }
  }, [loading]);

  React.useEffect(() => {
    if (value) {
      setCacheOptions((i) => {
        const cache = options.filter(
          (i) => (isArray(value) && (value as OptionValue[]).includes(i.value)) || value === i.value,
        );

        return cache.length ? cache : i;
      });
    } else setCacheOptions([]);
  }, [options, value]);

  const childs = React.useMemo(() => React.Children.toArray(children) as GenericObject[], [children]);

  const $options = React.useMemo(() => {
    const child = childs.find((i) => i.type === Options);

    return !!optionsList.length
      ? optionsList
      : !!child?.props?.children?.length
      ? child.props.children.map((i) => ({
          value: i.props.value,
          text: i.props.children,
        }))
      : optionsList;
  }, [optionsList, childs]);

  const isBox = React.useMemo(() => optionsMode === 'box', [optionsMode]);
  const isSearch = React.useMemo(() => !!childs.find((child) => child.type === Search)?.props?.value?.length || false, [
    childs,
  ]);
  const paginationProps = React.useMemo(() => childs.find((child) => child.type === Pagination)?.props || {}, [childs]);

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
        mode === 'multiple'
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

  useClickAway(inputRef, () => {
    if (openDropdown && !isBox) {
      setOpenDropdown(false);
    }
  });

  React.useEffect(() => {
    if ((!isEqualArrays($options, options) && !loaded) || isSearch) {
      setOptions(() => {
        if (paginationProps.mode === 'scroll' && !isSearch) {
          setLoaded(true);

          return uniqueArray(options, $options) as Option[];
        } else return $options;
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
        {prefix && <div className="ebs-select__prefix">{prefix}</div>}
        <div
          className={cn('ebs-select', `ebs-select--${size}`, {
            'ebs-select--box': isBox,
          })}
          onClick={onToggleOpenDropdown}
        >
          <div className="ebs-select-value">
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
                  prefix={<Icon type="check" />}
                  suffix={!disabled ? <Icon type="close" /> : undefined}
                  onClickSuffix={() => !disabled && onDeleteSelect(key)}
                />
              ))
            ) : (
              textValue || placeholder
            )}
          </div>

          {hasValue && isArray(textValue) && (
            <>
              <div className="ebs-select-transition" />

              <div className="ebs-select-count" style={isBox ? { right: '1rem' } : undefined}>
                {(textValue as OptionValue[]).length}
              </div>
            </>
          )}

          {!isBox && (
            <div className="ebs-select__suffix">
              <Icon type={`arrow-${!disabled && openDropdown ? 'top' : 'bottom'}`} />
            </div>
          )}
        </div>

        {!disabled && (openDropdown || isBox) && (
          <div className={cn(`ebs-select__options`, className)}>
            {childs.map((child, i) => {
              if (child.type === Options) {
                return (
                  <Options
                    key={i}
                    mode={mode}
                    scrollMode={paginationProps.mode === 'scroll'}
                    options={options}
                    value={value}
                    loading={loading}
                    className={cn({ 'ebs-select--box': isBox })}
                    emptyLabel={emptyLabel}
                    onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
                    onChange={onChangeHandler}
                    onPrev={onPrev}
                    onNext={onNext}
                    {...child.props}
                  />
                );
              } else if (child.type === Pagination && child.props.mode === 'scroll') {
                return null;
              }

              return child;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

Select.displayName = 'Select';

Select.Search = Search;
Select.Options = Options;
Select.Pagination = Pagination;

export { Select };