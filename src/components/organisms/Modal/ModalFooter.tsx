import * as React from 'react';
import cn from 'classnames';
import { ModalComponent } from './Modal';

export const ModalFooter: ModalComponent = ({ className, style, children }) => (
  <div className={cn(`ebs-modal__footer`, className)} style={style}>
    {children}
  </div>
);
