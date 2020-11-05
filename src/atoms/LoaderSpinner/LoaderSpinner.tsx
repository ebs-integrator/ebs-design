import * as React from 'react';

export type SpinnerSize = 'small' | 'middle' | 'regular';

export interface Props {
  size?: SpinnerSize;
  className?: string;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<Props> = ({ fixed, size = 'regular', className = '' }) => (
  <div className={`ebs-loader-spinner ebs-loader-spinner-size-${size}${fixed ? ' fixed' : ''} ${className}`} />
);
