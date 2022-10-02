import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-modal');

export const ModalFooter = ({ className, style, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(bem('footer'), className)} style={style}>
    {children}
  </div>
);
