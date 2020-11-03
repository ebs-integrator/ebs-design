import * as React from 'react';

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
    <div className="ebs-textarea-wrapper">
      {label && <div className="ebs-textarea-label">{label}</div>}

      <textarea
        className={`ebs-textarea${value ? ' has-value' : ''}${hasError ? ' has-error' : ''}${
          disabled ? ' disabled' : ''
        } ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value || ''}
        disabled={disabled}
      />

      {extra && <div className="ebs-textarea-extra">{extra}</div>}
    </div>
  );
};
