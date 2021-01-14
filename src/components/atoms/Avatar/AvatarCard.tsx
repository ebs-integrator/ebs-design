import * as React from 'react';
import cn from 'classnames';
import { Avatar, AvatarType } from './Avatar';

export interface CardProps {
  type?: AvatarType;
  size?: 'small' | 'big';
  className?: string;
  shortAlt?: string;
  alt: React.ReactNode;
  icon?: React.ReactNode;
  circle?: boolean;
  img?: string;
  status?: string;
  description?: string;
  reversed?: boolean;
}

export const AvatarCard: React.FC<CardProps> = ({
  className = '',
  type = 'regular',
  icon,
  img,
  shortAlt,
  alt,
  status,
}) => (
  <div className={cn('ebs-avatar__card', className)}>
    <Avatar size="small" type={type} icon={icon} img={img} shortAlt={shortAlt} alt={alt} status={status} />

    <div className="ebs-avatar__card-alt">{alt}</div>
  </div>
);
