import * as React from 'react';
import cn from 'classnames';

export interface FormGroupProps {
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ className, children, ...props }) => {
  return <div className={cn(`ebs-form__group`, className)}>{children}</div>;
};
