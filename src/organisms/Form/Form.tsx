import * as React from 'react';
import { validate } from 'libs/object/object';
import { Extra, Label } from 'atoms';
import { ExtraStatus } from 'atoms/Extra/Extra';

interface Props {
  onSubmit?: () => void;
  className?: string;
  id?: string;
}

export const Form: React.FC<Props> = ({ onSubmit, className = '', id, children }) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    if (e.preventDefault) e.preventDefault();

    return onSubmit && onSubmit();
  };

  return (
    <form className={`ebs-form ${className}`} onSubmit={onSubmitHandler} id={id}>
      {children}
    </form>
  );
};

interface ItemProps {
  label?: React.ReactNode;
  className?: string;
  itemClass?: string;
  style?: any;
  required?: true;
  extraStatus?: ExtraStatus;
  extra?: string | string[];
  error?: string[] | { [key: string]: string[] };
  column?: boolean;
}

export const FormItem: React.FC<ItemProps> = ({
  label,
  itemClass = '',
  className = '',
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
