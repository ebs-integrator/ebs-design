import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';

import { makeBEM } from 'libs';
import { CollapseContext } from './Collapse';

const bem = makeBEM('ebs-collapse');

export type CollapseBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseBody: React.FC<CollapseBodyProps> = ({ className, style, children, ...props }) => {
  const { height } = React.useContext(CollapseContext);

  return (
    <div className={cn(bem('body'), className, { 'py-0': height === 0 })} {...props}>
      <AnimateHeight duration={400} height={height}>
        {children}
      </AnimateHeight>
    </div>
  );
};
