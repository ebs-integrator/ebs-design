import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';

import { Sidebar } from '../';

interface Props {
  contentClass?: string;
  className?: string;
  title?: React.ReactNode;
  topbarLeftSide?: React.ReactNode;
  topbarRightSide?: React.ReactNode;
  sidebarTopSide?: React.ReactNode;
  sidebarBottomSide?: React.ReactNode;
  optionsTopSide?: React.ReactNode;
  optionsBottomSide?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({
  contentClass,
  className,
  title,
  topbarLeftSide,
  topbarRightSide,
  children,
  sidebarTopSide,
  sidebarBottomSide,
  optionsTopSide,
  optionsBottomSide,
}) => {
  const storeToggled = localStorage.getItem('toggled');
  const [mobileOpened, setMobileOpened] = React.useState(false);
  const [toggled, setToggled] = React.useState(storeToggled ? storeToggled === 'true' : false);

  const onToggle = (): void =>
    setToggled((s) => {
      localStorage.setItem('toggled', `${!s}`);

      return !s;
    });

  const onToggleMobile = (): void => setMobileOpened((s) => !s);

  return (
    <div
      className={cn(`ebs-layout`, `ebs-layout-sidebar--${toggled ? `toggled` : `untoggled`}`, className, {
        'has-options': optionsTopSide || optionsBottomSide,
      })}
    >
      <div className="ebs-layout__top-bar">
        {/* mobile part */}
        <div className="ebs-layout__top-bar-mobile">
          <div className="ebs-layout__top-bar-mobile--toggler" onClick={onToggleMobile}>
            <Icon type="menu-fold" />
          </div>
        </div>
        {/* mobile part */}

        {title && <div className="ebs-layout__top-bar-title">{title}</div>}

        {topbarLeftSide && <div className="ebs-layout__top-bar-left">{topbarLeftSide}</div>}

        <div className="ebs-layout__top-bar-right">{topbarRightSide}</div>
      </div>

      <Sidebar
        toggled={toggled}
        opened={mobileOpened}
        onCloseMenu={onToggleMobile}
        onToggleMenu={onToggle}
        top={sidebarTopSide}
        bottom={sidebarBottomSide}
        optionsTop={optionsTopSide}
        optionsBottom={optionsBottomSide}
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
