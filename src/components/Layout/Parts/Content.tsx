import * as React from 'react';
import cn from 'classnames';

export const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn(`ebs-layout__content-wrapper`, className)} {...props}>
    <div className="ebs-layout__content">{children}</div>
  </div>
);
