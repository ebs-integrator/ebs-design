import * as React from 'react';
import cn from 'classnames';
import AnimateHeight, { Height } from 'react-animate-height';
import { CardContext } from './Card';

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  const { height, collapsible } = React.useContext(CardContext);

  // Return animated card body for collapse
  if (collapsible) {
    return (
      <div className={cn(`ebs-card__body`, className, { 'py-0': height === 0 })} {...props}>
        <AnimateHeight duration={400} height={height as Height}>
          {children}
        </AnimateHeight>
      </div>
    );
  }

  return <div className={cn(`ebs-card__body`, className)}>{children}</div>;
};
