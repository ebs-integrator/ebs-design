import * as React from 'react';
import cn from 'classnames';
import { SpinnerSize } from './Loader';

export interface LoaderSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  fixed?: boolean;
}

export const LoaderSpinner = ({ fixed, size = 'regular', className, ...props }: LoaderSpinnerProps) => (
  <div className={cn(`ebs-loader__spinner`, `ebs-loader__spinner--${size}`, className, { fixed: fixed })} {...props} />
);
