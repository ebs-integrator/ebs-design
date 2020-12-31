import * as React from 'react';
import cn from 'classnames';
import { Avatar } from './Avatar';
import { CardProps } from './AvatarCard';

export const AvatarInline: React.FC<CardProps> = ({
  className = '',
  img,
  shortAlt,
  circle,
  alt,
  status,
  role,
  roleLowerCase,
  reversed = false,
}) => (
  <div className={cn(`ebs-avatar__inline`, className, { 'is-reversed': reversed })}>
    {!reversed && <Avatar size="small" shortAlt={shortAlt} img={img} alt={alt} status={status} circle={circle} />}

    <div className="ebs-avatar__inline-alt">
      {alt}
      {role && (
        <div className="ebs-avatar__inline-role" style={roleLowerCase ? { textTransform: 'lowercase' } : undefined}>
          {role}
        </div>
      )}
    </div>

    {reversed && <Avatar size="small" shortAlt={shortAlt} img={img} alt={alt} status={status} circle={circle} />}
  </div>
);
