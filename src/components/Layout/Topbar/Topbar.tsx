import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Title, Toggler } from './Parts';
import { LeftSide, RightSide } from './Sides';

const bem = makeBEM('ebs-layout');

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean;
}

const Topbar = ({ className, fixed, children, ...props }: TopbarProps) => {
  return (
    <div className={cn(bem('top-bar', { fixed }), className)} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(Topbar, { Title, Toggler, LeftSide, RightSide });
