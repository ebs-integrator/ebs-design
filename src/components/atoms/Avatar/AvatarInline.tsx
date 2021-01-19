import * as React from 'react';
import cn from 'classnames';
import { Avatar } from './Avatar';
import { CardProps } from './AvatarCard';

export const AvatarInline: React.FC<CardProps> = ({
  className = '',
  type = 'primary',
  icon,
  img,
  shortAlt,
  circle,
  alt,
  status,
  description,
  reversed = false,
}) => (
  <div
    className={cn(
      `ebs-avatar__inline`,
      {
        'ebs-avatar__inline--reversed': reversed,
        'ebs-avatar__inline--white': type === 'white',
      },
      className,
    )}
  >
    {!reversed && (
      <Avatar
        size="small"
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
        size="small"
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
