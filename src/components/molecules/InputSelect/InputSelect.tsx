import React, { FC, ReactNode, useCallback, useRef, useState, useEffect, useMemo, Children } from 'react';
import { useUpdateEffect, useClickAway } from 'react-use';
import cn from 'classnames';
import { Extra, Label, Icon } from 'components/atoms';
import { SelectDropdown } from 'components/molecules';
import { Option, OptionProps } from './InputSelectOption';

export type SelectSize = 'small' | 'medium' | 'large';

export type InputSelectMode = 'single' | 'multiple';

export type Option = OptionProps;

export type Value = string | number;

export interface Props {
  mode?: InputSelectMode;
  className?: string;
  size?: SelectSize;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  options?: Option[];
  initialOptions?: Option[];
  value?: Value | Value[];
  onChange?: (value?: Value | Value[]) => void;
  children?: ReactNode;
  showSearch?: boolean;
  onSearch?: (search: string) => void;
  loading?: boolean;
  loadMore?: () => void;
  hasMore?: boolean;
}
export interface InputSelectFC extends React.ForwardRefExoticComponent<Props & React.RefAttributes<any>> {
  Option: FC<OptionProps>;
}

const InputSelect = React.forwardRef<any, Props>(
  (
    {
      mode = 'single',
      options = [],
      size = 'medium',
      className,
      hasError,
      label,
      extra,
      onChange,
      placeholder,
      disabled,
      initialOptions = [],
      showSearch,
      onSearch,
      children,
      loading,
      loadMore,
      hasMore,
      ...props
    },
    ref,
  ) => {
    const { value } = props;
    const inputRef = useRef(ref as HTMLDivElement | null);
    const isControlled = useMemo(() => props.hasOwnProperty('value'), [props.value]);
    const [selectedValue, setSelectedValue] = useState<Value | Value[] | undefined>(
      mode === 'multiple' ? value ?? [] : value,
    );
    const _options = useMemo(
      () => [
        ...Children.toArray(children)
          .filter((child: any) => child.type === Option)
          .map((child: any) => child.props),
        ...options,
      ],
      [options, children],
    );

    const getSelectedOption = useCallback(
      (selectedValue, additionalOptions = []) => {
        const options = [...additionalOptions, ..._options];
        if (Array.isArray(selectedValue)) {
          return selectedValue.map(
            (value) => options.find((option) => option.value === value) ?? { value, text: value },
          );
        }
        return (
          options.find((option) => selectedValue === option.value) ?? { value: selectedValue, text: selectedValue }
        );
      },
      [_options],
    );

    const [selectedOption, setSelectedOption] = useState<Option | Option[] | undefined>(
      getSelectedOption(selectedValue, initialOptions),
    );

    const [openDropdown, setOpenDropdown] = useState(false);

    useEffect(() => {
      if (isControlled) {
        if (mode === 'multiple' && !Array.isArray(value)) {
          throw new Error('In multiple mode value should be an array!');
        } else if (mode === 'single' && Array.isArray(value)) {
          throw new Error('In single mode value can not be an array!');
        }
      }
    }, [isControlled, value, mode]);

    useUpdateEffect(() => {
      setSelectedValue(value);
      setSelectedOption(getSelectedOption(value, selectedOption));
    }, [value]);

    const onChangeHandler = (value: Value): void => {
      let newValue;
      if (mode === 'single') {
        if (value !== selectedValue) {
          newValue = value;
        }
      } else if (mode === 'multiple' && Array.isArray(selectedValue)) {
        if (selectedValue.includes(value)) {
          newValue = selectedValue.filter((item) => value !== item);
        } else {
          newValue = [...selectedValue, value];
        }
      } else {
        newValue = value;
      }

      if (onChange) {
        onChange(newValue);
      }

      if (!isControlled) {
        setSelectedValue(newValue);
        setSelectedOption(getSelectedOption(newValue, selectedOption));
      }
    };

    const renderValue = useMemo(
      () =>
        Array.isArray(selectedOption)
          ? selectedOption.length
            ? selectedOption.map((option) => (
                <Label
                  key={option.value}
                  className="ebs-select__input-label"
                  type="primary"
                  circle
                  text={option.text}
                  prefix={<Icon type="check" />}
                  suffix={<Icon type="close" />}
                  onClickSuffix={(e) => {
                    e.stopPropagation();
                    onChangeHandler(option.value);
                  }}
                />
              ))
            : placeholder
          : selectedOption?.text || placeholder,
      [selectedOption, placeholder],
    );

    const onToggleOpenDropdown = (): void => setOpenDropdown((s) => !s);

    useClickAway(inputRef, () => {
      if (openDropdown) {
        setOpenDropdown(false);
      }
    });

    const hasValue = useMemo(() => {
      if (Array.isArray(selectedValue)) {
        return selectedValue.length > 0;
      }
      return selectedValue !== undefined;
    }, [selectedValue]);

    const iconType = useMemo(() => `arrow-${openDropdown ? 'top' : 'bottom'}`, [openDropdown]);

    return (
      <div
        ref={inputRef}
        className={cn(`ebs-select__input-wrapper`, `ebs-select__input--${mode}`, className, {
          active: hasValue,
          'has-error': hasError,
          disabled: disabled,
        })}
      >
        <Label text={label} disabled={disabled} />

        <div className="ebs-select__input-dropdown-wrapper">
          <div className={cn('ebs-select__input', `ebs-select__input--${size}`)} onClick={onToggleOpenDropdown}>
            <div className="ebs-select__input-value">{renderValue}</div>

            {Array.isArray(selectedOption) && hasValue && (
              <>
                <div className="ebs-select__input-transition" />

                <div className="ebs-select__input-count">{selectedOption.length}</div>
              </>
            )}

            <div className="ebs-select__input-suffix">
              <Icon type={iconType} />
            </div>
          </div>

          {openDropdown && (
            <SelectDropdown
              mode={mode}
              options={_options}
              value={selectedValue}
              onChange={onChangeHandler}
              onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
              showSearch={showSearch}
              onSearch={onSearch}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
            />
          )}
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
) as InputSelectFC;

InputSelect.Option = Option;

export { InputSelect };
