import * as React from 'react';
import cn from 'classnames';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { Row, RowProps } from 'components/atoms/Grid/Row/Row';
import { Col } from 'components/atoms/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { combineProps, checkRequired } from './utils';
import { FormContext } from './Form';
import { FieldError } from './FieldError';
import { FieldExtra } from './FieldExtra';
import { GenericObject } from 'types';

export interface FormFieldProps extends FieldProps {
  label?: React.ReactNode;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  extra?: React.ReactNode;
  className?: string;
  hideLabel?: boolean;
  style?: React.CSSProperties;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  labelOptions,
  hideLabel,
  name,
  extra,
  className,
  style,
  controlOptions,
  fieldRow,
  children,
  ...props
}) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = combineProps(formCtx.labelOptions, labelOptions);
  const controlProps = combineProps(formCtx.controlOptions, controlOptions);
  const fieldRowProps = combineProps(formCtx.fieldRow, fieldRow);
  const isRequired = checkRequired(props.rules);

  return (
    <div className={cn(`ebs-form__item ebs-form__field`, className)} style={style}>
      <Field
        name={name}
        {...{
          ...props,
          rules: props.rules
            ? props.rules.map((rule: GenericObject) => {
                if (formCtx.draft && rule.required) {
                  rule.required = false;
                }

                return rule;
              })
            : [],
        }}
      >
        {(control, meta, form) => {
          if (!children) {
            return null;
          }

          const childNode =
            typeof children === 'function'
              ? children(control, meta, form)
              : React.cloneElement(children as React.ReactElement, {
                  ...control,
                  ...(meta.errors.length && { className: 'has-error' }),
                });

          return (
            <>
              <Row className="ebs-form__field__wrapper" {...fieldRowProps}>
                {label && !hideLabel && (
                  <Col {...labelProps.col}>
                    <div
                      className={cn('ebs-form__field__label', labelProps.className, {
                        [`align-items--${labelProps.align}`]: labelProps.align,
                        [`justify-content--${labelProps.justify}`]: labelProps.justify,
                      })}
                    >
                      {label} {isRequired && <span className="ebs-form__field__required">*</span>}
                    </div>
                  </Col>
                )}
                <Col {...controlProps.col} className={cn('ebs-form__field__control', controlProps.className)}>
                  {childNode}
                </Col>
              </Row>

              {/* FIXME: Find a better way to display extra and errors below the input control  */}
              <Row className="ebs-form__field__footer">
                <Col {...labelProps.col} />
                <Col {...controlProps.col}>
                  {extra && <FieldExtra>{extra}</FieldExtra>}
                  {meta.errors.length > 0 && (
                    <FieldError>
                      {meta.errors.map((error) =>
                        label ? error.replace(`'${meta.name.join('.')}'`, label as string) : error,
                      )}
                    </FieldError>
                  )}
                </Col>
              </Row>
            </>
          );
        }}
      </Field>
    </div>
  );
};
