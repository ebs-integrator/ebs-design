import * as React from 'react';
import cn from 'classnames';

export const ModalContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__content`, className)} style={style}>
    {children}
  </div>
);
