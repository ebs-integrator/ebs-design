import * as React from 'react';
import cn from 'classnames';
import { Extra, Label } from 'components/atoms';

export interface TextareaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, value, placeholder, hasError, label, extra, disabled, ...props }, ref) => {
    const onChangeHandler = (ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
      onChange !== undefined ? onChange(ev.target.value) : undefined;

    return (
      <div className={cn(`ebs-textarea__wrapper`, className)} {...props}>
        <Label text={label} disabled={disabled} />

        <textarea
          ref={ref}
          className={cn(`ebs-textarea`, { has__value: value, 'has-error': hasError, disabled: disabled })}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value || ''}
          disabled={disabled}
        />

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
