import * as React from 'react';
import { Button } from 'components/atoms';

import { Collapse } from './Collapse';
import { exportStory } from 'libs';

export default {
  title: exportStory('Collapse', 'atoms'),
  component: Collapse,
};

export const Regular = (): React.ReactElement => (
  <Collapse
    defaultActive={true}
    title="Collapse element"
    rightSide={<Button size="small">History</Button>}
    leftSide={<span>3 items</span>}
  >
    <div>
      test collapse
      <Button>Go to</Button>
    </div>
  </Collapse>
);
