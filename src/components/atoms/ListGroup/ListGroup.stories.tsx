import * as React from 'react';

import { ListGroup } from './ListGroup';
import { exportStory } from 'libs';

const { Item: ListGroupItem } = ListGroup;

export default {
  title: exportStory('List', 'atoms'),
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export const Group = (): React.ReactElement => (
  <ListGroup>
    <ListGroup.Item>Example 1</ListGroup.Item>
    <ListGroup.Item>Example 2</ListGroup.Item>
    <ListGroup.Item>Example 3</ListGroup.Item>
    <ListGroup.Item>Example 4</ListGroup.Item>
    <ListGroup.Item>Example 5</ListGroup.Item>
  </ListGroup>
);

export const Item = (): React.ReactElement => <ListGroup.Item>Example</ListGroup.Item>;
