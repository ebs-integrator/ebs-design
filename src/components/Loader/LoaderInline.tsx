import * as React from 'react';
import { LoaderSpinner } from './LoaderSpinner';

export const LoaderInline = ({ children = 'Loading ...', ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className="ebs-loader__inline" {...props}>
      <LoaderSpinner size="small" />
      {children}
    </span>
  );
};
