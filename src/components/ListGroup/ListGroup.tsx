import * as React from 'react';
import cn from 'classnames';
import { ListGroupItem } from './ListGroupItem';

export type ListGroupProps = React.HTMLAttributes<HTMLDivElement>;

const ListGroup = ({ className, children, ...props }: ListGroupProps) => (
  <div className={cn('ebs-list-group', className)} {...props}>
    {children}
  </div>
);

ListGroup.displayName = 'ListGroup';

ListGroup.Item = ListGroupItem;

export { ListGroup };
