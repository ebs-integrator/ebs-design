import * as React from 'react';
import { validate } from 'libs/object/object';
import { Extra, Label } from 'atoms';
import { ExtraStatus } from 'atoms/Extra/Extra';

export type FormType = 'regular' | 'inline';

interface Props {
  type?: FormType;
  onSubmit?: () => void;
  className?: string;
  id?: string;
}

export const Form: React.FC<Props> = ({ onSubmit, type = 'regular', className = '', id, children }) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    if (e.preventDefault) e.preventDefault();

    return onSubmit && onSubmit();
  };

  return (
    <form className={`ebs-form ebs-form-${type} ${className}`} onSubmit={onSubmitHandler} id={id}>
      {children}
    </form>
  );
};

interface ItemProps {
  itemClass?: string;
  className?: string;
  labelWidth?: React.ReactNode;
  label?: React.ReactNode;
  required?: true;
  style?: any;
  extraStatus?: ExtraStatus;
  extra?: string | string[];
  error?: string[] | { [key: string]: string[] };
}

export const FormItem: React.FC<ItemProps> = ({
  itemClass = '',
  className = '',
  labelWidth,
  label,
  required,
  style,
  extraStatus: $extraStatus = 'danger',
  extra: $extra,
  error,
  children,
}) => {
  const extraStatus = error ? 'danger' : $extraStatus;
  const extra = error ? validate(error) : $extra;

  return (
    <div className={`ebs-form-item ${itemClass}`} style={style}>
      {label && (
        <Label
          style={{ maxWidth: labelWidth }}
          text={
            <>
              {label} {required && <span>*</span>}
            </>
          }
        />
      )}

      <div className={`ebs-form-children${extra && extraStatus === 'danger' ? ' has-error' : ''} ${className}`}>
        {children}
      </div>

      {extra && <Extra status={extraStatus} text={Array.isArray(extra) ? extra.join(',') : extra} />}
    </div>
  );
};

export const FormItems: React.FC<{ className?: string; three?: boolean }> = ({ className = '', three, children }) => (
  <div className={`ebs-form-items ${three ? 'ebs-form-items-three' : ''} ${className}`}>{children}</div>
);
