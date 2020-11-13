import * as React from 'react';
import { $Object } from 'libs/object/object.types';

import './Mask.scss';

export interface Props {
  onClick?: () => void;
  style?: $Object;
}

export const Mask: React.FC<Props> = ({ onClick, style }) => (
  <div className="ebs-mask" style={style} onClick={onClick} />
);
