import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Input, Icon, Label, Loader, Tooltip } from 'components';
import { SizeType } from 'types';
import useSelect from '../Hook';
import { SelectMode, ValueMode, OptionsMode, Option, OptionValue } from '../interfaces';

const bem = makeBEM('ebs-select');

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
  disabled,
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
      className={cn(bem('wrapper', { mode, valueMode, disabled, active: hasValue, box: isBox }), className)}
      tabIndex={0}
      {...props}
    >
      <Label text={props.label} disabled={disabled} />

      <Tooltip
        className="ebs-tooltip--overtop"
        visible={!isBox && isOpen}
        trigger={null}
        tooltip={!disabled && (isOpen ? dropdownOptions : null)}
        offset={[0, 10]}
        bodyClass="p-0"
      >
        <div className={bem('dropdown-wrapper')}>
          <div className={bem('dropdown-container')}>
            {prefix && <div className={bem('prefix')}>{prefix}</div>}

            <div className={bem(null, [size], { tags: mode === 'tags', 'has-suffix': props.suffix })}>
              <div className={bem('value')}>
                <div ref={valueRef} className={bem('value-container')}>
                  {loading && !isOpen && !isBox ? (
                    <Loader.Inline />
                  ) : Array.isArray(textValue) && textValue?.length ? (
                    textValue.map((item) => (
                      <Label
                        key={item.value}
                        className={bem('label')}
                        type="primary"
                        circle
                        text={item.text}
                        suffix={!disabled ? <div className={bem('clear')}>&#215;</div> : undefined}
                        onClickSuffix={() => !disabled && onDeleteSelect(item.value)}
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

              {hasValue && props.isClearable && !disabled ? (
                <div className={bem('clear')} onClick={onClear}>
                  &#215;
                </div>
              ) : null}

              {!isBox && (
                <div className={bem('suffix')}>
                  <Icon type={`arrow-${!disabled && isOpen ? 'top' : 'bottom'}`} model="bold" />
                </div>
              )}
            </div>

            {props.suffix && <div className={bem('suffix')}>{props.suffix}</div>}
          </div>

          {!disabled && (isBox ? dropdownOptions : null)}
        </div>
      </Tooltip>
    </div>
  );
};

export { Select };
