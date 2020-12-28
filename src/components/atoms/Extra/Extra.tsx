import * as React from 'react';
import cn from 'classnames';

export type ExtraStatus = 'success' | 'warning' | 'danger' | 'info' | 'text';

export interface Props {
  className?: string;
  disabled?: boolean;
  status?: ExtraStatus;
  text?: React.ReactNode;
}

export const Extra: React.FC<Props> = ({ className, status = 'text', disabled, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div className={cn(`ebs-extra`, `ebs-extra__status-${status}`, className, { disabled: disabled })}>{text}</div>
  );
};
