import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-form__field');

export const FieldExtra = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(bem('explain'), bem('extra'))} {...props}>
    {children}
  </div>
);
