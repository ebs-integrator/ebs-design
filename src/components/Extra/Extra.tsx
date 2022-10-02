import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-extra');

export type ExtraStatus = 'success' | 'warning' | 'danger' | 'info' | 'text';

export interface ExtraProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  status?: ExtraStatus;
  text?: React.ReactNode;
}

export const Extra: React.FC<ExtraProps> = ({ className, status = 'text', disabled, text, ...props }) => {
  if (!text) {
    return null;
  }

  return (
    <div className={cn(bem(null, [status], { disabled }), className)} {...props}>
      {text}
    </div>
  );
};
