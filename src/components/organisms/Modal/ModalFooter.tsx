import * as React from 'react';
import cn from 'classnames';

export const ModalFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__footer`, className)} style={style}>
    {children}
  </div>
);
