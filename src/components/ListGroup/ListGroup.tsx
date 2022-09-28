import * as React from 'react';
import cn from 'classnames';
import { ListGroupItem, ListGroupItemProps } from './ListGroupItem';

export interface ListGroupComposition {
  Item: React.FC<ListGroupItemProps>;
}

export type ListGroupProps = React.HTMLAttributes<HTMLDivElement>;

const ListGroup = ({ className, children, ...props }: ListGroupProps) => (
  <div className={cn(`ebs-list-group`, className)} {...props}>
    {children}
  </div>
);

ListGroup.displayName = 'ListGroup';

ListGroup.Item = ListGroupItem;

export { ListGroup };
