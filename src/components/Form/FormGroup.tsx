import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Row, RowProps } from 'components/Grid/Row/Row';
import { Col } from 'components/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { FormContext } from './Form';

const formBem = makeBEM('ebs-form');
const fieldBem = makeBEM(formBem('field'));
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  required?: boolean;
}

export const FormGroup = ({
  label,
  labelOptions,
  controlOptions,
  fieldRow,
  className,
  children,
  required,
  ...props
}: FormGroupProps) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = Object.assign({}, formCtx.labelOptions, {
    align: 'start', // Align field group label to the top
    ...labelOptions,
  });
  const controlProps = Object.assign({}, formCtx.controlOptions, controlOptions);
  const fieldRowProps = Object.assign({}, formCtx.fieldRow, fieldRow);

  return (
    <Row className={cn(formBem('item'), formBem('group'), className)} {...fieldRowProps} {...props}>
      <Col {...labelProps.col}>
        <div
          className={cn(fieldBem('label'), labelProps.className, {
            [`align-items--${labelProps.align}`]: labelProps.align,
            [`justify-content--${labelProps.justify}`]: labelProps.justify,
          })}
        >
          {label} {label && required && <span className={formBem('required')}>*</span>}
        </div>
      </Col>
      <Col {...controlProps.col} className={cn(fieldBem('control'), controlProps.className)}>
        {children}
      </Col>
    </Row>
  );
};
