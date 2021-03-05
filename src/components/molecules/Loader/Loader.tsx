import * as React from 'react';
import cn from 'classnames';
import { LoaderInline } from './LoaderInline';
import { LoaderSpinner, LoaderSpinnerProps } from './LoaderSpinner';

export type SpinnerSize = 'small' | 'middle' | 'regular';

export interface LoaderComposition {
  Inline: React.FC;
  Spinner: React.FC<LoaderSpinnerProps>;
}

export interface LoaderProps {
  fade?: boolean;
  size?: SpinnerSize;
  loading: boolean;
  fixed?: boolean;
  height?: number | string;
  children?: React.ReactNode;
  className?: string;
}

const Loader: React.FC<LoaderProps> & LoaderComposition = ({
  fade = true,
  fixed,
  size = 'regular',
  loading,
  height = 350,
  className,
  children,
}) => {
  return (
    <div
      className={cn('ebs-loader', { 'ebs-loader--loading': loading }, className)}
      style={{ minHeight: loading ? height : undefined }}
    >
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
