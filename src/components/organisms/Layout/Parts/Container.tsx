import * as React from 'react';
import cn from 'classnames';

import { useLayoutState } from '../context';

export const Container: React.FC<{ className?: string }> = ({ className, children }) => {
  const { toggled, hasOptions } = useLayoutState();

  return (
    <div
      className={cn(`ebs-layout`, `ebs-layout-sidebar--${toggled ? `toggled` : `untoggled`}`, className, {
        'has-options': hasOptions,
      })}
    >
      {children}
    </div>
  );
};
