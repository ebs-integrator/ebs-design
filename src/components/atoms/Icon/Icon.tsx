import * as React from 'react';
import { icons } from './iconsList';
import cn from 'classnames';

export type IconType = keyof typeof icons.regular & keyof typeof icons.bold;
export type modelType = 'regular' | 'bold';
export interface IconProps {
  onClick?: () => void;
  type?: IconType;
  className?: string;
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
    className: cn(`ebs-icon`, `ebs-icon--${type}`, className),
  };

  if (Component) {
    return Component.render({ ...defaultProps });
  }

  if (type in icons[model]) {
    const IconType = icons[model][type];
    return <IconType {...defaultProps} />;
  } else {
    console.warn(`<Icon /> couldn't find ${type} icon.`);
  }

  return null;
};
