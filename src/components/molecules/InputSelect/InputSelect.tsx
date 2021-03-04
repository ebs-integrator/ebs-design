import * as React from 'react';
import { useClickAway } from 'react-use';
import cn from 'classnames';
import { Extra, Label, Icon } from 'components/atoms';
import { SelectDropdown } from 'components/molecules';

export type SelectSize = 'small' | 'medium' | 'large';

export type InputSelectMode = 'single' | 'multiple';

export type Option = {
  // TODO: decide the type
  value: any;
  text: string;
};

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

  // TODO: decide the type
  value?: any;
  // TODO: decide the type
  onChange?: (value: any) => void;

  // FIXME: Remove this prop and refactor with compound components
  showSearch?: boolean;
}

export const InputSelect = React.forwardRef<any, Props>(
  (
    {
      mode = 'single',
      options = [],
      size = 'medium',
      className,
      hasError,
      label,
      extra,
      value,
      onChange,
      placeholder,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef(ref as HTMLDivElement | null);
    const [scopeValue, setScopeValue] = React.useState(value);
    const [hasExternalValue, setHasExternalValue] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(false);

    const $value = React.useMemo(() => (hasExternalValue ? value : scopeValue), [value, scopeValue, hasExternalValue]);

    const hasValue = React.useMemo(() => {
      const isValueArray = Array.isArray($value);
      return (!isValueArray && $value !== undefined) || (isValueArray && $value.length > 0);
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

    useClickAway(inputRef, () => {
      if (openDropdown) {
        setOpenDropdown(false);
      }
    });

    // TODO: decide the type
    const onChangeHandler = (newValue?: any): void => {
      const $newValue = mode === 'single' ? (newValue === $value ? undefined : newValue) : newValue;

      const newModeValue =
        mode === 'multiple'
          ? $value && $value.includes($newValue)
            ? // TODO: decide the type
              $value.filter((item: any) => $newValue !== item)
            : [...($value || []), $newValue]
          : $newValue;

      if (onChange) {
        onChange(newModeValue);
      }

      if (!hasExternalValue) {
        setScopeValue(newModeValue);
      }
    };

    const onDeleteSelect = (key: number): void => {
      if (mode === 'multiple') {
        // TODO: decide the type
        const newValue = $value.filter((_: any, $key: number) => key !== $key);

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
        isArrayValue
          ? (textValue as string[]).map((item, key) => (
              <Label
                key={item}
                className="ebs-select__input-label"
                type="primary"
                circle
                text={item}
                prefix={<Icon type="check" />}
                suffix={!disabled ? <Icon type="close" /> : undefined}
                onClickSuffix={() => disabled && onDeleteSelect(key)}
              />
            ))
          : textValue || placeholder,
      [disabled, isArrayValue, textValue, placeholder],
    );

    const iconType = React.useMemo(() => `arrow-${!disabled && openDropdown ? 'top' : 'bottom'}`, [
      disabled,
      openDropdown,
    ]);

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

            {hasValue && textValue && mode === 'multiple' && (
              <>
                <div className="ebs-select__input-transition" />

                <div className="ebs-select__input-count">{textValue.length}</div>
              </>
            )}

            <div className="ebs-select__input-suffix">
              <Icon type={iconType} />
            </div>
          </div>

          {!disabled && openDropdown && (
            <SelectDropdown
              mode={mode}
              options={options}
              value={$value}
              onChange={onChangeHandler}
              onClose={mode !== 'multiple' ? onToggleOpenDropdown : undefined}
              showSearch={props.showSearch}
            />
          )}
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
