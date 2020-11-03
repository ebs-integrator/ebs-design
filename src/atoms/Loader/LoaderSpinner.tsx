import * as React from 'react';

export type Size = 'small' | 'middle' | 'regular';

export interface Props {
  size?: Size;
  className?: string;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<Props> = ({ fixed, size = 'regular', className = '' }) => (
  <div
    className={`ebs-loader-spinner ebs-loader-spinner-type-simple ebs-loader-spinner-size-${size}${
      fixed ? ' fixed' : ''
    } ${className}`}
  />
);
