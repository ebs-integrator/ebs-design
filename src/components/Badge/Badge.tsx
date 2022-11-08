import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-badge');

export type BadgeType = 'regular' | 'success' | 'info' | 'warning' | 'danger';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  text?: string;
  type?: BadgeType;
}

export const Badge = ({
  count,
  text,
  type = 'regular',
  className,
  children,
  ...props
}: React.PropsWithChildren<BadgeProps>) => {
  return (
    <div className={bem()} {...props}>
      <span className={cn(bem('type', [type]), className)}>
        {(count || text) && <div className={bem('container', { text })}>{count || text}</div>}
        {children}
      </span>
    </div>
  );
};
