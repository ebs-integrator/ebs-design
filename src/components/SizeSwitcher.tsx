import * as React from 'react';
import { capitalize } from 'libs';

import { Button, ButtonGroup } from './atoms/Button/Button';

interface Props {
  sizes?: string[];
  defaultSize?: string;
  children: (size: string) => React.ReactNode;
}

const SizeSwitcher: React.FC<Props> = ({ sizes = ['small', 'medium', 'large'], defaultSize = 'medium', children }) => {
  const [size, setSize] = React.useState(defaultSize);

  return (
    <>
      <ButtonGroup className="mb-30">
        {sizes.map((value, i) => (
          <Button key={i} size="small" type={size === value ? 'primary' : 'fill'} onClick={() => setSize(value)}>
            {capitalize(value)}
          </Button>
        ))}
      </ButtonGroup>

      {children(size)}
    </>
  );
};

export default SizeSwitcher;
