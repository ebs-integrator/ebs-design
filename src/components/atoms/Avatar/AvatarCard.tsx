import * as React from 'react';
import cn from 'classnames';
import { Avatar } from './Avatar';

export interface CardProps {
  type?: 'regular';
  size?: 'small' | 'big';
  className?: string;
  shortAlt?: string;
  alt: React.ReactNode;
  circle?: boolean;
  img?: string;
  status?: string;
  role?: string;
  roleLowerCase?: boolean;
  reversed?: boolean;
}

export const AvatarCard: React.FC<CardProps> = ({ className = '', img, shortAlt, alt, status }) => (
  <div className={`ebs-avatar__card ${className}`}>
    <Avatar size="small" img={img} shortAlt={shortAlt} alt={alt} status={status} />

    <div className="ebs-avatar__card-alt">{alt}</div>
  </div>
);

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
