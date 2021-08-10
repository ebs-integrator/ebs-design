import * as React from 'react';
import SizeSwitcher from 'components/SizeSwitcher';

import { Loader, SpinnerSize } from './Loader';
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
    <SizeSwitcher sizes={['small', 'middle', 'regular']} defaultSize="regular">
      {(size) => (
        <>
          <p onClick={onToggleHandler}>Toggle</p>

          <Loader size={size as SpinnerSize} loading={loading}>
            <h1>Test</h1>
          </Loader>
        </>
      )}
    </SizeSwitcher>
  );
};

export const _Inline = (): React.ReactElement => <Loader.Inline />;
export const _Spinner = (): React.ReactElement => (
  <SizeSwitcher sizes={['small', 'middle', 'regular']} defaultSize="regular">
    {(size) => <Loader.Spinner size={size as SpinnerSize} />}
  </SizeSwitcher>
);
