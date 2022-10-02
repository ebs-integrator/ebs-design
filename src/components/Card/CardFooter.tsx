import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-card');

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, bordered, children, ...props }) => (
  <footer className={cn(bem('footer', { bordered }), className)} {...props}>
    {children}
  </footer>
);
