import * as React from 'react';
import { Button, Icon } from 'components/atoms';

import { Collapse, CollapseGroup } from './Collapse';
import { exportStory } from 'libs';

export default {
  title: exportStory('Collapse', 'atoms'),
  component: Collapse,
  subcomponents: { CollapseGroup },
};

const style = { padding: 16, overflow: 'hidden', verticalAlign: 'center' };

export const Regular = (): React.ReactElement => (
  <Collapse
    defaultActive={true}
    title="Collapse element"
    rightSide={
      <Button size="small" stopPropagation>
        History
      </Button>
    }
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

export const Group = (): React.ReactElement => (
  <CollapseGroup title="Conditions">
    <Collapse
      defaultActive={true}
      title={
        <>
          <Icon type="star" />
          Condition 1
        </>
      }
    >
      <div style={style}>test collapse</div>
    </Collapse>
    <Collapse
      defaultActive={false}
      title={
        <>
          <Icon type="star" />
          Condition 2
        </>
      }
    >
      <div style={style}>test collapse</div>
    </Collapse>
    <Collapse
      defaultActive={false}
      title={
        <>
          <Icon type="star" />
          Condition 3
        </>
      }
    >
      <div style={style}>test collapse</div>
    </Collapse>
  </CollapseGroup>
);
