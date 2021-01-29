import * as React from 'react';
import { Button, Icon } from 'components/atoms';

import { Collapse } from './Collapse';
import { exportStory } from 'libs';

const { Group: CollapseGroup } = Collapse;

export default {
  title: exportStory('Collapse', 'atoms'),
  component: Collapse,
  subcomponents: { CollapseGroup },
};

const style = { padding: 16, overflow: 'hidden', verticalAlign: 'center' };

export const Regular = (): React.ReactElement => (
  <Collapse collapsed title="Collapse element">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed unde, aut nobis tempora debitis explicabo
      dicta qui nulla corrupti.
    </p>
    <Button>Click me</Button>
  </Collapse>
);

export const Group = (): React.ReactElement => (
  <Collapse.Group title="Conditions">
    <Collapse
      bordered
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
      collapsed
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
      collapsed
      title={
        <>
          <Icon type="star" />
          Condition 3
        </>
      }
    >
      <div style={style}>test collapse</div>
    </Collapse>
  </Collapse.Group>
);
