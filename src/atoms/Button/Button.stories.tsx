import * as React from 'react';

import { Button, ButtonGroup } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = (): React.ReactNode => (
  <ButtonGroup>
    <Button type="primary">Normal</Button>
    <Button type="primary" className="hover">
      Hover
    </Button>
    <Button type="primary" className="active">
      Active
    </Button>
    <Button type="primary" disabled>
      Disabled
    </Button>
  </ButtonGroup>
);

export const fill = (): React.ReactNode => (
  <ButtonGroup>
    <Button type="fill">Normal</Button>
    <Button type="fill" className="hover">
      Hover
    </Button>
    <Button type="fill" className="active">
      Active
    </Button>
    <Button type="fill" disabled>
      Disabled
    </Button>
  </ButtonGroup>
);

export const ghost = (): React.ReactNode => (
  <ButtonGroup>
    <Button type="ghost">Normal</Button>
    <Button type="ghost" className="hover">
      Hover
    </Button>
    <Button type="ghost" className="active">
      Active
    </Button>
    <Button type="ghost" disabled>
      Disabled
    </Button>
  </ButtonGroup>
);

export const text = (): React.ReactNode => (
  <ButtonGroup>
    <Button type="text">Normal</Button>
    <Button type="text" className="hover">
      Hover
    </Button>
    <Button type="text" className="active">
      Active
    </Button>
    <Button type="text" disabled>
      Disabled
    </Button>
  </ButtonGroup>
);
