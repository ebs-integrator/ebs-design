import * as React from 'react';
import cn from 'classnames';
import { LoaderInline } from './LoaderInline';
import { LoaderSpinner } from './LoaderSpinner';

export type SpinnerSize = 'small' | 'middle' | 'regular';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  fade?: boolean;
  size?: SpinnerSize;
  loading: boolean;
  fixed?: boolean;
  height?: number | string;
}

const Loader = ({
  fade = true,
  fixed,
  size = 'regular',
  loading,
  height = 350,
  children,
  className,
  ...props
}: LoaderProps) => {
  return (
    <div className={cn('ebs-loader', className)} style={{ minHeight: loading ? height : undefined }} {...props}>
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
