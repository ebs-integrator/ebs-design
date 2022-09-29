import * as React from 'react';
import { Icon } from 'components';

import { useLayoutState } from '../../context';

export const Toggler = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { onSetOpened } = useLayoutState();

  return (
    <div className="ebs-layout__top-bar-mobile" {...props}>
      <div className="ebs-layout__top-bar-mobile--toggler" onClick={onSetOpened}>
        {children || <Icon type="menu-fold" model="bold" />}
      </div>
    </div>
  );
};
