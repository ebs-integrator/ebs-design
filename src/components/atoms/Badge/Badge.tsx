import * as React from 'react';
import cn from 'classnames';

export enum BadgeType {
  REGULAR = 'regular',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface Props {
  count?: number;
  text?: string;
  type?: BadgeType;
  className?: string;
}

export const Badge: React.FC<Props> = ({ count, text, type = BadgeType.REGULAR, className, children }) => {
  return (
    <div className="ebs-badge">
      <span className={cn(`ebs-badge__type--${type}`, className)}>
        {(count || text) && <div className={cn('ebs-badge__container', { 'is-text': text })}>{count || text}</div>}
        {children}
      </span>
    </div>
  );
};
