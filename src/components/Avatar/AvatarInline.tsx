import * as React from 'react';
import cn from 'classnames';
import { Avatar } from './Avatar';
import { CardProps } from './AvatarCard';

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
  <div
    className={cn(
      `ebs-avatar__inline`,
      {
        'ebs-avatar__inline--reversed': reversed,
        'ebs-avatar__inline--light': type === 'light',
      },
      className,
    )}
    {...props}
  >
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

    <div className="ebs-avatar__inline-alt">
      {alt}
      {description && <div className="ebs-avatar__inline-description">{description}</div>}
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
