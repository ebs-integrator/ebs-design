import * as React from 'react';
import cn from 'classnames';
import RCForm, { FormProps as RCFormProps } from 'rc-field-form';
import { RowProps } from 'components/Grid/Row/Row';
import { FormField, FormFieldProps } from './FormField';
import { FormGroup, FormGroupProps } from './FormGroup';
import { getControlOptions, getLabelOptions } from './utils';
import { FormType, LabelOptions, ControlOptions } from './interface';

interface FormProps extends RCFormProps {
  type?: FormType;
  labelOptions?: LabelOptions; // Input label options, such as align, justify, column
  controlOptions?: ControlOptions; // Input control options, such as align, justify, column
  fieldRow?: RowProps; // The layout for field columns
  draft?: boolean;
}

interface FormComposition {
  Field: React.FC<FormFieldProps>;
  Group: React.FC<FormGroupProps>;
}

const FormContext = React.createContext<FormProps>({});

const Form: React.FC<React.PropsWithChildren<FormProps>> = ({
  type = 'vertical',
  draft,
  labelOptions,
  controlOptions,
  fieldRow,
  className,
  children,
  ...props
}) => {
  // Get label and control options
  const controlProps = getControlOptions(type, controlOptions);
  const labelProps = getLabelOptions(type, labelOptions);

  return (
    <RCForm className={cn(`ebs-form ebs-form--${type}`, className)} {...props}>
      <FormContext.Provider value={{ type, fieldRow, labelOptions: labelProps, controlOptions: controlProps, draft }}>
        {children}
      </FormContext.Provider>
    </RCForm>
  );
};

const FormComponent: React.FC<React.PropsWithChildren<FormProps>> & FormComposition = ({ ...props }) => {
  return <Form {...props} />;
};

FormComponent.displayName = 'Form';

FormComponent.Field = FormField;
FormComponent.Group = FormGroup;

export { Form, FormComponent, FormContext, FormProps, FormComposition };
