import * as React from 'react';
import { Icon, Space } from 'components/atoms';

import { Collapse } from './Collapse';
import { exportStory } from 'libs';

const { Group: CollapseGroup, Header: CollapseHeader, Body: CollapseBody } = Collapse;

export default {
  title: exportStory('Collapse', 'atoms'),
  component: Collapse,
  subcomponents: { CollapseGroup, CollapseHeader, CollapseBody },
};

export const Regular = (): React.ReactElement => (
  <Collapse collapsed>
    <Collapse.Header>Collapse element</Collapse.Header>
    <Collapse.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed unde, aut nobis tempora debitis explicabo
        dicta qui nulla corrupti.
      </p>
    </Collapse.Body>
  </Collapse>
);

export const Group = (): React.ReactElement => (
  <Collapse.Group>
    <Collapse bordered>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Condition 1
        </Space>
      </Collapse.Header>
      <Collapse.Body>Example collapse</Collapse.Body>
    </Collapse>
    <Collapse collapsed>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Condition 2
        </Space>
      </Collapse.Header>
      <Collapse.Body>Example collapse</Collapse.Body>
    </Collapse>
    <Collapse collapsed>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Condition 3
        </Space>
      </Collapse.Header>
      <Collapse.Body>Example collapse</Collapse.Body>
    </Collapse>
  </Collapse.Group>
);
