import { Grid, ColSizeType } from './interface';

export const isNil = (value): boolean => value !== undefined && value !== null;

export const getClassName = ({ offset, g, gx, gy }: Grid): { [key: string]: boolean | undefined } => ({
  [`offset-${offset}`]: !!offset,
  [`offset-sm-${offset && (offset as ColSizeType).sm}`]: isNil(offset && (offset as ColSizeType).sm),
  [`offset-md-${offset && (offset as ColSizeType).md}`]: isNil(offset && (offset as ColSizeType).md),
  [`offset-lg-${offset && (offset as ColSizeType).lg}`]: isNil(offset && (offset as ColSizeType).lg),
  [`offset-xl-${offset && (offset as ColSizeType).xl}`]: isNil(offset && (offset as ColSizeType).xl),
  [`offset-xxl-${offset && (offset as ColSizeType).xxl}`]: isNil(offset && (offset as ColSizeType).xxl),
  [`g-${g}`]: isNil(g),
  [`gx-${gx}`]: isNil(gx),
  [`gy-${gy}`]: isNil(gy),
  [`g-sm-${g && (g as ColSizeType).sm}`]: isNil(g && (g as ColSizeType).sm),
  [`gx-sm-${gx && (gx as ColSizeType).sm}`]: isNil(gx && (gx as ColSizeType).sm),
  [`gy-sm-${gy && (gy as ColSizeType).sm}`]: isNil(gy && (gy as ColSizeType).sm),
  [`g-md-${g && (g as ColSizeType).md}`]: isNil(g && (g as ColSizeType).md),
  [`gx-md-${gx && (gx as ColSizeType).md}`]: isNil(gx && (gx as ColSizeType).md),
  [`gy-md-${gy && (gy as ColSizeType).md}`]: isNil(gy && (gy as ColSizeType).md),
  [`g-lg-${g && (g as ColSizeType).lg}`]: isNil(g && (g as ColSizeType).lg),
  [`gx-lg-${gx && (gx as ColSizeType).lg}`]: isNil(gx && (gx as ColSizeType).lg),
  [`gy-lg-${gy && (gy as ColSizeType).lg}`]: isNil(gy && (gy as ColSizeType).lg),
  [`g-xl-${g && (g as ColSizeType).xl}`]: isNil(g && (g as ColSizeType).xl),
  [`gx-xl-${gx && (gx as ColSizeType).xl}`]: isNil(gx && (gx as ColSizeType).xl),
  [`gy-xl-${gy && (gy as ColSizeType).xl}`]: isNil(gy && (gy as ColSizeType).xl),
  [`g-xxl-${g && (g as ColSizeType).xxl}`]: isNil(g && (g as ColSizeType).xxl),
  [`gx-xxl-${gx && (gx as ColSizeType).xxl}`]: isNil(gx && (gx as ColSizeType).xxl),
  [`gy-xxl-${gy && (gy as ColSizeType).xxl}`]: isNil(gy && (gy as ColSizeType).xxl),
});
