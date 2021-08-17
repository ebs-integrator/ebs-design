import * as React from 'react';

export interface MaskProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const Mask: React.FC<MaskProps> = ({ onClick, ...props }) => (
  <div className="ebs-mask" onClick={onClick} {...props} />
);
