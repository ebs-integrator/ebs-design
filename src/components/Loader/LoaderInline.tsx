import * as React from 'react';
import { makeBEM } from 'libs';
import { LoaderSpinner } from './LoaderSpinner';

const bem = makeBEM('ebs-loader');

export const LoaderInline = ({ children = 'Loading ...', ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={bem('inline')} {...props}>
      <LoaderSpinner size="small" />
      {children}
    </span>
  );
};
