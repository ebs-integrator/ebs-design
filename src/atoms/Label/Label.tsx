import * as React from 'react';

import './Label.scss';

export interface Props {
  className?: string;
  disabled?: boolean;
  text?: React.ReactNode;
}

export const Label: React.FC<Props> = ({ className = '', disabled, text }) => {
  if (!text) {
    return null;
  }

  return <div className={`ebs-label${disabled ? ' disabled' : ''} ${className}`}>{text}</div>;
};
