import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';

export interface Props {
  className?: string;
  description?: string;
}

export const Empty: React.FC<Props> = ({ className, description }) => {
  return (
    <div className={cn(`ebs-empty`, className)}>
      <Icon type="archive" />
      {description}
    </div>
  );
};
