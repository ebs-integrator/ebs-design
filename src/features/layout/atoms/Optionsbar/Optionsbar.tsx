import * as React from 'react';

import './Optionsbar.scss';

export interface Props {
  className?: string;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

export const Optionsbar: React.FC<Props> = ({ className = '', top, bottom }) => {
  return (
    <div className={`ebs-optionsbar ${className}`}>
      <div className="ebs-optionsbar-top">{top}</div>

      <div className="ebs-optionsbar-bottom">{bottom}</div>
    </div>
  );
};
