import * as React from 'react';
import cn from 'classnames';
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
  className,
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
    {opened && <div className="ebs-sidebar__mask" onClick={onCloseMenu} />}
    {/* mobile part */}

    <div
      className={cn(
        `ebs-sidebar`,
        `ebs-sidebar--${toggled ? `toggled` : `untoggled`}`,
        `ebs-sidebar__mobile--${opened ? `opened` : `closed`}`,
        className,
      )}
    >
      <div className="ebs-sidebar__top">
        {onToggleMenu !== undefined && (
          <SidebarItem
            className="ebs-sidebar__toggler"
            invert
            prefix={<Icon type="menu-fold" />}
            text="Hide titles"
            onClick={onToggleMenu}
          />
        )}

        {top}
      </div>

      <div className="ebs-sidebar__bottom">{bottom}</div>

      {optionsTop || optionsBottom ? (
        <Optionsbar className="ebs-sidebar__options" top={optionsTop} bottom={optionsBottom} />
      ) : null}
    </div>
  </>
);
