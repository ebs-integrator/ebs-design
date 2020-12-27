import * as React from 'react';
import cn from 'classnames';
import { Extra, Label, Icon, Mask } from 'components/atoms';

import { SelectDropdown } from '..';

export type InputSelectMode = 'single' | 'multiple';

export type Option = {
  // TODO: decide the type
  value: any;
  text: string;
};

export interface Props {
  mode?: InputSelectMode;
  className?: string;
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
}

export const InputSelect: React.FC<Props> = ({
  mode = 'single',
  className,
  hasError,
  label,
  extra,
  options,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  const [scopeValue, setScopeValue] = React.useState(undefined);
  const [hasExternalValue, setHasExternalValue] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const $value = React.useMemo(() => (hasExternalValue ? value : scopeValue), [value, scopeValue, hasExternalValue]);

  const hasValue = React.useMemo(() => {
    const isValueArray = Array.isArray($value);
    return (!isValueArray && $value !== undefined) || (isValueArray && $value.length > 0);
  }, [$value]);

  const textValue = React.useMemo(() => {
    if (options) {
      if (typeof $value === 'string') {
        return (options.find((option) => option.value === $value) || { text: '' }).text;
      }

      if (Array.isArray($value)) {
        return options.filter((option) => $value.includes(option.value)).map((option) => option.text);
      }
    }

    return undefined;
  }, [$value, options]);

  React.useEffect(() => {
    if (value) {
      setHasExternalValue(true);
    }
  }, [value]);

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

    if (onChange !== undefined) {
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

  const renderValue = React.useMemo(
    () =>
      textValue
        ? Array.isArray(textValue)
          ? textValue.length > 0
            ? textValue.map((item, key) => (
                <Label
                  key={item}
                  className="ebs-select__input-label"
                  type="circle"
                  status="primary"
                  text={item}
                  prefix={<Icon type="check" />}
                  suffix={<Icon type="close" />}
                  onClickSuffix={() => onDeleteSelect(key)}
                />
              ))
            : placeholder
          : textValue
        : placeholder,
    [textValue, placeholder],
  );

  return (
    <>
      {openDropdown && <Mask onClick={onToggleOpenDropdown} />}

      <div
        className={cn(
          `ebs-select__input-wrapper`,
          `ebs-select__input-mode-${mode}`,
          className,
          hasValue && `active`,
          hasError && `has-error`,
          disabled && `disabled`,
        )}
      >
        <Label text={label} disabled={disabled} />

        <div className="ebs-select__input-dropdown-wrapper">
          <div className="ebs-select__input" onClick={onToggleOpenDropdown}>
            <div className="ebs-select__input-value">{renderValue}</div>

            {hasValue && textValue && mode === 'multiple' && (
              <>
                <div className="ebs-select__input-transition" />

                <div className="ebs-select__input-count">{textValue.length}</div>
              </>
            )}

            <div className="ebs-select__input-suffix">
              <Icon type={`arrow-${openDropdown ? 'top' : 'bottom'}`} />
            </div>
          </div>

          {openDropdown && (
            <SelectDropdown
              mode={mode}
              options={options}
              value={$value}
              onChange={onChangeHandler}
              onClose={onToggleOpenDropdown}
            />
          )}
        </div>

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    </>
  );
};
