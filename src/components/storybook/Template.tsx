import * as React from 'react';
import { Container, Row, Col, Space } from 'components';

const Template = ({ children }: React.PropsWithChildren) => (
  <Container>
    <Row>
      <Col className="flex justify-content--center">
        <Space justify="center">{children}</Space>
      </Col>
    </Row>
  </Container>
);

export default Template;
