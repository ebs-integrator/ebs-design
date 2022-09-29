import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';
import { CardContext } from './Card';

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CardBody = ({ className, children, ...props }: CardBodyProps) => {
  const { height, collapsible } = React.useContext(CardContext);

  // Return animated card body for collapse
  if (collapsible) {
    return (
      <div className={cn(`ebs-card__body`, className, { 'py-0': height === 0 })} {...props}>
        <AnimateHeight duration={400} height={height}>
          {children}
        </AnimateHeight>
      </div>
    );
  }

  return <div className={cn(`ebs-card__body`, className)}>{children}</div>;
};
