import * as React from 'react';
import cn from 'classnames';
import { useLayoutState } from 'components/Layout/context';

import Item from './Item';
import { Options } from './Options';
import { TopMenu, BottomMenu } from './MenuParts';

const Sidebar = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { toggled, opened, onSetOpened } = useLayoutState();

  return (
    <>
      {/* mobile part */}
      {opened && <div className="ebs-sidebar__mask" onClick={onSetOpened} />}
      {/* mobile part */}

      <div
        className={cn(
          `ebs-sidebar`,
          `ebs-sidebar--${toggled ? `toggled` : `untoggled`}`,
          `ebs-sidebar__mobile--${opened ? `opened` : `closed`}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Object.assign(Sidebar, { BottomMenu, TopMenu, Options, Item });
