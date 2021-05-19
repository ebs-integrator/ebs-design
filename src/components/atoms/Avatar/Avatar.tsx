import * as React from 'react';
import cn from 'classnames';
import { colorFromString, firstLetters } from 'libs';

export type AvatarType = 'regular' | 'primary' | 'light' | 'dynamic';

export interface AvatarProps {
  type?: AvatarType;
  size?: 'small' | 'big';
  className?: string;
  circle?: boolean;
  shortAlt?: React.ReactNode;
  shortLetters?: number;
  alt?: string;
  icon?: React.ReactNode;
  img?: string;
  status?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  type = 'primary',
  size = 'small',
  className = '',
  icon,
  circle,
  shortAlt: $shortAlt,
  shortLetters,
  alt = '',
  img,
  status,
}) => {
  const shortAlt = React.useMemo(() => ($shortAlt ? $shortAlt : alt ? firstLetters(alt, shortLetters) : alt), [alt]);

  return (
    <div
      className={cn(`ebs-avatar`, `ebs-avatar--${size}`, `ebs-avatar--${type}`, className, {
        'ebs-avatar--circle': circle,
      })}
      style={{ backgroundColor: type === 'dynamic' ? colorFromString(alt) : undefined }}
    >
      {img ? (
        <img className="ebs-avatar__img" src={img} alt={alt} />
      ) : icon ? (
        icon
      ) : (
        <div className="ebs-avatar__short-alt">{shortAlt}</div>
      )}

      {status ? <div className={`ebs-avatar__status ebs-avatar__status--${status}`} /> : null}
    </div>
  );
};
