import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';
import { CollapseContext } from './Collapse';

export interface CollapseBodyProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CollapseBody: React.FC<CollapseBodyProps> = ({ className, style, children }) => {
  const { height } = React.useContext(CollapseContext);

  return (
    <div className={cn(`ebs-collapse__body`, className, { 'py-0': height === 0 })} style={style}>
      <AnimateHeight duration={400} height={height}>
        {children}
      </AnimateHeight>
    </div>
  );
};
