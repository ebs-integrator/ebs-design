import * as React from 'react';
import cn from 'classnames';
import { Row, RowProps } from 'components/atoms/Grid/Row/Row';
import { Col } from 'components/atoms/Grid/Col/Col';
import { LabelOptions, ControlOptions } from './interface';
import { FormContext } from './Form';

export interface FormGroupProps {
  label?: string;
  labelOptions?: LabelOptions;
  controlOptions?: ControlOptions;
  fieldRow?: RowProps; // The layout for field columns
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  labelOptions,
  controlOptions,
  fieldRow,
  className,
  children,
}) => {
  const formCtx = React.useContext(FormContext);

  // Field's components props
  const labelProps = Object.assign({}, formCtx.labelOptions, {
    ...labelOptions,
    align: 'start', // Align field group label to the top
  });
  const controlProps = Object.assign({}, formCtx.controlOptions, controlOptions);
  const fieldRowProps = Object.assign({}, formCtx.fieldRow, fieldRow);

  return (
    <Row className={cn(`ebs-form__group`, className)} {...fieldRowProps}>
      <Col {...labelProps.col}>
        <div
          className={cn('ebs-form__field__label', labelProps.className, {
            [`align-items--${labelProps.align}`]: labelProps.align,
            [`justify-content--${labelProps.justify}`]: labelProps.justify,
          })}
        >
          {label}
        </div>
      </Col>
      <Col {...controlProps.col} className={cn('ebs-form__field__control', controlProps.className)}>
        {children}
      </Col>
    </Row>
  );
};
