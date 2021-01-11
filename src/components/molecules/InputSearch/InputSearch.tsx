import * as React from 'react';
import cn from 'classnames';
import { capitalize } from 'libs/string';
import { Icon, Input } from 'components/atoms';

export type InputSearchIconAlign = 'prefix' | 'suffix';

export type InputSearchStyleType = 'stroke' | 'fill';

interface Props {
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
}

export const InputSearch: React.FC<Props> = ({
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

  const onChangeHandler = (newValue: string): void => {
    setChangedValue(false);

    setValue(newValue);
  };

  return (
    <form
      className={cn(`ebs-input__search-wrapper`, `ebs-input__search-type-${styleType}`, className, {
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
      />
    </form>
  );
};
