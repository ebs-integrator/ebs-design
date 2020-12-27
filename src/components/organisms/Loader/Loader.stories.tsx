import * as React from 'react';
import { Loader, LoaderInline as UILoaderInline } from './Loader';

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

export const LoaderInline = (): React.ReactElement => <UILoaderInline />;
