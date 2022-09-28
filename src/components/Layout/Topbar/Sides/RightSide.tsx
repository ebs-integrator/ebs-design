import * as React from 'react';

export const RightSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="ebs-layout__top-bar-right" {...props}>
      {children}
    </div>
  );
};
