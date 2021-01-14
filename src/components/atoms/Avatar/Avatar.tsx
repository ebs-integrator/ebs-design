import * as React from 'react';
import cn from 'classnames';
import { firstLetters } from 'libs/string';

export type AvatarType = 'regular' | 'primary';

export interface AvatarProps {
  type?: AvatarType;
  size?: 'small' | 'big';
  className?: string;
  circle?: boolean;
  shortAlt?: string;
  alt: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  status?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  type = 'regular',
  size = 'small',
  className = '',
  icon,
  circle,
  shortAlt: $shortAlt,
  alt,
  img,
  status,
}) => {
  const shortAlt = React.useMemo(
    () => ($shortAlt ? firstLetters($shortAlt) : typeof alt === 'string' ? firstLetters(alt) : alt),
    [alt],
  );

  return (
    <div
      className={cn(`ebs-avatar`, `ebs-avatar__size--${size}`, `ebs-avatar__type--${type}`, className, {
        circle: circle,
      })}
    >
      {img ? (
        <img className="ebs-avatar__img" src={img} alt={typeof alt === 'string' ? alt : ''} />
      ) : icon ? (
        icon
      ) : (
        <div className="ebs-avatar__short-alt">{shortAlt}</div>
      )}

      {status ? <div className={`ebs-avatar__status ebs-avatar__status--${status}`} /> : null}
    </div>
  );
};
