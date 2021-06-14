import * as React from 'react';
import { Icon } from 'components/atoms';
import { useLayoutState } from 'components/organisms/Layout/context';

import Item from '../Item';

export const TopMenu: React.FC<{ showToggle?: boolean }> = ({ showToggle = true, children }) => {
  const { onSetToggled } = useLayoutState();

  return (
    <div className="ebs-sidebar__top">
      {showToggle && onSetToggled !== undefined && (
        <Item
          className="ebs-sidebar__toggler"
          invert
          prefix={<Icon type="menu-fold" model="bold" />}
          text="Hide titles"
          onClick={onSetToggled}
        />
      )}

      {children}
    </div>
  );
};
