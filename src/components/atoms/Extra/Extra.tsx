import * as React from 'react';

export type ExtraStatus = 'success' | 'warning' | 'danger' | 'info' | 'text';

export interface Props {
  className?: string;
  disabled?: boolean;
  status?: ExtraStatus;
  text?: React.ReactNode;
}

export const Extra: React.FC<Props> = ({ className = '', status = 'text', disabled, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div className={`ebs-extra ebs-extra-status-${status} ${disabled ? ' disabled' : ''} ${className}`}>{text}</div>
  );
};
