import * as React from 'react';

export const RightSide: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="ebs-layout__top-bar-right" {...props}>
      {children}
    </div>
  );
};
