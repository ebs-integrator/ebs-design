import React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { ButtonSize } from './Button';

const bem = makeBEM('ebs-button-group');

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ButtonSize;
}

export const ButtonGroup = ({ size = 'medium', children, className, ...props }: ButtonGroupProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child))
      return React.cloneElement(child as React.ReactElement, { size, className: bem('item') });

    return child;
  });

  return (
    <div className={cn(bem(), className)} {...props}>
      {childrenWithProps}
    </div>
  );
};
