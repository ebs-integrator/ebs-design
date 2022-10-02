import * as React from 'react';
import { makeBEM } from 'libs';
import { LoaderSpinner } from './LoaderSpinner';

const bem = makeBEM('ebs-loader');

export const LoaderInline: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  children = 'Loading ...',
  ...props
}) => {
  return (
    <span className={bem('inline')} {...props}>
      <LoaderSpinner size="small" />
      {children}
    </span>
  );
};
