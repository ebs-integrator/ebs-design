import * as React from 'react';
import cn from 'classnames';
import { ListGroupItem, ListGroupItemProps } from './ListGroupItem';

export interface ListGroupComposition {
  Item: React.FC<ListGroupItemProps>;
}

export interface ListGroupProps {
  className?: string;
}

const ListGroup: React.FC<ListGroupProps> & ListGroupComposition = ({ className, children }) => {
  if (!children) {
    return null;
  }

  return <div className={cn(`ebs-list-group`, className)}>{children}</div>;
};

ListGroup.displayName = 'ListGroup';

ListGroup.Item = ListGroupItem;

export { ListGroup };
