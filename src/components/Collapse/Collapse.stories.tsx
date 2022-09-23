import * as React from 'react';
import { Icon, Space } from 'components';
import { exportStory } from 'libs';

import { Collapse, CollapseProps } from './Collapse';

const { Group: CollapseGroup, Header: CollapseHeader, Body: CollapseBody } = Collapse;

export default {
  title: exportStory('Collapse', 'surfaces'),
  component: Collapse,
  subcomponents: { CollapseGroup, CollapseHeader, CollapseBody },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

export const Regular: React.FC<CollapseProps> & { args: CollapseProps } = ({ children, ...props }) => (
  <Collapse {...props}>
    <Collapse.Header>Example</Collapse.Header>
    <Collapse.Body>{children}</Collapse.Body>
  </Collapse>
);

export const Group: React.FC<CollapseProps> & { args: CollapseProps } = ({ children, ...props }) => (
  <Collapse.Group>
    <Collapse {...props}>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Example 1
        </Space>
      </Collapse.Header>
      <Collapse.Body>{children}</Collapse.Body>
    </Collapse>
    <Collapse {...props}>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Example 2
        </Space>
      </Collapse.Header>
      <Collapse.Body>{children}</Collapse.Body>
    </Collapse>
    <Collapse {...props}>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Example 3
        </Space>
      </Collapse.Header>
      <Collapse.Body>{children}</Collapse.Body>
    </Collapse>
  </Collapse.Group>
);

Regular.args = {
  size: 'medium',
  collapsed: true,
  bordered: false,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed unde, aut nobis tempora debitis explicabo dicta qui nulla corrupti.',
};

Group.args = Regular.args;
