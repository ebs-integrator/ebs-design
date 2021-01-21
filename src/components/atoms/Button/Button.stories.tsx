import * as React from 'react';
import { Icon as SVGIcon, Row, Col } from 'components/atoms';

import { Button, ButtonSize, ButtonGroup } from './Button';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Button', 'atoms'),
  component: Button,
  subcomponents: { ButtonGroup },
};

const SizeSwitcher: React.FC<{ children: (size: ButtonSize) => React.ReactNode }> = ({ children }) => {
  const [size, setSize] = React.useState<ButtonSize>('medium');

  return (
    <>
      <ButtonGroup className="mb-30">
        <Button size="small" type={size === 'small' ? 'primary' : 'fill'} onClick={() => setSize('small')}>
          Small
        </Button>

        <Button size="small" type={size === 'medium' ? 'primary' : 'fill'} onClick={() => setSize('medium')}>
          Medium
        </Button>

        <Button size="small" type={size === 'large' ? 'primary' : 'fill'} onClick={() => setSize('large')}>
          Large
        </Button>
      </ButtonGroup>

      {children(size)}
    </>
  );
};

export const Primary = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <Row>
        <Col>
          <Button className="mr-15" type="primary" size={size}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="primary" size={size}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="primary" size={size}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="primary" disabled size={size}>
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
          <Button className="mr-15" type="fill" size={size}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="fill" size={size}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="fill" size={size}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="fill" disabled size={size}>
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
          <Button className="mr-15" type="ghost" size={size}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="ghost" size={size}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="ghost" size={size}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="ghost" disabled size={size}>
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
          <Button className="mr-15" type="dark" size={size}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="dark" size={size}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="dark" size={size}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="dark" disabled size={size}>
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
          <Button className="mr-15" type="text" size={size}>
            Normal
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 hover" type="text" size={size}>
            Hover
          </Button>
        </Col>

        <Col>
          <Button className="mr-15 active" type="text" size={size}>
            Active
          </Button>
        </Col>

        <Col>
          <Button className="mr-15" type="text" disabled size={size}>
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
          <Button type="primary" size={size} icon="home">
            Primary
          </Button>
        </Col>

        <Col>
          <Button type="fill" size={size} icon="home">
            Fill
          </Button>
        </Col>

        <Col>
          <Button type="text" size={size} icon="home">
            Text
          </Button>
        </Col>

        <Col>
          <Button type="ghost" size={size} icon="home">
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
          <Button type="primary" size={size} prefix={<SVGIcon type="home" />}>
            Primary
          </Button>
        </Col>

        <Col>
          <Button type="fill" size={size} prefix={<SVGIcon type="home" />}>
            Fill
          </Button>
        </Col>

        <Col>
          <Button type="text" size={size} prefix={<SVGIcon type="home" />}>
            Text
          </Button>
        </Col>

        <Col>
          <Button type="ghost" size={size} prefix={<SVGIcon type="home" />}>
            Ghost
          </Button>
        </Col>
      </Row>
    )}
  </SizeSwitcher>
);
