import * as React from 'react';
import cn from 'classnames';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';

import { GenericObject } from 'types';
import { makeBEM } from 'libs';
import { Row, RowProps } from 'components/Grid/Row/Row';
import { Col } from 'components/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { combineProps, checkRequired } from './utils';
import { FormContext } from './Form';
import { FieldError } from './FieldError';
import { FieldExtra } from './FieldExtra';

const formBem = makeBEM('ebs-form');
const fieldBem = makeBEM(formBem('field'));

export interface FormFieldProps extends FieldProps {
  label?: React.ReactNode;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  extra?: React.ReactNode;
  className?: string;
  hideLabel?: boolean;
  style?: React.CSSProperties;
  /**
   * will be redirected to `messageVariables` as `{ label: validationLabel }`
   */
  validationLabel?: string;
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
  validationLabel = typeof label === 'string' ? label : '',
  messageVariables,
  ...props
}) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = combineProps(formCtx.labelOptions, labelOptions);
  const controlProps = combineProps(formCtx.controlOptions, controlOptions);
  const fieldRowProps = combineProps(formCtx.fieldRow, fieldRow);
  const isRequired = checkRequired(props.rules);

  console.log(labelProps);

  // Compose classes for label and control column
  const getColClassName = (col: GenericObject): string =>
    cn(col.className, {
      [`align-items--${col.align}`]: col.align,
      [`justify-content--${col.justify}`]: col.justify,
    });

  return (
    <div className={cn(formBem('item'), fieldBem(null), className)} style={style}>
      <Field
        name={name}
        messageVariables={{ label: validationLabel, ...messageVariables }}
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
              <Row className={fieldBem('wrapper')} {...fieldRowProps}>
                {label && !hideLabel && (
                  <Col {...labelProps.col}>
                    <div className={cn(fieldBem('label'), getColClassName(labelProps))}>
                      {label} {isRequired && <span className={fieldBem('required')}>*</span>}
                    </div>
                  </Col>
                )}
                <Col {...controlProps.col} className={cn(fieldBem('control'), getColClassName(controlProps))}>
                  {childNode}
                </Col>
              </Row>

              {/* FIXME: Find a better way to display extra and errors below the input control  */}
              <Row className={fieldBem('footer')}>
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
