import * as React from 'react';
import cn from 'classnames';
import { Empty } from 'components/atoms';

export interface GroupProps {
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  showCount?: boolean;
  emptyText?: string;
}

export const Group: React.FC<GroupProps> = ({
  className,
  title,
  emptyText,
  leftSide,
  rightSide,
  showCount = true,
  children,
}) => {
  const count = React.useMemo(() => React.Children.toArray(children).length, [children]);

  return (
    <div className={cn(`ebs-group`, `ebs-collapse`, className)}>
      <div className="ebs-collapse__header">
        <div className="ebs-collapse__header__side-left">
          {title && (
            <div className="ebs-collapse__title">
              {title} {showCount && `(${count})`}
            </div>
          )}
          {leftSide}
        </div>
        <div className="ebs-collapse__header__side-right">{rightSide}</div>
      </div>
      {count ? children : <Empty description={emptyText} />}
    </div>
  );
};
