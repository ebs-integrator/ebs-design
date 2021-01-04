import * as React from 'react';
import { Icon } from 'components/atoms';

import { useLayoutState } from '../../context';

export const Toggler: React.FC = ({ children }) => {
  const { onSetToggled } = useLayoutState();

  return (
    <div className="ebs-layout__top-bar-mobile">
      <div className="ebs-layout__top-bar-mobile--toggler" onClick={onSetToggled}>
        {children || <Icon type="menu-fold" />}
      </div>
    </div>
  );
};
