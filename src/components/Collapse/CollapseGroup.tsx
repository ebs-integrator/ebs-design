import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-collapse');

export type CollapseGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseGroup = ({ className, style, children, ...props }: CollapseGroupProps) => (
  <div className={cn(bem('group'), className)} {...props}>
    {children}
  </div>
);
