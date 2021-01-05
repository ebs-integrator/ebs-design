import * as React from 'react';

import { Title, Toggler } from './Parts';
import { LeftSide, RightSide } from './Sides';

const Topbar: React.FC = ({ children }) => {
  return <div className="ebs-layout__top-bar">{children}</div>;
};

export default Object.assign(Topbar, { Title, Toggler, LeftSide, RightSide });
