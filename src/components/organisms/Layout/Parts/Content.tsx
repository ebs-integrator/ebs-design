import * as React from 'react';
import cn from 'classnames';

export const Content: React.FC<{ className?: string }> = ({ className, children }) => {
  return (
    <div className="ebs-layout__content-wrapper">
      <div className={cn(`ebs-layout__content`, className)}>{children}</div>
    </div>
  );
};
