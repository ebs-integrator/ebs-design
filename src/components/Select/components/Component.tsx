import * as React from 'react';
import cn from 'classnames';
import { Input, Icon, Label, Loader, Tooltip } from 'components';
import { SizeType } from 'types';

import useSelect from '../Hook';
import { SelectMode, ValueMode, OptionsMode, Option, OptionValue } from '../interfaces';

export interface SelectProps
  extends Omit<Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onChange'>, 'onSelect'> {
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

const Select = ({
  mode = 'single',
  size = 'medium',
  valueMode = 'regular',
  className,
  prefix,
  loading,
  children,
  onChange,
  onSelect,
  ...props
}: SelectProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
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
    ref,
    children,
    className,
    prefix,
    onChange,
    onSelect,
    ...props,
  });

  React.useEffect(() => {
    if (valueRef.current) {
      valueRef.current.scrollLeft = valueRef.current.scrollWidth;
    }
  }, [textValue]);

  const onFocus = (): void => setState((prevState) => ({ isOpen: !prevState.isOpen }));

  React.useEffect(() => {
    ref.current?.addEventListener('focus', onFocus);

    return () => {
      ref.current?.removeEventListener('focus', onFocus);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={cn(`ebs-select__wrapper`, `ebs-select--${mode}`, `ebs-select--${valueMode}`, className, {
        'ebs-select--box': isBox,
        active: hasValue,
        disabled: props.disabled,
      })}
      tabIndex={0}
      {...props}
    >
      <Label text={props.label} disabled={props.disabled} />

      <Tooltip
        className="ebs-tooltip--overtop"
        visible={!isBox && isOpen}
        trigger={null}
        tooltip={!props.disabled && (isOpen ? dropdownOptions : null)}
        offset={[0, 10]}
        bodyClass="p-0"
      >
        <div className="ebs-select-dropdown__wrapper">
          <div className="ebs-select-dropdown__container">
            {prefix && <div className="ebs-select__prefix">{prefix}</div>}

            <div
              className={cn('ebs-select', `ebs-select--${size}`, {
                'ebs-select--tags': mode === 'tags',
                'has-suffix': props.suffix,
              })}
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
                  ) : (textValue as Option).value ? (
                    (textValue as Option).text
                  ) : (
                    props.placeholder
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

export { Select };
