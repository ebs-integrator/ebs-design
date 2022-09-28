import * as React from 'react';

export const BottomMenu: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="ebs-sidebar__bottom">{children}</div>
);
