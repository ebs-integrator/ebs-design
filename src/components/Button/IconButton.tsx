import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon, modelType } from 'components/Icon/Icon';
import { Button, ButtonProps } from './Button';
import { ButtonSpinner } from './ButtonSpinner';

const bem = makeBEM('ebs-icon-button');

export interface IconButtonProps extends Omit<Omit<ButtonProps, 'prefix'>, 'full'> {
  icon: string | React.ReactNode;
  iconType?: modelType;
}

export const IconButton = ({
  className,
  size = 'medium',
  type = 'primary',
  icon,
  iconType,
  disabled,
  loading,
  ...props
}: IconButtonProps) => {
  return (
    <Button className={cn(bem(null, [size]), className)} size={size} type={type} disabled={disabled} {...props}>
      {loading && !disabled ? (
        <ButtonSpinner type={type} />
      ) : (
        <Icon {...(typeof icon === 'string' ? { type: icon, model: iconType || 'regular' } : { component: icon })} />
      )}
    </Button>
  );
};
