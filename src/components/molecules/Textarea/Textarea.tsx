import * as React from 'react';
import cn from 'classnames';
import { Extra, Label } from 'components/atoms';

interface Props {
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;
}

export const Textarea: React.FC<Props> = ({
  className,
  onChange,
  value,
  placeholder,
  hasError,
  label,
  extra,
  disabled,
}) => {
  const onChangeHandler = (ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
    onChange !== undefined ? onChange(ev.target.value) : undefined;

  return (
    <div className={cn(`ebs-textarea__wrapper`, className)}>
      <Label text={label} disabled={disabled} />

      <textarea
        className={cn(`ebs-textarea`, { has__value: value, 'has-error': hasError, disabled: disabled })}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value || ''}
        disabled={disabled}
      />

      <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
    </div>
  );
};
