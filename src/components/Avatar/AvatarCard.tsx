import * as React from 'react';
import cn from 'classnames';
import { Avatar, AvatarType } from './Avatar';

export type AvatarSize = 'small' | 'big';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AvatarType;
  size?: AvatarSize;
  shortAlt?: React.ReactNode;
  alt?: string;
  icon?: React.ReactNode;
  circle?: boolean;
  img?: string;
  status?: string;
  description?: React.ReactNode;
  reversed?: boolean;
}

export const AvatarCard = ({
  className = '',
  type = 'primary',
  size = 'small',
  icon,
  img,
  shortAlt,
  alt = '',
  status,
  ...props
}: CardProps) => (
  <div className={cn('ebs-avatar__card', className)} {...props}>
    <Avatar size={size} type={type} icon={icon} img={img} shortAlt={shortAlt} alt={alt} status={status} />

    <div className="ebs-avatar__card-alt">{alt}</div>
  </div>
);
