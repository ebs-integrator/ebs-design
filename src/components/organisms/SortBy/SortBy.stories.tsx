import * as React from 'react';

import { SortBy } from './SortBy';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('SortBy', 'organisms'),
  component: SortBy,
};

export const regular = (): React.ReactNode => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <SortBy options={[{ title: 'Example', value: 'example' }, { title: 'Example 2', value: 'example_2' }]} onChange={(): null => null} />
    </div>
  </div>
);
