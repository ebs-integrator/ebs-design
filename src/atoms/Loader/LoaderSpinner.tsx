import * as React from 'react';

export type Size = 'small' | 'middle' | 'regular';

export interface Props {
  size?: Size;
  className?: string;
  fixed?: boolean;
}

export const LoaderSpinner: React.FC<Props> = ({ fixed, size = 'regular', className = '' }) => (
  <div
    className={`zh-loader-spinner zh-loader-spinner-type-simple zh-loader-spinner-size-${size}${
      fixed ? ' fixed' : ''
    } ${className}`}
  />
);
