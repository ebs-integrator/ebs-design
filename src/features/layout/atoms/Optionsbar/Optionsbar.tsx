import * as React from 'react';
import cn from 'classnames';

export interface Props {
  className?: string;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

export const Optionsbar: React.FC<Props> = ({ className, top, bottom }) => {
  return (
    <div className={cn(`ebs-optionsbar`, className)}>
      <div className="ebs-optionsbar__top">{top}</div>

      <div className="ebs-optionsbar__bottom">{bottom}</div>
    </div>
  );
};
