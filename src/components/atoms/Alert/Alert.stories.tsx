import * as React from 'react';

import { Alert, Container, Row, Col } from '../';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Alert', 'atoms'),
  component: Alert,
};

export const regular = (): React.ReactElement => (
  <Container>
    <Row className="gy-4">
      <Col size={12}>
        <Alert icon message="Success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ratione!
        </Alert>
      </Col>
      <Col size={12}>
        <Alert icon message="Info" type="info" />
      </Col>
      <Col size={12}>
        <Alert icon message="Warning" type="warning" />
      </Col>
      <Col size={12}>
        <Alert icon message="Error" type="error" />
      </Col>
    </Row>
  </Container>
);

export const closable = (): React.ReactElement => (
  <Container>
    <Row className="gy-4">
      <Col size={12}>
        <Alert icon message="Success" closable />
      </Col>
      <Col size={12}>
        <Alert icon message="Info" type="info" closable />
      </Col>
      <Col size={12}>
        <Alert icon message="Warning" type="warning" closable />
      </Col>
      <Col size={12}>
        <Alert icon message="Error" type="error" closable />
      </Col>
    </Row>
  </Container>
);

export const outlined = (): React.ReactElement => (
  <Container>
    <Row className="gy-4">
      <Col size={12}>
        <Alert icon message="Success" outlined />
      </Col>
      <Col size={12}>
        <Alert icon message="Info" type="info" outlined />
      </Col>
      <Col size={12}>
        <Alert icon message="Warning" type="warning" outlined />
      </Col>
      <Col size={12}>
        <Alert icon message="Error" type="error" outlined />
      </Col>
    </Row>
  </Container>
);
