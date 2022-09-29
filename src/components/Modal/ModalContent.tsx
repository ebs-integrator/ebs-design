import * as React from 'react';
import cn from 'classnames';

export const ModalContent = ({ className, style, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(`ebs-modal__content`, className)} style={style}>
    {children}
  </div>
);
