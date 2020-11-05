import * as React from 'react';
import { Extra, Label } from 'atoms';

import './Textarea.scss';

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
  className = '',
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
    <div className={`ebs-textarea-wrapper ${className}`}>
      <Label text={label} disabled={disabled} />

      <textarea
        className={`ebs-textarea${value ? ' has-value' : ''}${hasError ? ' has-error' : ''}${
          disabled ? ' disabled' : ''
        }`}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value || ''}
        disabled={disabled}
      />

      <Extra text={extra} hasError={hasError} disabled={disabled} />
    </div>
  );
};
