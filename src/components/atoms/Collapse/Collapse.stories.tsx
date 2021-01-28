import * as React from 'react';
import { Button } from 'components/atoms';

import { Collapse } from './Collapse';
import { exportStory } from 'libs';

export default {
  title: exportStory('Collapse', 'atoms'),
  component: Collapse,
};

const style = { padding: 16, overflow: 'hidden', verticalAlign: 'center' };

export const Regular = (): React.ReactElement => (
  <Collapse
    defaultActive={true}
    title="Collapse element"
    rightSide={<Button size="small">History</Button>}
    leftSide={<span>3 items</span>}
  >
    <div style={style}>
      test collapse
      <div style={{ float: 'right' }}>
        <Button size="small">Go to</Button>
      </div>
    </div>
  </Collapse>
);
