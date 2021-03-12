import * as React from 'react';
import useClickAway from 'react-use/esm/useClickAway';
import cn from 'classnames';
import { Extra, Label, Icon } from 'components/atoms';
import { Loader } from 'components/molecules';
import { isArray, isEqualArrays, uniqueArray } from 'libs';
import { GenericObject } from 'types';

import { SelectDropdown } from './SelectDropdown';
import { Search } from './Search';
import { Option } from './Option';
import { Pagination } from './Pagination';

export interface SelectComposition {
  Option: React.FC<any>;
  Search: React.FC<any>;
  Pagination: React.FC<any>;
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
  size?: 'small' | 'medium' | 'large';
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  options?: Option[];
  emptyLabel?: string;

  value?: OptionValue | OptionValue[];
  onChange?: (value: OptionValue | OptionValue[]) => void;
}

const Select: any & SelectComposition = React.forwardRef<any, SelectProps>(
  (
    {
      mode = 'single',
      optionsMode = 'dropdown',
      options: optionsList = [],
      size = 'medium',
      emptyLabel,
      className,
      hasError,
      label,
      extra,
      value,
      onChange,
      placeholder,
      loading,
      disabled,
      children,
    },
    ref,
  ) => {
    const inputRef = React.useRef(ref as HTMLDivElement | null);

    const [scopeValue, setScopeValue] = React.useState(value);

    const [hasExternalValue, setHasExternalValue] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const [options, setOptions] = React.useState<Option[]>([]);
    const [cacheOptions, setCacheOptions] = React.useState<Option[]>([]);

    const childs = React.Children.toArray(children) as GenericObject[];
    const elSearch = childs.find((child) => child.type === Search);
    const elPagination = childs.find((child) => child.type === Pagination);

    const paginationProps = (elPagination && elPagination.props) || {};
    const isScrollModePagination = paginationProps.mode === 'scroll';

    const $value = React.useMemo(() => (hasExternalValue ? value : scopeValue), [value, scopeValue, hasExternalValue]);

    React.useEffect(() => {
      if ($value) {
        setCacheOptions((i) => {
          const cache = options.filter(
            (i) => (isArray($value) && ($value as OptionValue[]).includes(i.value)) || $value === i.value,
          );

          return cache.length ? cache : i;
        });
      } else setCacheOptions([]);
    }, [options, $value]);

    const $options = React.useMemo(
      () =>
        optionsList.length
          ? optionsList
          : childs
              .filter((i) => ![Search, Pagination].includes(i.type))
              .map((i) => ({ value: i.props.value, text: i.props.children })),
      [optionsList],
    );

    React.useEffect(() => {
      if (!isEqualArrays($options, options) && !scrolled) {
        setOptions((i) => {
          if (isScrollModePagination) {
            setScrolled(true);

            return uniqueArray(i, $options) as Option[];
          } else return $options;
        });
      }
    }, [$options]);

    const hasValue = React.useMemo(
      () => (!isArray($value) && $value !== undefined) || (isArray($value) && ($value as OptionValue[]).length > 0),
      [$value],
    );

    const textValue = React.useMemo(() => {
      if (isArray($value)) {
        return cacheOptions
          .filter((option) => ($value as OptionValue[]).includes(option.value))
          .map((option) => option.text);
      }

      return (cacheOptions.find((option) => option.value === $value) || { text: $value }).text;
    }, [$value, cacheOptions]);

    React.useEffect(() => {
      if (value) {
        setHasExternalValue(true);
      }
    }, [value]);

    const onChangeHandler = (newValue?: any): void => {
      const $newValue = mode === 'single' ? (newValue === $value ? undefined : newValue) : newValue;

      const newModeValue =
        mode === 'multiple'
          ? isArray($value) && ($value as OptionValue[]).includes($newValue)
            ? ($value as OptionValue[]).filter((item) => $newValue !== item)
            : [...(isArray($value) ? ($value as OptionValue[]) : []), $newValue]
          : $newValue;

      if (onChange) {
        onChange(newModeValue);
      }

      if (!hasExternalValue) {
        setScopeValue(newModeValue);
      }
    };

    const onDeleteSelect = (key: number): void => {
      if (isArray($value)) {
        const newValue = ($value as OptionValue[]).filter((_, $key) => key !== $key);

        if (onChange !== undefined) {
          onChange(newValue);
        }

        if (!hasExternalValue) {
          setScopeValue(newValue);
        }
      }
    };

    const onToggleOpenDropdown = (): void => setOpenDropdown((s) => !s);

    const renderValue = React.useMemo(
      () =>
        isArray(textValue)
          ? (textValue as React.ReactNode[]).map((item, key) => (
              <Label
                key={key}
                className="ebs-smart-select__input-label"
                type="primary"
                circle
                text={item}
                prefix={<Icon type="check" />}
                suffix={!disabled ? <Icon type="close" /> : undefined}
                onClickSuffix={() => !disabled && onDeleteSelect(key)}
              />
            ))
          : textValue || placeholder,
      [disabled, textValue, placeholder],
    );

    const isBox = React.useMemo(() => optionsMode === 'box', [optionsMode]);

    const iconType = React.useMemo(() => `arrow-${!disabled && openDropdown ? 'top' : 'bottom'}`, [
      disabled,
      openDropdown,
    ]);

    useClickAway(inputRef, () => {
      if (openDropdown && !isBox) {
        setOpenDropdown(false);
      }
    });

    const onPrev = (): void => {
      if (elPagination) {
        const { page, setPage } = elPagination.props;

        if (page > 1) {
          setPage(page - 1);
        }
      }
    };

    const onNext = (): void => {
      if (elPagination) {
        const { page, count, limit, setPage } = elPagination.props;

        if (page < Math.ceil(count / limit)) {
          setPage(page + 1);
        }

        if (isScrollModePagination) {
          setScrolled(false);
        }
      }
    };

    return (
      <div
        ref={inputRef}
        className={cn(`ebs-smart-select__input-wrapper`, `ebs-smart-select__input--${mode}`, className, {
          active: hasValue,
          'has-error': hasError,
          disabled: disabled,
        })}
      >
        <Label text={label} disabled={disabled} />

        <div className="ebs-smart-select__input-dropdown-wrapper">
          <div
            className={cn('ebs-smart-select__input', `ebs-smart-select__input--${size}`, {
              'ebs-smart-select__input--box': isBox,
            })}
            onClick={onToggleOpenDropdown}
          >
            <div className="ebs-smart-select__input-value">{loading ? <Loader.Inline /> : renderValue}</div>

            {hasValue && isArray(textValue) && (
              <>
                <div className="ebs-smart-select__input-transition" />

                <div className="ebs-smart-select__input-count" style={isBox ? { right: '1rem' } : undefined}>
                  {(textValue as OptionValue[]).length}
                </div>
              </>
            )}

            {!isBox && (
              <div className="ebs-smart-select__input-suffix">
                <Icon type={iconType} />
              </div>
            )}
          </div>

          {!disabled && (openDropdown || isBox) && (
            <SelectDropdown
              mode={mode}
              options={options}
              value={$value}
              onChange={onChangeHandler}
              loading={loading}
              onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
              className={cn({ 'ebs-select__dropdown--box': isBox })}
              emptyLabel={emptyLabel}
              onPrev={onPrev}
              onNext={onNext}
            >
              {elSearch}
              {elPagination}
            </SelectDropdown>
          )}
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);

Select.displayName = 'Select';

Select.Search = Search;
Select.Option = Option;
Select.Pagination = Pagination;

export { Select };
