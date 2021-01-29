import * as React from 'react';
import cn from 'classnames';

export interface ListGroupItemProps {
  className?: string;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({ className, children }) => (
  <div className={cn(`ebs-list-group__item`, className)}>{children}</div>
);
