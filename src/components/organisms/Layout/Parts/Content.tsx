import * as React from 'react';
import cn from 'classnames';

export const Content: React.FC<{ className?: string }> = ({ className, children }) => 
  (
    <div className={cn(`ebs-layout__content-wrapper`, className)}>
      <div className="ebs-layout__content">{children}</div>
    </div>
  );