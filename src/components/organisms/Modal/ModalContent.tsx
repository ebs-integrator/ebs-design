import * as React from 'react';
import cn from 'classnames';
import { ModalComponent } from './Modal';

export const ModalContent: ModalComponent = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__content`, className)} style={style}>
    {children}
  </div>
);
