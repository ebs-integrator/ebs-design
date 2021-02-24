import * as React from 'react';
import { LoaderSpinner } from './LoaderSpinner';

export const LoaderInline: React.FC = ({ children = 'Loading ...' }) => {
  return (
    <span className="ebs-loader__inline">
      <LoaderSpinner size="small" />
      {children}
    </span>
  );
};
