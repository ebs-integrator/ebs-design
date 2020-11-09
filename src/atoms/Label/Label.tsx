import * as React from 'react';

import './Label.scss';

export type LabelType = 'regular' | 'circle';

export type LabelStatus = 'success' | 'warning' | 'danger' | 'info' | 'text';

export interface Props {
  className?: string;
  type?: LabelType;
  status?: LabelStatus;
  disabled?: boolean;
  text?: React.ReactNode;
}

export const Label: React.FC<Props> = ({ className = '', type = 'regular', status = 'text', disabled, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div
      className={`ebs-label ebs-label-${type} ebs-label-status-${status}${disabled ? ' disabled' : ''} ${className}`}
    >
      {text}
    </div>
  );
};
