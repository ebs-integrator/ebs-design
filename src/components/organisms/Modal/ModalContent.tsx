import * as React from 'react';
import cn from 'classnames';

export const ModalContent: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={cn(`ebs-modal__content`, className)}>{children}</div>
);
