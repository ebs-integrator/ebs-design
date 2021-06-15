import * as React from 'react';
import { Icon } from 'components/atoms';
import { useLayoutState } from 'components/organisms/Layout/context';

import Item from '../Item';

export const TopMenu: React.FC<{
  showToggle?: boolean;
  toggleText?: string;
}> = ({ showToggle = true, toggleText = 'Hide titles', children }) => {
  const { toggled, onSetToggled } = useLayoutState();

  return (
    <div className="ebs-sidebar__top">
      {showToggle && onSetToggled !== undefined && (
        <Item
          className="ebs-sidebar__toggler"
          invert
          prefix={<Icon type={`${toggled ? 'open' : 'close'}-sidebar`} />}
          text={toggleText}
          onClick={onSetToggled}
        />
      )}

      {children}
    </div>
  );
};
