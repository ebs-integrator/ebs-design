import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const RightSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={bem('top-bar-right')} {...props}>
      {children}
    </div>
  );
};
