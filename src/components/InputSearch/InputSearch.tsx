import * as React from 'react';
import useDebounce from 'react-use/esm/useDebounce';
import cn from 'classnames';
import { capitalize } from 'libs/string';
import { Icon } from 'components/Icon/Icon';
import { InputProps, Input } from 'components/Input/Input';

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
    <form
      className={cn(`ebs-input__search-wrapper`, `ebs-input__search--${styleType}`, className, {
        disabled: disabled,
      })}
      onSubmit={onSearchHandler}
    >
      <Input
        className="ebs-input__search"
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
