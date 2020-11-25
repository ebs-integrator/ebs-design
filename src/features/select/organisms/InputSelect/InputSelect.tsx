import * as React from 'react';
import { Extra, Label, Icon, Mask } from 'atoms';

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
  className = '',
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
        return (options.find((option) => option.value === $value) || {}).text;
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

  return (
    <>
      {openDropdown && <Mask onClick={onToggleOpenDropdown} />}

      <div
        className={`ebs-select-input-wrapper ebs-select-input-mode-${mode}${hasValue ? ' active' : ''}${
          hasError ? ' has-error' : ''
        }${disabled ? ' disabled' : ''} ${className}`}
      >
        <Label text={label} disabled={disabled} />

        <div className="ebs-select-input-dropdown-wrapper">
          <div className="ebs-select-input" onClick={onToggleOpenDropdown}>
            <div className="ebs-select-input-value">
              {textValue
                ? Array.isArray(textValue)
                  ? textValue.length > 0
                    ? textValue.map((item, key) => (
                        <Label
                          key={item}
                          className="ebs-select-input-label"
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
                : placeholder}
            </div>

            {hasValue && textValue && mode === 'multiple' && (
              <>
                <div className="ebs-select-input-transition" />

                <div className="ebs-select-input-count">{textValue.length}</div>
              </>
            )}

            <div className="ebs-select-input-suffix">
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
