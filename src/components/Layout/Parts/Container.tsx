import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { useLayoutState } from '../context';

const bem = makeBEM('ebs-layout');

export const Container = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { toggled, hasOptions } = useLayoutState();

  return (
    <div
      className={cn(
        bem(),
        bem('sidebar', [toggled ? 'toggled' : 'untoggled'], { 'has-options': hasOptions }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
