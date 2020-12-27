import * as React from 'react';
import cn from 'classnames';

export type SpinnerSize = 'small' | 'middle' | 'regular';

export interface Props {
  size?: SpinnerSize;
  className?: string;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<Props> = ({ fixed, size = 'regular', className }) => (
  <div className={cn(`ebs-loader__spinner`, `ebs-loader__spinner-size--${size}`, className, fixed && `fixed`)} />
);
