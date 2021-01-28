import * as React from 'react';
import { Icon, Collapse } from 'components/atoms';
import { Group } from './Group';
import { exportStory } from 'libs';

export default {
  title: exportStory('Group', 'atoms'),
  component: Group,
};

const style = { padding: 16, overflow: 'hidden', verticalAlign: 'center' };

export const Regular = (): React.ReactElement => (
  <Group title="Conditions">
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
  </Group>
);
