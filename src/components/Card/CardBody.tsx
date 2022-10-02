import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';

import { makeBEM } from 'libs';
import { CardContext } from './Card';

const bem = makeBEM('ebs-card');

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  const { height, collapsible } = React.useContext(CardContext);

  // Return animated card body for collapse
  if (collapsible) {
    return (
      <div className={cn(bem('body'), className, { 'py-0': height === 0 })} {...props}>
        <AnimateHeight duration={400} height={height}>
          {children}
        </AnimateHeight>
      </div>
    );
  }

  return <div className={cn(bem('body'), className)}>{children}</div>;
};
