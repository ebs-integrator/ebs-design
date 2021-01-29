import * as React from 'react';
import cn from 'classnames';

export interface CardFooterProps {
  className?: string;
  bordered?: boolean;
}

export const CardFooter: React.FC<CardFooterProps> = ({ className, bordered, children }) => (
  <footer className={cn(`ebs-card__footer`, className, { 'ebs-card__footer--bordered': bordered })}>{children}</footer>
);
