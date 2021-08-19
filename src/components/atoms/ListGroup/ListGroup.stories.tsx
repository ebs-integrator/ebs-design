import * as React from 'react';
import { Container, Row, Col } from 'components/atoms';

import { ListGroup, ListGroupProps } from './ListGroup';
import { ListGroupItemProps } from './ListGroupItem';
import { exportStory } from 'libs';

const { Item: ListGroupItem } = ListGroup;

export default {
  title: exportStory('List', 'atoms'),
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export const Group: React.FC<ListGroupProps> & { args: ListGroupProps } = ({ children, ...props }) => (
  <Container>
    <Row className="flex justify-content--center">
      <Col>
        <ListGroup {...props}>
          <ListGroup.Item>Example 1</ListGroup.Item>
          <ListGroup.Item>Example 2</ListGroup.Item>
          <ListGroup.Item>Example 3</ListGroup.Item>
          <ListGroup.Item>Example 4</ListGroup.Item>
          <ListGroup.Item>Example 5</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

Group.args = {
  className: '',
};

export const Item: React.FC<ListGroupItemProps> & { args: ListGroupItemProps } = ({ children, ...props }) => (
  <Container>
    <Row className="flex justify-content--center">
      <Col>
        <ListGroup.Item {...props}>Example</ListGroup.Item>
      </Col>
    </Row>
  </Container>
);

Item.args = Group.args;
