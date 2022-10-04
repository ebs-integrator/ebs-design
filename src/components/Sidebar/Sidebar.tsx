import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { useLayoutState } from 'components/Layout/context';
import Item from './Item';
import { Options } from './Options';
import { TopMenu, BottomMenu } from './MenuParts';

const bem = makeBEM('ebs-sidebar');

const Sidebar = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { toggled, opened, onSetOpened } = useLayoutState();

  return (
    <>
      {/* mobile part */}
      {opened && <div className={bem('mask')} onClick={onSetOpened} />}
      {/* mobile part */}

      <div
        className={cn(
          bem(null, [toggled ? `toggled` : `untoggled`, `mobile-${opened ? `opened` : `closed`}`]),
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
