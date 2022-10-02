import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-list-group');

export type ListGroupItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ListGroupItem: React.FC<ListGroupItemProps> = ({ className, children, ...props }) => (
  <div className={cn(bem('item'), className)} {...props}>
    {children}
  </div>
);
