import * as React from 'react';

import { Empty } from './Empty';
import { exportStory } from 'libs';

export default {
  title: exportStory('Empty', 'atoms'),
  component: Empty,
};

export const Regular = (): React.ReactElement => <Empty description="No data" />;
