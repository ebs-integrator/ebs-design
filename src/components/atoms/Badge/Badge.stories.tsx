import * as React from 'react';
import { Badge, BadgeType } from './Badge';
import { Container, Row, Col, Icon } from '..';
import { Button } from '../../organisms';

export default {
  title: 'Badge',
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
          <Icon type="message" />
        </Badge>
      </Col>
      <Col>
        <Badge count={2} type={BadgeType.DANGER}>
          <Icon type="bell" />
        </Badge>
      </Col>
      <Col>
        <Badge count={3} type={BadgeType.SUCCESS}>
          <Button type="primary" size="medium" icon="message">
            Primary
          </Button>
        </Badge>
      </Col>
      <Col>
        <Badge text="Info" type={BadgeType.INFO}>
          <Button type="ghost" size="medium">
            Example
          </Button>
        </Badge>
      </Col>
      <Col>
        <Badge text="New" type={BadgeType.WARNING}>
          <Button type="text" size="medium">
            Example
          </Button>
        </Badge>
      </Col>
    </Row>
  </Container>
);
