import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

export const Title: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className={bem('top-bar-title')} {...props}>
      {children}
    </div>
  );
};
