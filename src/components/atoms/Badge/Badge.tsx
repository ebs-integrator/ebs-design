import * as React from 'react';
import cn from 'classnames';

export type BadgeType = 'regular' | 'success' | 'info' | 'warning' | 'danger';

interface Props {
  count?: number;
  text?: string;
  type?: BadgeType;
  className?: string;
}

export const Badge: React.FC<Props> = ({ count, text, type = 'regular', className, children }) => {
  return (
    <div className="ebs-badge">
      <span className={cn(`ebs-badge__type--${type}`, className)}>
        {(count || text) && (
          <div className={cn('ebs-badge__container', { 'ebs-badge__container--text': text })}>{count || text}</div>
        )}
        {children}
      </span>
    </div>
  );
};
