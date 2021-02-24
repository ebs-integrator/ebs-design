import * as React from 'react';
import cn from 'classnames';
import { SpinnerSize } from './Loader';

export interface LoaderSpinnerProps {
  size?: SpinnerSize;
  className?: string;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({ fixed, size = 'regular', className }) => (
  <div className={cn(`ebs-loader__spinner`, `ebs-loader__spinner--${size}`, className, { fixed: fixed })} />
);
