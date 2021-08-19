import * as React from 'react';
import { LoaderSpinner } from './LoaderSpinner';

export const LoaderInline: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children = 'Loading ...',
  ...props
}) => {
  return (
    <span className="ebs-loader__inline" {...props}>
      <LoaderSpinner size="small" />
      {children}
    </span>
  );
};
