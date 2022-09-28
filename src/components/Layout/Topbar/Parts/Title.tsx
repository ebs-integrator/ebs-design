import * as React from 'react';

export const Title = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="ebs-layout__top-bar-title" {...props}>
      {children}
    </div>
  );
};
