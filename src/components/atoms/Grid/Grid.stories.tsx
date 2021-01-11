import * as React from 'react';

import { Container } from './Container/Container';
import { Row } from './Row/Row';
import { Col } from './Col/Col';
import { exportStory } from '../../../libs';

import './ExampleGrid.scss';

export default {
  title: exportStory('Grid', 'atoms'),
  component: Col,
};

export const _Container = (): React.ReactElement => <Container className="example-block">Container</Container>;

export const _Row = (): React.ReactElement => (
  <Container>
    <Row className="example-block">Row</Row>
  </Container>
);

export const _Col = (): React.ReactElement => (
  <Container>
    <Row className="mb-16">
      <Col>
        <div className="example-block">Col</div>
      </Col>
      <Col>
        <div className="example-block">Col</div>
      </Col>
      <Col>
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
      <Col>
        <div className="example-block">Col</div>
      </Col>
      <Col>
        <div className="example-block">Col</div>
      </Col>
      <Col>
        <div className="example-block">Col</div>
      </Col>
      <Col>
        <div className="example-block">Col</div>
      </Col>
    </Row>

    <Row>
      <Col size={12}>
        <div className="example-block">Col 12</div>
      </Col>
    </Row>
  </Container>
);
