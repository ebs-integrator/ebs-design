import * as React from 'react';
import cn from 'classnames';

export interface ModalFooterProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__footer`, className)} style={style}>
    {children}
  </div>
);
