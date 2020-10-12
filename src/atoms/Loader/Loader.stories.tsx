import * as React from 'react';
import { Loader, LoaderInline } from './Loader';
import { LoaderSpinner } from './LoaderSpinner';

export default {
  title: 'Loader',
  component: Loader,
};

export const DefaultLoader: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  const onToggleHandler = (): void => setLoading((s) => !s);

  return (
    <>
      <p onClick={onToggleHandler}>Toggle</p>

      <Loader loading={loading}>
        <h1>Test</h1>
      </Loader>
    </>
  );
};

export const oaderInline = (): React.ReactElement => <LoaderInline />;

export const loaderSpinnerSimpleSmall = (): React.ReactElement => <LoaderSpinner size="small" />;

export const loaderSpinnerSimple = (): React.ReactElement => <LoaderSpinner />;
