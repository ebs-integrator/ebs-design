import * as React from 'react';

import './Extra.scss';

export interface Props {
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
  text?: React.ReactNode;
}

export const Extra: React.FC<Props> = ({ className = '', disabled, hasError, text }) => {
  if (!text) {
    return null;
  }

  return (
    <div className={`ebs-extra${disabled ? ' disabled' : ''}${hasError ? ' has-error' : ''} ${className}`}>{text}</div>
  );
};
