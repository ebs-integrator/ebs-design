import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { SpinnerSize } from './Loader';

const bem = makeBEM('ebs-loader');

export interface LoaderSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({ fixed, size = 'regular', className, ...props }) => (
  <div className={cn(bem('spinner', [size], { fixed }), className)} {...props} />
);
