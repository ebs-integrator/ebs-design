import * as React from 'react';
import cn from 'classnames';

export interface ListGroupItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({ className, children, ...props }) => (
  <div className={cn(`ebs-list-group__item`, className)} {...props}>
    {children}
  </div>
);
