import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-modal');

export const ModalContent = ({ className, style, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(bem('content'), className)} style={style}>
    {children}
  </div>
);
