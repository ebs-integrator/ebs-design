import * as React from 'react';
import cn from 'classnames';

export interface ModalContentProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ModalContent: React.FC<ModalContentProps> = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__content`, className)} style={style}>
    {children}
  </div>
);
