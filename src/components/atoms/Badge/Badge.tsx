import * as React from 'react';
import cn from 'classnames';

export type BadgeType = 'regular' | 'success' | 'info' | 'warning' | 'danger';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  text?: string;
  type?: BadgeType;
}

export const Badge: React.FC<BadgeProps> = ({ count, text, type = 'regular', className, children, ...props }) => {
  return (
    <div className="ebs-badge" {...props}>
      <span className={cn(`ebs-badge__type--${type}`, className)}>
        {(count || text) && (
          <div className={cn('ebs-badge__container', { 'ebs-badge__container--text': text })}>{count || text}</div>
        )}
        {children}
      </span>
    </div>
  );
};
