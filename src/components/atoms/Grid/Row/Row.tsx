import * as React from 'react';
import cn from 'classnames';
import { Grid, ColsType } from '../interface';
import { getClassName } from '../utils';

export interface RowProps extends Grid {
  size?: ColsType;
}

export const Row: React.FC<RowProps> = ({ size, offset, g, gx, gy, className, style, children, ...props }) => {
  return (
    <div
      className={cn(`row`, className, {
        [`row-cols-${size}`]: size,
        ...getClassName({ offset, g, gx, gy }),
      })}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
