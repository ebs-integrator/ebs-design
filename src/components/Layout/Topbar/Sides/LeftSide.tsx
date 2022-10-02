import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const LeftSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={bem('top-bar-left')} {...props}>
      {children}
    </div>
  );
};
