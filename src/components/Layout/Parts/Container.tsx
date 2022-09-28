import * as React from 'react';
import cn from 'classnames';

import { useLayoutState } from '../context';

export const Container = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { toggled, hasOptions } = useLayoutState();

  return (
    <div
      className={cn(`ebs-layout`, `ebs-layout__sidebar--${toggled ? `toggled` : `untoggled`}`, className, {
        'has-options': hasOptions,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
