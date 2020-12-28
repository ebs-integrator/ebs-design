import * as React from 'react';
import cn from 'classnames';
import { Grid, ColSize, ColSizeType, ColsType, ColType } from './interface';
import { getClassName } from './utils';

export interface ContainerProps extends Grid {
  size?: ColSize;
}

export const Container: React.FC<ContainerProps> = ({ size, offset, g, gx, gy, className, children, ...props }) => {
  return (
    <div
      className={cn(`container`, className, {
        [`container-${size}`]: size,
        ...getClassName({ offset, g, gx, gy }),
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export interface RowProps extends Grid {
  type?: ColsType;
  sm: ColsType;
}

export const Row: React.FC<RowProps> = ({ type, offset, g, gx, gy, className, children, ...props }) => {
  return (
    <div
      className={cn(`row`, className, {
        [`row-cols-${type}`]: type,
        ...getClassName({ offset, g, gx, gy }),
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export interface ColProps extends Grid {
  type?: ColType;
  sm?: ColType | ColSizeType;
  md?: ColType | ColSizeType;
  lg?: ColType | ColSizeType;
  xl?: ColType | ColSizeType;
  xxl?: ColType | ColSizeType;
}

export const Col: React.FC<ColProps> = ({
  type,
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
      [`col-${type}`]: type,
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
