import * as React from 'react';
import { $Object } from 'libs/object/object.types';

export interface Props {
  onClick?: () => void;
  style?: $Object;
}

export const Mask: React.FC<Props> = ({ onClick, style }) => (
  <div className="ebs-mask" style={style} onClick={onClick} />
);
