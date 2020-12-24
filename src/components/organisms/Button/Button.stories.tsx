import * as React from 'react';
import { Icon } from 'components/atoms';
import { Button, ButtonSize, ButtonGroup } from './Button';

export default {
  title: 'Button',
  component: Button,
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

export const primary = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <Button className="mr-15" type="primary" size={size}>
          Normal
        </Button>

        <Button className="mr-15 hover" type="primary" size={size}>
          Hover
        </Button>

        <Button className="mr-15 active" type="primary" size={size}>
          Active
        </Button>

        <Button className="mr-15" type="primary" disabled size={size}>
          Disabled
        </Button>
      </>
    )}
  </SizeSwitcher>
);

export const fill = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <Button className="mr-15" type="fill" size={size}>
          Normal
        </Button>

        <Button className="mr-15 hover" type="fill" size={size}>
          Hover
        </Button>

        <Button className="mr-15 active" type="fill" size={size}>
          Active
        </Button>

        <Button className="mr-15" type="fill" disabled size={size}>
          Disabled
        </Button>
      </>
    )}
  </SizeSwitcher>
);

export const ghost = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <Button className="mr-15" type="ghost" size={size}>
          Normal
        </Button>

        <Button className="mr-15 hover" type="ghost" size={size}>
          Hover
        </Button>

        <Button className="mr-15 active" type="ghost" size={size}>
          Active
        </Button>

        <Button className="mr-15" type="ghost" disabled size={size}>
          Disabled
        </Button>
      </>
    )}
  </SizeSwitcher>
);

export const text = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <Button className="mr-15" type="text" size={size}>
          Normal
        </Button>

        <Button className="mr-15 hover" type="text" size={size}>
          Hover
        </Button>

        <Button className="mr-15 active" type="text" size={size}>
          Active
        </Button>

        <Button className="mr-15" type="text" disabled size={size}>
          Disabled
        </Button>
      </>
    )}
  </SizeSwitcher>
);

export const icon = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <div className="row my-3">
          <div className="col">
            <Button type="primary" size={size} icon="home">
              Primary
            </Button>
          </div>
          <div className="col">
            <Button type="fill" size={size} icon="home">
              Fill
            </Button>
          </div>
          <div className="col">
            <Button type="text" size={size} icon="home">
              Text
            </Button>
          </div>
          <div className="col">
            <Button type="ghost" size={size} icon="home">
              Ghost
            </Button>
          </div>
        </div>
      </>
    )}
  </SizeSwitcher>
);

export const withIcon = (): React.ReactNode => (
  <SizeSwitcher>
    {(size) => (
      <>
        <div className="row my-3">
          <div className="col">
            <Button type="primary" size={size} prefix={<Icon type="home" />}>
              Primary
            </Button>
          </div>
          <div className="col">
            <Button type="fill" size={size} prefix={<Icon type="home" />}>
              Fill
            </Button>
          </div>
          <div className="col">
            <Button type="text" size={size} prefix={<Icon type="home" />}>
              Text
            </Button>
          </div>
          <div className="col">
            <Button type="ghost" size={size} prefix={<Icon type="home" />}>
              Ghost
            </Button>
          </div>
        </div>
      </>
    )}
  </SizeSwitcher>
);
