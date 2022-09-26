import * as React from 'react';
import { Icon } from 'components';

import { useLayoutState } from '../../context';

export const Toggler: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const { onSetOpened } = useLayoutState();

  return (
    <div className="ebs-layout__top-bar-mobile" {...props}>
      <div className="ebs-layout__top-bar-mobile--toggler" onClick={onSetOpened}>
        {children || <Icon type="menu-fold" model="bold" />}
      </div>
    </div>
  );
};
