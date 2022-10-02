import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const Title = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={bem('top-bar-title')} {...props}>
      {children}
    </div>
  );
};
