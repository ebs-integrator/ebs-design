import * as React from 'react';

import { Container } from './Container/Container';
import { Row } from './Row/Row';
import { Col } from './Col/Col';
import { exportStory } from 'libs';

import './ExampleGrid.scss';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: exportStory('Grid', 'layout'),
  component: Container,
  subcomponents: { Row, Col },
} as ComponentMeta<typeof Container>;

export const _Container: ComponentStory<typeof Container> = ({ children, ...args }) => (
  <Container className="example-block" {...args}>
    Container
  </Container>
);

export const _Row: ComponentStory<typeof Row> = ({ children, ...args }) => (
  <div className="storybook-rows">
    <Container>
      <Row className="example-block" {...args}>
        Row
      </Row>
    </Container>
  </div>
);

export const _Col: ComponentStory<typeof Col> = ({ children, ...args }) => (
  <Container>
    <Row className="mb-16">
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...args}>
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
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
      <Col {...args}>
        <div className="example-block">Col</div>
      </Col>
    </Row>

    <Row>
      <Col size={12} {...args}>
        <div className="example-block">Col 12</div>
      </Col>
    </Row>
  </Container>
);
