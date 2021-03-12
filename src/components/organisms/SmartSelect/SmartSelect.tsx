import * as React from 'react';
import useClickAway from 'react-use/esm/useClickAway';
import cn from 'classnames';
import { Extra, Label, Icon } from 'components/atoms';
import { Loader } from 'components/molecules';
import { isEqualArrays, uniqueArray } from 'libs';
import { GenericObject } from 'types';

import { SmartSelectDropdown } from './SmartSelectDropdown';
import { Search } from './Search';
import { Option } from './Option';
import { Pagination } from './Pagination';

export interface SmartSelectComposition {
  Option: React.FC<any>;
  Search: React.FC<any>;
  Pagination: React.FC<any>;
}

export type SelectSize = 'small' | 'medium' | 'large';
export type SmartSelectMode = 'single' | 'multiple';
export type SmartSelectOptionsMode = 'dropdown' | 'box';
export type SelectValue = string | number;
export type Option = {
  value: SelectValue;
  text: React.ReactNode;
};

export interface SmartSelectProps {
  mode?: SmartSelectMode;
  optionsMode?: SmartSelectOptionsMode;
  className?: string;
  size?: SelectSize;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  options?: Option[];
  showSearch?: boolean;

  value?: SelectValue | SelectValue[];
  onChange?: (value: SelectValue | SelectValue[]) => void;
}

const SmartSelect: any & SmartSelectComposition = React.forwardRef<any, SmartSelectProps>(
  (
    {
      mode = 'single',
      optionsMode = 'dropdown',
      options: optionsList = [],
      size = 'medium',
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
    const [loaded, setLoaded] = React.useState(false);
    const [options, setOptions] = React.useState<Option[]>([]);

    const childs = React.Children.toArray(children) as GenericObject[];
    const elSearch = childs.find((child) => child.type === Search);
    const elPagination = childs.find((child) => child.type === Pagination);

    const paginationProps = (elPagination && elPagination.props) || {};
    const isScrollModePagination = paginationProps.mode === 'scroll';

    const $value = React.useMemo(() => (hasExternalValue ? value : scopeValue), [value, scopeValue, hasExternalValue]);

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
      if (!isEqualArrays($options, options) && !loaded) {
        setOptions((i) => {
          if (isScrollModePagination) {
            setLoaded(true);

            return uniqueArray(i, $options) as Option[];
          } else {
            return $options;
          }
        });
      }
    }, [$options]);

    const hasValue = React.useMemo(() => {
      const isValueArray = Array.isArray($value);
      return (
        (!isValueArray && $value !== undefined) || (isValueArray && $value && ($value as SelectValue[]).length > 0)
      );
    }, [$value]);

    const textValue = React.useMemo(() => {
      if (Array.isArray($value)) {
        return options.filter((option) => $value.includes(option.value)).map((option) => option.text);
      }

      return (options.find((option) => option.value === $value) || { text: $value }).text;
    }, [$value, options]);

    React.useEffect(() => {
      if (value) {
        setHasExternalValue(true);
      }
    }, [value]);

    const onChangeHandler = (newValue?: any): void => {
      const $newValue = mode === 'single' ? (newValue === $value ? undefined : newValue) : newValue;

      const newModeValue =
        mode === 'multiple'
          ? Array.isArray($value) && $value.includes($newValue)
            ? $value.filter((item) => $newValue !== item)
            : [...(Array.isArray($value) ? $value : []), $newValue]
          : $newValue;

      if (onChange) {
        onChange(newModeValue);
      }

      if (!hasExternalValue) {
        setScopeValue(newModeValue);
      }
    };

    const onDeleteSelect = (key: number): void => {
      if (Array.isArray($value)) {
        const newValue = $value.filter((_, $key) => key !== $key);

        if (onChange !== undefined) {
          onChange(newValue);
        }

        if (!hasExternalValue) {
          setScopeValue(newValue);
        }
      }
    };

    const onToggleOpenDropdown = (): void => setOpenDropdown((s) => !s);

    const isArrayValue = React.useMemo(() => textValue && Array.isArray(textValue) && textValue.length > 0, [
      textValue,
    ]);

    const renderValue = React.useMemo(
      () =>
        isArrayValue && textValue
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
      [disabled, isArrayValue, textValue, placeholder],
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

        setLoaded(false);
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

            {hasValue && textValue && Array.isArray(textValue) && (
              <>
                <div className="ebs-smart-select__input-transition" />

                <div className="ebs-smart-select__input-count" style={isBox ? { right: '1rem' } : undefined}>
                  {textValue.length}
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
            <SmartSelectDropdown
              mode={mode}
              options={options}
              value={$value}
              onChange={onChangeHandler}
              loading={loading}
              onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
              className={cn({ 'ebs-select__dropdown--box': isBox })}
              onPrev={onPrev}
              onNext={onNext}
            >
              {elSearch}
              {elPagination}
            </SmartSelectDropdown>
          )}
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);

SmartSelect.displayName = 'SmartSelect';

SmartSelect.Search = Search;
SmartSelect.Option = Option;
SmartSelect.Pagination = Pagination;

export { SmartSelect };
