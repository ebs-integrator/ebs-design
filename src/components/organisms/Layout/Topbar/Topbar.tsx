import * as React from 'react';
import cn from 'classnames';

import { Title, Toggler } from './Parts';
import { LeftSide, RightSide } from './Sides';

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ className, fixed, children, ...props }) => {
  return (
    <div className={cn('ebs-layout__top-bar', className, { fixed })} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(Topbar, { Title, Toggler, LeftSide, RightSide });
