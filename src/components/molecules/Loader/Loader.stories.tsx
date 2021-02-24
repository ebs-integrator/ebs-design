import * as React from 'react';
import { Loader } from './Loader';
import { exportStory } from '../../../libs';

const { Inline, Spinner } = Loader;

export default {
  title: exportStory('Loader', 'molecules'),
  component: Loader,
  subcomponents: { Inline, Spinner },
};

export const Regular: React.FC = () => {
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

export const _Inline = (): React.ReactElement => <Loader.Inline />;
export const _Spinner = (): React.ReactElement => <Loader.Spinner />;
