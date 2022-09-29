import * as React from 'react';
import cn from 'classnames';
import { colorFromString, firstLetters } from 'libs';

export type AvatarType = 'regular' | 'primary' | 'light' | 'dynamic';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AvatarType;
  size?: 'small' | 'big';
  circle?: boolean;
  shortAlt?: React.ReactNode;
  shortLetters?: number;
  alt?: string;
  icon?: React.ReactNode;
  img?: string;
  status?: string;
}

export const Avatar = ({
  type = 'primary',
  size = 'small',
  className = '',
  icon,
  circle,
  shortAlt: $shortAlt,
  shortLetters,
  alt = '',
  img,
  children,
  status,
  ...props
}: AvatarProps) => {
  const shortAlt = React.useMemo(() => ($shortAlt ? $shortAlt : alt ? firstLetters(alt, shortLetters) : alt), [alt]);

  return (
    <div
      {...props}
      className={cn(`ebs-avatar`, `ebs-avatar--${size}`, `ebs-avatar--${type}`, className, {
        'ebs-avatar--circle': circle,
      })}
      style={{ backgroundColor: type === 'dynamic' ? colorFromString(alt) : undefined, ...props.style }}
    >
      {img ? (
        <img className="ebs-avatar__img" src={img} alt={alt} />
      ) : icon ? (
        icon
      ) : (
        shortAlt && <div className="ebs-avatar__short-alt">{shortAlt}</div>
      )}

      {children}

      {status ? <div className={`ebs-avatar__status ebs-avatar__status--${status}`} /> : null}
    </div>
  );
};
