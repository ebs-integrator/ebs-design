import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';

import { Sidebar } from '../';

interface Props {
  contentClass?: string;
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  sidebarTop?: React.ReactNode;
  sidebarBottom?: React.ReactNode;
  optionsTop?: React.ReactNode;
  optionsBottom?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({
  contentClass,
  className,
  title,
  leftSide,
  rightSide,
  children,
  sidebarTop,
  sidebarBottom,
  optionsTop,
  optionsBottom,
}) => {
  const [toggled, setToggled] = React.useState(localStorage.getItem('toggled') === 'true');
  const [mobileOpened, setMobileOpened] = React.useState(false);

  const onToggle = (): void =>
    setToggled((s) => {
      localStorage.setItem('toggled', `${!s}`);

      return !s;
    });

  const onToggleMobile = (): void => setMobileOpened((s) => !s);

  return (
    <div
      className={cn(
        `ebs-layout`,
        `ebs-layout-sidebar-${toggled ? `toggled` : `untoggled`}`,
        className,
        (optionsTop || optionsBottom) && 'has-options',
      )}
    >
      <div className="ebs-layout__top-bar">
        {/* mobile part */}
        <div className="ebs-layout__top-bar-mobile">
          <div className="ebs-layout__top-bar-mobile-toggler" onClick={onToggleMobile}>
            <Icon type="menu-fold" />
          </div>
        </div>
        {/* mobile part */}

        {title && <div className="ebs-layout__top-bar-title">{title}</div>}

        {leftSide && <div className="ebs-layout__top-bar-left">{leftSide}</div>}

        <div className="ebs-layout__top-bar-right">{rightSide}</div>
      </div>

      <Sidebar
        toggled={toggled}
        opened={mobileOpened}
        onCloseMenu={onToggleMobile}
        onToggleMenu={onToggle}
        top={sidebarTop}
        bottom={sidebarBottom}
        optionsTop={optionsTop}
        optionsBottom={optionsBottom}
      />

      <div className="ebs-layout__content-wrapper">
        <div className={cn(`ebs-layout__content`, contentClass)}>{children}</div>
      </div>

      <div className="ebs-layout__footer">
        <span>
          Designed by <b>EBS Integrator</b>
        </span>
      </div>
    </div>
  );
};
