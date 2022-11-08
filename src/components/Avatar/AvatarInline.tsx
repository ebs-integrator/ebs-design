import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Avatar } from './Avatar';
import { CardProps } from './AvatarCard';

const bem = makeBEM('ebs-avatar-inline');

export const AvatarInline = ({
  className = '',
  type = 'primary',
  size = 'small',
  icon,
  img,
  shortAlt,
  circle,
  alt,
  status,
  description,
  reversed = false,
  ...props
}: CardProps) => (
  <div className={cn(bem(null, { reversed, light: type === 'light' }), className)} {...props}>
    {!reversed && (
      <Avatar
        size={size}
        type={type}
        shortAlt={shortAlt}
        icon={icon}
        img={img}
        alt={alt}
        status={status}
        circle={circle}
      />
    )}

    <div className={bem('alt')}>
      {alt}
      {description && <div className={bem('description')}>{description}</div>}
    </div>

    {reversed && (
      <Avatar
        size={size}
        type={type}
        shortAlt={shortAlt}
        icon={icon}
        img={img}
        alt={alt}
        status={status}
        circle={circle}
      />
    )}
  </div>
);
