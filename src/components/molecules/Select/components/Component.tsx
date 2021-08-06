import * as React from 'react';
import cn from 'classnames';
import { Label, Input, Icon } from 'components/atoms';
import { Loader } from 'components/molecules';
import { isArray } from 'libs';
import { usePortal } from 'hooks';
import { SizeType } from 'types';

import useSelect from '../Hook';
import { SelectMode, OptionsMode, Option, OptionValue } from '../interfaces';

export interface ComponentProps {
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

const Component: React.FC<ComponentProps> = ({ mode = 'single', size = 'medium', loading, children, ...props }) => {
  const createPortal = usePortal();
  const inputRef = React.useRef<HTMLDivElement | null>(null);

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

  return (
    <div
      ref={inputRef}
      className={cn(`ebs-select__wrapper`, `ebs-select--${mode}`, props.className, {
        active: hasValue,
        disabled: props.disabled,
      })}
    >
      <Label text={props.label} disabled={props.disabled} />

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
                      suffix={!props.disabled ? <div className="ebs-select__clear">&#215;</div> : undefined}
                      onClickSuffix={() => !props.disabled && onDeleteSelect(key)}
                    />
                  ))
                ) : (
                  textValue || props.placeholder
                )}
              </div>
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

        {!props.disabled && (isOpen || isBox) && (isBox ? dropdownOptions : createPortal(dropdownOptions))}
      </div>
    </div>
  );
};

export { Component };
