import * as React from 'react';
import cn from 'classnames';
import RCForm, { FormProps, Field } from 'rc-field-form';
import { validate } from 'libs/object/object';
import { Extra, Label } from 'components/atoms';
import { ExtraStatus } from 'components/atoms/Extra/Extra';

export type FormType = 'regular' | 'inline';

interface Props extends FormProps {
  type?: FormType;
  className?: string;
}

export const Form: React.FC<Props> = ({ type = 'regular', className, children, ...props }) => {
  return (
    <RCForm className={cn(`ebs-form`, `ebs-form__${type}`, className)} {...props}>
      {children}
    </RCForm>
  );
};

interface ItemProps {
  name: string;
  children?: any;
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
  name,
  itemClass,
  className,
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
    <div className={cn(`ebs-form__item`, itemClass)} style={style}>
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

      <div className={cn(`ebs-form__children`, className, { 'has-error': extra && extraStatus === 'danger' })}>
        <Field name={name}>{children}</Field>
      </div>

      {extra && <Extra status={extraStatus} text={Array.isArray(extra) ? extra.join(',') : extra} />}
    </div>
  );
};

export const FormItems: React.FC<{ className?: string; three?: boolean }> = ({ className, three, children }) => (
  <div className={cn(`ebs-form__items`, className, { 'ebs-form__items-three': three })}>{children}</div>
);
