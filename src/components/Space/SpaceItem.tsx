import * as React from 'react';

import { makeBEM } from 'libs';
import { SpaceContext, SpaceDirection } from './Space';

const bem = makeBEM('ebs-space');

export interface ItemProps {
  index: number;
  direction?: SpaceDirection;
  wrap?: boolean;
}

export const SpaceItem: React.FC<React.PropsWithChildren<ItemProps>> = ({ direction, index, wrap, children }) => {
  const { horizontalSize, verticalSize, latestIndex } = React.useContext(SpaceContext);

  let style: React.CSSProperties = {};

  if (direction === 'vertical') {
    if (index < latestIndex) {
      style = { marginBottom: horizontalSize };
    }
  } else {
    style = {
      ...(index < latestIndex && { marginRight: horizontalSize }),
      ...(wrap && { paddingBottom: verticalSize }),
    };
  }

  if (children === null || children === undefined) {
    return null;
  }

  return (
    <div className={bem('item')} style={style}>
      {children}
    </div>
  );
};
