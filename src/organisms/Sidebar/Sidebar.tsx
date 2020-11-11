import * as React from 'react';
import { SidebarItem } from 'organisms';
import { Icon } from 'atoms';

import './Sidebar.scss';

interface Props {
  className?: string;
  toggled?: boolean;
  onToggleMenu?: () => void;
  opened?: boolean;
  onCloseMenu?: () => void;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

export const Sidebar: React.FC<Props> = ({
  className = '',
  toggled,
  onToggleMenu,
  opened,
  onCloseMenu,
  top,
  bottom,
}) => (
  <>
    <div
      className={`ebs-sidebar ebs-sidebar-${toggled ? 'toggled' : 'untoggled'} ebs-sidebar-mobile-${
        opened ? 'opened' : 'closed'
      } ${className}`}
    >
      <div className="ebs-sidebar-top">
        {onToggleMenu !== undefined && (
          <SidebarItem
            className="ebs-sidebar-toggler"
            invert
            prefix={<Icon type="menu-fold" />}
            text="Hide titles"
            onClick={onToggleMenu}
          />
        )}

        {top}
      </div>

      <div className="ebs-sidebar-bottom">{bottom}</div>
    </div>

    {/* mobile part */}
    {opened && <div className="ebs-sidebar-mask" onClick={onCloseMenu} />}
    {/* mobile part */}
  </>
);
