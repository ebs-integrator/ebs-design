import * as React from 'react';

export interface MaskProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const Mask = ({ onClick, ...props }: MaskProps) => <div className="ebs-mask" onClick={onClick} {...props} />;
