import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-modal');

export const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children }) => (
  <div className={cn(bem('footer'), className)} style={style}>
    {children}
  </div>
);
