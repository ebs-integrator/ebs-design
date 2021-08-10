import * as React from 'react';
import { Icon as SVGIcon, Row, Col } from 'components/atoms';
import SizeSwitcher from 'components/SizeSwitcher';

import { Button, ButtonSize, ButtonGroup } from './Button';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Button', 'atoms'),
  component: Button,
  subcomponents: { ButtonGroup },
};

export const Primary = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="primary" size={size as ButtonSize}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="primary" size={size as ButtonSize}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="primary" size={size as ButtonSize}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="primary" disabled size={size as ButtonSize}>
            Disabled
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const Fill = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="fill" size={size as ButtonSize}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="fill" size={size as ButtonSize}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="fill" size={size as ButtonSize}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="fill" disabled size={size as ButtonSize}>
            Disabled
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const Ghost = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="ghost" size={size as ButtonSize}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="ghost" size={size as ButtonSize}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="ghost" size={size as ButtonSize}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="ghost" disabled size={size as ButtonSize}>
            Disabled
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const Dark = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="dark" size={size as ButtonSize}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="dark" size={size as ButtonSize}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="dark" size={size as ButtonSize}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="dark" disabled size={size as ButtonSize}>
            Disabled
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const Text = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="text" size={size as ButtonSize}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="text" size={size as ButtonSize}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="text" size={size as ButtonSize}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="text" disabled size={size as ButtonSize}>
            Disabled
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const Icon = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button type="primary" size={size as ButtonSize} icon="home">
            Primary
          </Button>
        </Col>

        <Col>
          <Button type="fill" size={size as ButtonSize} icon="home">
            Fill
          </Button>
        </Col>

        <Col>
          <Button type="text" size={size as ButtonSize} icon="home">
            Text
          </Button>
        </Col>

        <Col>
          <Button type="ghost" size={size as ButtonSize} icon="home">
            Ghost
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);

export const WithIcon = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button type="primary" size={size as ButtonSize} prefix={<SVGIcon type="home" />}>
            Primary
          </Button>
        </Col>

        <Col>
          <Button type="fill" size={size as ButtonSize} prefix={<SVGIcon type="home" />}>
            Fill
          </Button>
        </Col>

        <Col>
          <Button type="text" size={size as ButtonSize} prefix={<SVGIcon type="home" />}>
            Text
          </Button>
        </Col>

        <Col>
          <Button type="ghost" size={size as ButtonSize} prefix={<SVGIcon type="home" />}>
            Ghost
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);
