import * as React from 'react';

import { Container, ContainerProps } from './Container/Container';
import { Row, RowProps } from './Row/Row';
import { Col, ColProps } from './Col/Col';
import { exportStory } from 'libs';

import './ExampleGrid.scss';

export default {
  title: exportStory('Grid', 'layout'),
  component: Container,
  subcomponents: { Row, Col },
};

export const _Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <Container className="example-block" {...props}>
    Container
  </Container>
);

export const _Row: React.FC<RowProps> = ({ children, ...props }) => (
  <div className="storybook-rows">
    <Container>
      <Row className="example-block" {...props}>
        Row
      </Row>
    </Container>
  </div>
);

export const _Col: React.FC<ColProps> = ({ children, ...props }) => (
  <Container>
    <Row className="mb-16">
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
    </Row>

    <Row className="mb-16">
      <Col size={4}>
        <div className="example-block">Col 4</div>
      </Col>
      <Col size={8}>
        <div className="example-block">Col 8</div>
      </Col>
    </Row>

    <Row className="mb-16">
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...props}>
        <div className="example-block">Col</div>
      </Col>
    </Row>

    <Row>
      <Col size={12} {...props}>
        <div className="example-block">Col 12</div>
      </Col>
    </Row>
  </Container>
);
