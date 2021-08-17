import * as React from 'react';
import cn from 'classnames';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  bordered?: boolean;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, bordered, children, ...props }) => (
  <footer className={cn(`ebs-card__footer`, className, { 'ebs-card__footer--bordered': bordered })} {...props}>
    {children}
  </footer>
);
