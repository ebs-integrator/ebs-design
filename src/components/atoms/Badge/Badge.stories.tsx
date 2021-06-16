import * as React from 'react';
import { Button } from 'components/atoms';

import { Badge } from './Badge';
import { Container, Row, Col, Icon } from '..';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Badge', 'atoms'),
  component: Badge,
};

export const regular = (): React.ReactElement => (
  <Container>
    <Row>
      <Col size={12}>
        <div className="storybook-header">Badges</div>
      </Col>
      <Col>
        <Badge count={2}>
          <Icon model="bold" type="message" />
        </Badge>
      </Col>
      <Col>
        <Badge count={2} type="danger">
          <Icon type="bell" />
        </Badge>
      </Col>
      <Col>
        <Badge count={3} type="success">
          <Button type="primary" size="medium" icon="message">
            Primary
          </Button>
        </Badge>
      </Col>
      <Col>
        <Badge text="Info" type="info">
          <Button type="ghost" size="medium">
            Example
          </Button>
        </Badge>
      </Col>
      <Col>
        <Badge text="New" type="warning">
          <Button type="text" size="medium">
            Example
          </Button>
        </Badge>
      </Col>
    </Row>
  </Container>
);
