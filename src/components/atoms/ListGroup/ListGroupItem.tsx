import * as React from 'react';
import cn from 'classnames';
import { Space } from 'components/atoms';

export interface ListGroupItemProps {
  className?: string;
}

export const ListGroupItem: React.FC<ListGroupItemProps> = ({ className, children }) => {
  if (!children) {
    return null;
  }

  return (
    <Space justify="space-between" className={cn(`ebs-list-group__item`, className)}>
      {children}
    </Space>
  );
};
