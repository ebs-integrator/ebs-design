import * as React from 'react';
import useDebounce from 'react-use/esm/useDebounce';
import cn from 'classnames';
import { capitalize } from 'libs/string';
import { Icon, Input } from 'components/atoms';
import { InputSize } from 'components/atoms/Input/Input';

export type InputSearchIconAlign = 'prefix' | 'suffix';

export type InputSearchStyleType = 'stroke' | 'fill' | 'transparent';

export interface InputSearchProps {
  className?: string;
  styleType?: InputSearchStyleType;
  iconAlign?: InputSearchIconAlign;
  autoFocus?: boolean;
  onSearch?: (value: string) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  size?: InputSize;
  isClearable?: boolean;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  className,
  styleType = 'stroke',
  iconAlign = 'suffix',
  autoFocus,
  onSearch,
  value: $value,
  placeholder,
  disabled,
  label,
  extra,
  size,
  isClearable,
}) => {
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
    if (ev && ev.preventDefault !== undefined) {
      ev.preventDefault();
    }

    if (!disabled && onSearch !== undefined) {
      onSearch(value);
    }
  };

  const [, cancel] = useDebounce(onSearchHandler, 1000, [value]);

  const onChangeHandler = (newValue: string): void => {
    cancel();
    setChangedValue(false);

    setValue(newValue);
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
        {...{
          [`onClick${capitalize(iconAlign)}`]: onSearchHandler,
          [iconAlign]: <Icon type="search" className="cursor" />,
        }}
        placeholder={placeholder || 'Search by keyword'}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        label={label}
        extra={extra}
        size={size}
        isClearable={isClearable}
      />
    </form>
  );
};
