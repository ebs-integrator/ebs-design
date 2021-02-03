import * as React from 'react';
import cn from 'classnames';

export const ModalFooter: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={cn(`ebs-modal__footer`, className)}>{children}</div>
);
