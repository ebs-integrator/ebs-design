import * as React from 'react';
import { SizeSwitcher, Template } from 'components/storybook';

import { Loader, LoaderProps, SpinnerSize } from './Loader';
import { exportStory } from '../../../libs';

const { Inline, Spinner } = Loader;

export default {
  title: exportStory('Loader', 'molecules'),
  component: Loader,
  subcomponents: { Inline, Spinner },
  argTypes: {
    size: {
      options: ['small', 'middle', 'regular'],
      control: { type: 'select' },
    },
  },
};

export const Regular: React.FC<LoaderProps> & { args: LoaderProps } = ({ children, ...props }) => (
  <Template>
    <Loader {...props}>Loaded</Loader>
  </Template>
);

Regular.args = {
  size: 'regular',
  loading: true,
  fade: true,
  fixed: true,
  height: '100%',
};

export const _Inline = (): React.ReactElement => <Loader.Inline />;
export const _Spinner = (): React.ReactElement => (
  <SizeSwitcher sizes={['small', 'middle', 'regular']} defaultSize="regular">
    {(size) => <Loader.Spinner size={size as SpinnerSize} />}
  </SizeSwitcher>
);
