import * as React from 'react';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-sidebar');

export const BottomMenu: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <div className={bem('bottom')}>{children}</div>
);
