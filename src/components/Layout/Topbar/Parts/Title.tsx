import * as React from 'react';

export const Title: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="ebs-layout__top-bar-title" {...props}>
      {children}
    </div>
  );
};
