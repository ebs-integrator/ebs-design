import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';
import { modelType } from 'components/Icon/Icon';
import { Button, ButtonProps, ButtonSpinner } from './Button';

const bem = makeBEM('ebs-icon-button');

export interface IconButtonProps extends Omit<Omit<ButtonProps, 'prefix'>, 'full'> {
  icon?: string | React.ReactNode;
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
        <Icon {...(typeof icon === 'string' ? { type: icon, model: iconType || undefined } : { component: icon })} />
      )}
    </Button>
  );
};
