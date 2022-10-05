import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-list-group');

export type ListGroupItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ListGroupItem = ({ className, children, ...props }: ListGroupItemProps) => (
  <div className={cn(bem('item'), className)} {...props}>
    {children}
  </div>
);
