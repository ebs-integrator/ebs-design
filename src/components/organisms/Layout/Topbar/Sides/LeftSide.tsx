import * as React from 'react';

export const LeftSide: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="ebs-layout__top-bar-left" {...props}>
      {children}
    </div>
  );
};
