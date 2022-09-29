import * as React from 'react';
import cn from 'classnames';

export type CollapseGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseGroup = ({ className, style, children, ...props }: CollapseGroupProps) => (
  <div className={cn('ebs-collapse__group', className)} {...props}>
    {children}
  </div>
);
