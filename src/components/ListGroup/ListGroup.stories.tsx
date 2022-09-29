import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { ListGroup } from './ListGroup';

const { Item: ListGroupItem } = ListGroup;

export default {
  title: exportStory('List', 'data-display'),
  component: ListGroup,
  subcomponents: { ListGroupItem },
} as ComponentMeta<typeof ListGroup>;

export const Group: ComponentStory<typeof ListGroup> = (args) => (
  <ListGroup {...args}>
    <ListGroup.Item>Example 1</ListGroup.Item>
    <ListGroup.Item>Example 2</ListGroup.Item>
    <ListGroup.Item>Example 3</ListGroup.Item>
    <ListGroup.Item>Example 4</ListGroup.Item>
    <ListGroup.Item>Example 5</ListGroup.Item>
  </ListGroup>
);

Group.args = {
  className: '',
};

export const Item: ComponentStory<typeof ListGroup.Item> = (args) => <ListGroup.Item {...args}>Example</ListGroup.Item>;

Item.args = Group.args;
