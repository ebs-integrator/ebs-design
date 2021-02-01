import * as React from 'react';
import cn from 'classnames';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { Row, RowProps } from 'components/atoms/Grid/Row/Row';
import { Col, ColProps } from 'components/atoms/Grid/Col/Col';
import { FormContext } from './Form';
import { FieldError } from './FieldError';
import { FieldExtra } from './FieldExtra';

export interface FormFieldProps extends FieldProps {
  label?: string;
  labelCol?: ColProps; // The layout for input label
  controlCol?: ColProps; // The layout for input controls
  fieldRow?: RowProps; // The layout for field columns
  extra?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  extra,
  className,
  style,
  labelCol,
  controlCol,
  fieldRow,
  children,
  ...props
}) => {
  const formCtx = React.useContext(FormContext);
  const labelColSize = labelCol || formCtx.labelCol;
  const controlColSize = controlCol || formCtx.controlCol;
  const fieldRowSize = fieldRow || formCtx.fieldRow;

  return (
    <div className={cn(`ebs-form__field`, className)} style={style}>
      <Field name={name} {...props}>
        {(control, meta, form) => {
          const onChange = (...args): void => {
            // Reset field's errors
            if (meta.errors.length > 0) {
              form.resetFields([meta.name]);
            }

            control.onChange(...args);
          };

          const childNode =
            typeof children === 'function'
              ? children(control, meta, form)
              : React.cloneElement(children as React.ReactElement, {
                  ...control,
                  ...props,
                  onChange,
                });

          return (
            <>
              <Row className="ebs-form__field__wrapper" {...fieldRowSize}>
                <Col {...labelColSize}>
                  <div className="ebs-form__field__label">{label || name}</div>
                </Col>
                <Col {...controlColSize} className="ebs-form__field__control">
                  {childNode}
                </Col>
              </Row>

              {/* FIXME: Find a better way to display extra and errors below the input control  */}
              <Row className="ebs-form__field__wrapper" {...fieldRowSize}>
                <Col {...labelColSize} />
                <Col {...controlColSize}>
                  {extra && <FieldExtra>{extra}</FieldExtra>}
                  {meta.errors.length > 0 && <FieldError>{meta.errors}</FieldError>}
                </Col>
              </Row>
            </>
          );
        }}
      </Field>
    </div>
  );
};
