import * as React from 'react';
import { LoaderSpinner, Size } from './LoaderSpinner';

import './Loader.scss';

export interface Props {
  fade?: boolean;
  size?: Size;
  loading: boolean;
  fixed?: boolean;
  height?: number | string;
  children?: React.ReactNode;
}

export const Loader: React.FC<Props> = ({ fade = true, fixed, size = 'regular', loading, height = 350, children }) => {
  return (
    <div className="ebs-loader" style={{ minHeight: loading ? height : undefined }}>
      <LoaderSpinner fixed={fixed} size={size} className={!loading ? 'hide' : ''} />

      {fade ? (
        <div className="fade-in" style={{ display: loading ? 'none' : undefined }}>
          {children}
        </div>
      ) : !loading ? (
        children
      ) : null}
    </div>
  );
};

export const LoaderInline: React.FC = () => {
  return (
    <span className="ebs-loader-inline">
      <LoaderSpinner size="small" />
      Loading ...
    </span>
  );
};
