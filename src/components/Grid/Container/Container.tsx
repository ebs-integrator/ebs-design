import * as React from 'react';
import cn from 'classnames';
import { Grid, ColSize } from '../interface';
import { getClassName } from '../utils';

export interface ContainerProps extends Grid {
  size?: ColSize;
}

export const Container = ({ size, offset, g, gx, gy, className, style, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(`container`, className, {
        [`container-${size}`]: size,
        ...getClassName({ offset, g, gx, gy }),
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
