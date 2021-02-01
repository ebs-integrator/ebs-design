import * as React from 'react';
import cn from 'classnames';
import RCForm, { FormProps as RCFormProps } from 'rc-field-form';
import { ColProps } from 'components/atoms/Grid/Col/Col';
import { RowProps } from 'components/atoms/Grid/Row/Row';
import { FormField, FormFieldProps } from './FormField';
import { FormGroup, FormGroupProps } from './FormGroup';
import { getColumnSizes } from './utils';

// Form type
export type FormType = 'vertical' | 'horizontal';

export interface FormProps extends RCFormProps {
  type?: FormType;
  className?: string;
  labelCol?: ColProps; // The layout for input label
  controlCol?: ColProps; // The layout for input controls
  fieldRow?: RowProps; // The layout for field columns
}

export interface FormComposition {
  Field: React.FC<FormFieldProps>;
  Group: React.FC<FormGroupProps>;
}

const FormContext = React.createContext<FormProps>({});

const Form: React.FC<FormProps> & FormComposition = ({
  type = 'vertical',
  labelCol,
  controlCol,
  fieldRow,
  className,
  children,
  ...props
}) => {
  // Get column sizes by form type
  const layout = getColumnSizes(type, labelCol, controlCol);

  return (
    <RCForm className={cn(`ebs-form ebs-form--${type}`, className)} {...props}>
      <FormContext.Provider value={{ type, fieldRow, ...layout }}>{children}</FormContext.Provider>
    </RCForm>
  );
};

Form.displayName = 'Form';

Form.Field = FormField;
Form.Group = FormGroup;

export { Form, FormContext };
