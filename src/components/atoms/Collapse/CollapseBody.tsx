import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';
import { CollapseContext } from './Collapse';

export type CollapseBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CollapseBody: React.FC<CollapseBodyProps> = ({ className, style, children, ...props }) => {
  const { height } = React.useContext(CollapseContext);

  return (
    <div className={cn(`ebs-collapse__body`, className, { 'py-0': height === 0 })} {...props}>
      <AnimateHeight duration={400} height={height}>
        {children}
      </AnimateHeight>
    </div>
  );
};
