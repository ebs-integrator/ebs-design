import * as React from 'react';
import cn from 'classnames';
import { ListGroupItem, ListGroupItemProps } from './ListGroupItem';

export interface ListGroupComposition {
  Item: React.FC<ListGroupItemProps>;
}

export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ListGroup: React.FC<ListGroupProps> & ListGroupComposition = ({ className, children, ...props }) => (
  <div className={cn(`ebs-list-group`, className)} {...props}>
    {children}
  </div>
);

ListGroup.displayName = 'ListGroup';

ListGroup.Item = ListGroupItem;

export { ListGroup };
