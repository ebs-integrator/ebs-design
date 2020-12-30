import * as React from 'react';
import cn from 'classnames';
import { firstLetters } from 'libs/string';

interface Props {
  type?: 'regular';
  size?: 'small' | 'big';
  className?: string;
  circle?: boolean;
  shortAlt?: string;
  alt: React.ReactNode;
  img?: string;
  status?: string;
}

export const Avatar: React.FC<Props> = ({
  type = 'regular',
  size = 'small',
  className = '',
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
      className={cn(`ebs-avatar`, `ebs-avatar-size-${size}`, `ebs-avatar-type-${type}`, className, { circle: circle })}
    >
      {img && <img className="ebs-avatar-img" src={img} alt="" />}

      <div className="ebs-avatar-short-alt">{shortAlt}</div>

      {status ? <div className={`ebs-avatar-status ebs-avatar-status-${status}`} /> : null}
    </div>
  );
};

interface CardProps {
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
  <div className={`ebs-avatar-card ${className}`}>
    <Avatar size="small" img={img} shortAlt={shortAlt} alt={alt} status={status} />

    <div className="ebs-avatar-card-alt">{alt}</div>
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
  <div className={cn(`ebs-avatar-inline`, className, { 'is-reversed': reversed })}>
    {!reversed && <Avatar size="small" shortAlt={shortAlt} img={img} alt={alt} status={status} circle={circle} />}

    <div className="ebs-avatar-inline-alt">
      {alt}
      {role && (
        <div className="ebs-avatar-inline-role" style={roleLowerCase ? { textTransform: 'lowercase' } : undefined}>
          {role}
        </div>
      )}
    </div>

    {reversed && <Avatar size="small" shortAlt={shortAlt} img={img} alt={alt} status={status} circle={circle} />}
  </div>
);
