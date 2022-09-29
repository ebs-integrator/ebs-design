import * as React from 'react';
import cn from 'classnames';

export type ListGroupItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ListGroupItem = ({ className, children, ...props }: ListGroupItemProps) => (
  <div className={cn(`ebs-list-group__item`, className)} {...props}>
    {children}
  </div>
);
