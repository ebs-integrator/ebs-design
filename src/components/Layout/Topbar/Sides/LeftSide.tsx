import * as React from 'react';

export const LeftSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="ebs-layout__top-bar-left" {...props}>
      {children}
    </div>
  );
};
