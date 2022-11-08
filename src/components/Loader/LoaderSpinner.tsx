import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { SpinnerSize } from './Loader';

const bem = makeBEM('ebs-loader');

export interface LoaderSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  fixed?: boolean;
}

export const LoaderSpinner = ({ fixed, size = 'regular', className, ...props }: LoaderSpinnerProps) => (
  <div className={cn(bem('spinner', [size], { fixed }), className)} {...props} />
);
