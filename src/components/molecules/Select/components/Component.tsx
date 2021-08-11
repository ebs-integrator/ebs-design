import * as React from 'react';
import cn from 'classnames';
import { Label, Input, Icon, Space, Tooltip } from 'components/atoms';
import { Loader } from 'components/molecules';
import { SizeType } from 'types';

import useSelect from '../Hook';
import { SelectMode, ValueMode, OptionsMode, Option, OptionValue } from '../interfaces';

export interface ComponentProps {
  mode?: SelectMode;
  optionsMode?: OptionsMode;
  valueMode?: ValueMode;
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

const Component: React.FC<ComponentProps> = ({
  mode = 'single',
  size = 'medium',
  valueMode = 'regular',
  loading,
  children,
  ...props
}) => {
  const inputRef = React.useRef<HTMLDivElement | null>(null);
  const valueRef = React.useRef<HTMLDivElement | null>(null);

  const {
    newOption,
    textValue,
    hasValue,
    isBox,
    isOpen,
    dropdownOptions,
    setState,
    onDeleteSelect,
    onChangeNewOption,
    onKeyDownNewOption,
    onClear,
  } = useSelect({
    mode,
    loading,
    refs: {
      root: props.rootRef,
      input: inputRef,
    },
    children,
    ...props,
  });

  React.useEffect(() => {
    if (valueRef.current) {
      valueRef.current.scrollLeft = valueRef.current.scrollWidth;
    }
  }, [textValue]);

  return (
    <div
      ref={inputRef}
      className={cn(`ebs-select__wrapper`, `ebs-select--${mode}`, `ebs-select--${valueMode}`, props.className, {
        active: hasValue,
        disabled: props.disabled,
      })}
    >
      <Label text={props.label} disabled={props.disabled} />

      <Tooltip
        visible={!isBox && isOpen}
        trigger={null}
        tooltip={!props.disabled && (isOpen ? dropdownOptions : null)}
        offset={[0, 10]}
        bodyClass="p-0"
      >
        <div className="ebs-select-dropdown__wrapper">
          <div className="ebs-select-dropdown__container">
            {props.prefix && <div className="ebs-select__prefix">{props.prefix}</div>}

            <div
              className={cn('ebs-select', `ebs-select--${size}`, {
                'ebs-select--box': isBox,
                'ebs-select--tags': mode === 'tags',
                'has-suffix': props.suffix,
              })}
              onClick={() => setState((prevState) => ({ isOpen: !prevState.isOpen }))}
            >
              <div className="ebs-select-value">
                <div ref={valueRef} className="ebs-select-value__container">
                  {loading && !isOpen && !isBox ? (
                    <Loader.Inline />
                  ) : Array.isArray(textValue) && textValue?.length ? (
                    textValue.map((item) => (
                      <Label
                        key={item.value}
                        className="ebs-select-label"
                        type="primary"
                        circle
                        text={item.text}
                        suffix={!props.disabled ? <div className="ebs-select__clear">&#215;</div> : undefined}
                        onClickSuffix={() => !props.disabled && onDeleteSelect(item.value)}
                      />
                    ))
                  ) : (
                    <Space>{(textValue as Option).value ? (textValue as Option).text : props.placeholder}</Space>
                  )}

                  {mode === 'tags' && (
                    <Input
                      size="small"
                      placeholder={props.newPlaceholder}
                      value={newOption}
                      onChange={onChangeNewOption}
                      onKeyDown={onKeyDownNewOption}
                    />
                  )}
                </div>
              </div>

              {hasValue && props.isClearable && !props.disabled ? (
                <div className="ebs-select__clear" onClick={onClear}>
                  &#215;
                </div>
              ) : null}

              {!isBox && (
                <div className="ebs-select__suffix">
                  <Icon type={`arrow-${!props.disabled && isOpen ? 'top' : 'bottom'}`} model="bold" />
                </div>
              )}
            </div>

            {props.suffix && <div className="ebs-select__suffix">{props.suffix}</div>}
          </div>

          {!props.disabled && (isBox ? dropdownOptions : null)}
        </div>
      </Tooltip>
    </div>
  );
};

export { Component };
