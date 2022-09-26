import * as React from 'react';
import { Container, Row, Col, Space } from 'components';

const Template: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container>
    <Row>
      <Col className="flex justify-content--center">
        <Space justify="center">{children}</Space>
      </Col>
    </Row>
  </Container>
);

export default Template;
