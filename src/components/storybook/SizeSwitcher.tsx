import * as React from 'react';
import { Button, ButtonGroup } from 'components';
import { capitalize } from 'libs';

interface Props {
  sizes?: string[];
  defaultSize?: string;
  children: (size: string) => React.ReactNode;
}

const SizeSwitcher = ({ sizes = ['small', 'medium', 'large'], defaultSize = 'medium', children }: Props) => {
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
