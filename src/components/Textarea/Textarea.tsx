import * as React from 'react';
import cn from 'classnames';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

import { makeBEM } from 'libs';

const bem = makeBEM('ebs-textarea');

export interface TextareaProps extends Omit<TextareaAutosizeProps, 'onChange'> {
  onChange?: (value: string) => void;
  invalid?: boolean;
  radius?: 'small' | 'medium';
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  autoresize?: boolean;
}

const DEFAULT_MIN_ROWS = 4;
const DEFAULT_AUTORESIZE_MAX_ROWS = 20;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      onChange,
      value,
      minRows,
      maxRows,
      autoresize = false,
      radius = 'medium',
      resize = 'none',
      invalid,
      disabled,
      ...props
    },
    ref,
  ) => {
    const textareaMinRows = minRows ? minRows : DEFAULT_MIN_ROWS;
    const textareaMaxRows = maxRows ? maxRows : autoresize ? DEFAULT_AUTORESIZE_MAX_ROWS : 1;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const TextareaComponent = (
      <TextareaAutosize
        ref={ref}
        className={cn(
          bem(null, [`radius-${radius}`, autoresize ? 'resize-none' : `resize-${resize}`]),
          !autoresize ? className : null,
        )}
        defaultValue={value}
        disabled={disabled}
        minRows={textareaMinRows}
        maxRows={textareaMaxRows}
        onChange={handleChange}
        {...(invalid && { 'data-invalid': true })}
        {...props}
      />
    );

    if (resize !== 'none' && !autoresize) {
      return <div className={cn(bem('wrapper'), className)}>{TextareaComponent}</div>;
    }

    return TextareaComponent;
  },
);

// (!a && b) || !a = !a && b || !a
