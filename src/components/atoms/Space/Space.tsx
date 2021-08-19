import * as React from 'react';
import cn from 'classnames';
import { SpaceItem } from './SpaceItem';
import { SizeType } from 'types';

export type SpaceSize = SizeType | number;
export type SpaceDirection = 'horizontal' | 'vertical';

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: SpaceDirection;
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  wrap?: boolean;
}

// Default sizes
const spaceSize = {
  small: 8,
  medium: 16,
  large: 24,
};

export const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
});

function getNumberSize(size: SpaceSize): number {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

export const Space: React.FC<SpaceProps> = ({
  size = 'medium',
  direction = 'horizontal',
  wrap = false,
  align = 'center',
  justify,
  className,
  children,
  style,
  ...props
}) => {
  const [horizontalSize, verticalSize] = React.useMemo(
    () => ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map((item) => getNumberSize(item)),
    [size],
  );

  const childNodes = React.Children.toArray(children);

  if (childNodes.length === 0) {
    return null;
  }

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, idx) => {
    if (child !== null && child !== undefined) {
      latestIndex = idx;
    }

    return (
      <SpaceItem key={idx} index={idx} direction={direction} wrap={wrap}>
        {child}
      </SpaceItem>
    );
  });

  return (
    <div
      className={cn(
        'ebs-space',
        {
          [`ebs-space--${direction}`]: direction,
          [`ebs-space__align--${align}`]: align,
          [`ebs-space__justify--${justify}`]: justify,
        },
        className,
      )}
      style={{
        ...(wrap && { flexWrap: 'wrap', marginBottom: -verticalSize }),
        ...style,
      }}
      {...props}
    >
      <SpaceContext.Provider value={{ horizontalSize, verticalSize, latestIndex }}>{nodes}</SpaceContext.Provider>
    </div>
  );
};
