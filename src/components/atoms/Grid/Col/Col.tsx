import * as React from 'react';
import cn from 'classnames';
import { Grid, ColSizeType, ColType } from '../interface';
import { getClassName } from '../utils';

export interface ColProps extends Grid {
  size?: ColType;
  sm?: ColType | ColSizeType;
  md?: ColType | ColSizeType;
  lg?: ColType | ColSizeType;
  xl?: ColType | ColSizeType;
  xxl?: ColType | ColSizeType;
}

export const Col: React.FC<ColProps> = ({
  size,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  g,
  gx,
  gy,
  className,
  children,
  ...props
}) => (
  <div
    className={cn(`col`, className, {
      [`col-${size}`]: size,
      [`col-sm-${(sm && (sm as ColSizeType).col) || sm}`]: sm,
      [`col-md-${(md && (md as ColSizeType).col) || md}`]: md,
      [`col-lg-${(lg && (lg as ColSizeType).col) || lg}`]: lg,
      [`col-xl-${(xl && (xl as ColSizeType).col) || xl}`]: xl,
      [`col-xxl-${(xxl && (xxl as ColSizeType).col) || xxl}`]: xxl,
      ...getClassName({ offset, g, gx, gy }),
    })}
    {...props}
  >
    {children}
  </div>
);
