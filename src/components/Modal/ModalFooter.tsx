import * as React from 'react';
import cn from 'classnames';

export const ModalFooter = ({ className, style, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(`ebs-modal__footer`, className)} style={style}>
    {children}
  </div>
);
