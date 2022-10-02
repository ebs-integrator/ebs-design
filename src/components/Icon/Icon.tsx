import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { icons } from './iconsList';

const bem = makeBEM('ebs-icon');

export type modelType = 'regular' | 'bold';
export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  type?: string;
  component?: any;
  model?: modelType;
}

export const Icon: React.FC<IconProps> = ({
  onClick,
  type = 'none',
  model = 'regular',
  className,
  component: Component,
  ...props
}) => {
  const defaultProps = {
    ...props,
    onClick,
    width: '1em',
    height: '1em',
    className: cn(bem(null, [type]), className),
  };

  if (Component) {
    return 'render' in Component ? Component.render({ ...defaultProps }) : Component(defaultProps);
  }

  if (type in icons[model]) {
    const IconType = icons[model][type];
    return <IconType {...defaultProps} />;
  } else {
    console.warn(`<Icon /> couldn't find ${type} icon.`);
  }

  return null;
};
