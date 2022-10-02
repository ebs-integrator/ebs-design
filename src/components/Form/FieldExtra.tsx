import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-form__field');

export const FieldExtra: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className={cn(bem('explain'), bem('extra'))} {...props}>
    {children}
  </div>
);
