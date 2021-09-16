import * as React from 'react';
import { LoaderInline } from './LoaderInline';
import { LoaderSpinner, LoaderSpinnerProps } from './LoaderSpinner';

export type SpinnerSize = 'small' | 'middle' | 'regular';

export interface LoaderComposition {
  Inline: React.FC;
  Spinner: React.FC<LoaderSpinnerProps>;
}

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  fade?: boolean;
  size?: SpinnerSize;
  loading: boolean;
  fixed?: boolean;
  height?: number | string;
}

const Loader: React.FC<LoaderProps> & LoaderComposition = ({
  fade = true,
  fixed,
  size = 'regular',
  loading,
  height = 350,
  children,
  className,
  ...props
}) => {
  return (
    <div className={`ebs-loader ${className}`} style={{ minHeight: loading ? height : undefined }} {...props}>
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

Loader.displayName = 'Loader';

Loader.Inline = LoaderInline;
Loader.Spinner = LoaderSpinner;

export { Loader };
