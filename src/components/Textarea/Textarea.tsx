import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Extra, Label } from 'components';

const bem = makeBEM('ebs-textarea');

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  onChange?: (value: string) => void;
  hasError?: boolean;
  label?: React.ReactNode;
  extra?: React.ReactNode;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onChange, value, hasError, label, extra, disabled, ...props }, ref) => {
    const onChangeHandler = (ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
      onChange !== undefined ? onChange(ev.target.value) : undefined;

    return (
      <div className={cn(bem('wrapper'), className)}>
        <Label text={label} disabled={disabled} />

        <textarea
          ref={ref}
          className={bem(null, { 'has-value': value, 'has-error': hasError, disabled })}
          onChange={onChangeHandler}
          value={value || ''}
          disabled={disabled}
          {...props}
        />

        <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
      </div>
    );
  },
);
