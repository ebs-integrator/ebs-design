import * as React from 'react';

export interface Props {
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Mask: React.FC<Props> = ({ onClick, style }) => (
  <div className="ebs-mask" style={style} onClick={onClick} />
);
