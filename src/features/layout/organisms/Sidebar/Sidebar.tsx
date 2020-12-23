import * as React from 'react';
import { Icon } from 'components/atoms';

import { Optionsbar } from '../../atoms';
import { SidebarItem } from '../';

interface Props {
  className?: string;
  toggled?: boolean;
  onToggleMenu?: () => void;
  opened?: boolean;
  onCloseMenu?: () => void;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  optionsTop?: React.ReactNode;
  optionsBottom?: React.ReactNode;
}

export const Sidebar: React.FC<Props> = ({
  className = '',
  toggled,
  onToggleMenu,
  opened,
  onCloseMenu,
  top,
  bottom,
  optionsTop,
  optionsBottom,
}) => (
  <>
    {/* mobile part */}
    {opened && <div className="ebs-sidebar-mask" onClick={onCloseMenu} />}
    {/* mobile part */}

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

      {optionsTop || optionsBottom ? (
        <Optionsbar className="ebs-sidebar-options" top={optionsTop} bottom={optionsBottom} />
      ) : null}
    </div>
  </>
);
