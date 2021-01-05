import * as React from 'react';
import { Alert, AlertType, Container, Row, Col } from '../';

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
        <Alert message="Info" type={AlertType.INFO} />
      </Col>
      <Col size={12}>
        <Alert message="Warning" type={AlertType.WARNING} />
      </Col>
      <Col size={12}>
        <Alert message="Error" type={AlertType.ERROR} />
      </Col>
    </Row>
  </Container>
);
