import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const Content = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(bem('content-wrapper'), className)} {...props}>
    <div className={bem('content')}>{children}</div>
  </div>
);
