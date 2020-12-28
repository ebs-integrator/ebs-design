export type GridSize = 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
export type ColSize = 'fluid' | GridSize;
export type ColsType = 'auto' | 1 | 2 | 3 | 4 | 5 | 6;
export type ColType = ColsType | 7 | 8 | 9 | 10 | 11 | 12;
export type Offset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type Gutter = 0 | 1 | 2 | 3 | 4 | 5;

export type ColSizeType = { [key: string]: ColType };

export interface Grid {
  className?: string;
  offset?: Offset | ColSizeType;
  g?: Gutter | ColSizeType;
  gx?: Gutter | ColSizeType;
  gy?: Gutter | ColSizeType;
}
