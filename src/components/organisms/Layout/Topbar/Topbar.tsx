import * as React from 'react';
import cn from 'classnames';

import { Title, Toggler } from './Parts';
import { LeftSide, RightSide } from './Sides';

const Topbar: React.FC<{ className?: string; fixed?: boolean }> = ({ className, fixed, children }) => {
  return <div className={cn('ebs-layout__top-bar', className, { fixed })}>{children}</div>;
};

export default Object.assign(Topbar, { Title, Toggler, LeftSide, RightSide });
