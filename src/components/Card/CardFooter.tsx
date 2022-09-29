import * as React from 'react';
import cn from 'classnames';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

export const CardFooter = ({ className, bordered, children, ...props }: CardFooterProps) => (
  <footer className={cn(`ebs-card__footer`, className, { 'ebs-card__footer--bordered': bordered })} {...props}>
    {children}
  </footer>
);
