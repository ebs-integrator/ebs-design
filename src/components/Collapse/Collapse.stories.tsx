import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Icon, Space } from 'components';
import { Collapse } from './Collapse';

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
} as ComponentMeta<typeof Collapse>;

export const Regular: ComponentStory<typeof Collapse> = ({ children, ...args }) => (
  <Collapse {...args}>
    <Collapse.Header>Example</Collapse.Header>
    <Collapse.Body>{children}</Collapse.Body>
  </Collapse>
);

export const Group: ComponentStory<typeof Collapse> = ({ children, ...args }) => (
  <Collapse.Group>
    <Collapse {...args}>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Example 1
        </Space>
      </Collapse.Header>
      <Collapse.Body>{children}</Collapse.Body>
    </Collapse>
    <Collapse {...args}>
      <Collapse.Header>
        <Space>
          <Icon type="star" />
          Example 2
        </Space>
      </Collapse.Header>
      <Collapse.Body>{children}</Collapse.Body>
    </Collapse>
    <Collapse {...args}>
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
