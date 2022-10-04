import * as React from 'react';
import cn from 'classnames';
import useDebounce from 'react-use/esm/useDebounce';

import { capitalize, makeBEM } from 'libs';
import { Icon } from 'components/Icon/Icon';
import { InputProps, Input } from 'components/Input/Input';

const bem = makeBEM('ebs-input-search');

export type InputSearchIconAlign = 'prefix' | 'suffix';

export type InputSearchStyleType = 'stroke' | 'fill' | 'transparent';

export interface InputSearchProps extends Omit<InputProps, 'styleType'> {
  styleType?: InputSearchStyleType;
  iconAlign?: InputSearchIconAlign;
  value?: string;
  onSearch?: (value: string) => void;
}

export const InputSearch = ({
  className,
  styleType = 'stroke',
  iconAlign = 'suffix',
  autoFocus,
  onSearch,
  value: $value,
  placeholder = 'Search by keyword',
  disabled,
  label,
  extra,
  size,
  isClearable,
  ...props
}: InputSearchProps) => {
  const [changedValue, setChangedValue] = React.useState(false);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if ($value !== undefined) {
      setChangedValue(true);
    }
  }, [$value]);

  React.useEffect(() => {
    if (changedValue && $value !== undefined && $value !== value) {
      setValue($value);
    }
  }, [changedValue, $value, value]);

  const onSearchHandler = (ev?: React.FormEvent<HTMLFormElement>): void => {
    if (ev?.preventDefault !== undefined) {
      ev.preventDefault();
    }

    if (!disabled && onSearch) {
      onSearch(value);
    }
  };

  const [, cancel] = useDebounce(onSearchHandler, 1000, [value]);

  const onChangeHandler = (newValue: string | number): void => {
    cancel();
    setChangedValue(false);

    setValue(newValue as string);
  };

  return (
    <form className={cn(bem('wrapper', { disabled, styleType }), className)} onSubmit={onSearchHandler}>
      <Input
        className={bem()}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        label={label}
        extra={extra}
        size={size}
        isClearable={isClearable}
        {...{
          ...props,
          [`onClick${capitalize(iconAlign)}`]: onSearchHandler,
          [iconAlign]: <Icon type="search" className="cursor" />,
        }}
      />
    </form>
  );
};
