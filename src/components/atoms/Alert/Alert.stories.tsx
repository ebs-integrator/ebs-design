import * as React from 'react';
import { Alert, Container, Row, Col } from '../';

export default {
  title: 'Alert',
  component: Alert,
};

export const regular = (): React.ReactElement => (
  <Container>
    <Row className="gy-4">
      <Col size={12}>
        <Alert message="Success" />
      </Col>
      <Col size={12}>
        <Alert message="Info" type="info" />
      </Col>
      <Col size={12}>
        <Alert message="Warning" type="warning" />
      </Col>
      <Col size={12}>
        <Alert message="Error" type="error" />
      </Col>
    </Row>
  </Container>
);
