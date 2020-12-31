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
      className={cn(`ebs-avatar`, `ebs-avatar__size--${size}`, `ebs-avatar__type--${type}`, className, {
        circle: circle,
      })}
    >
      {img && <img className="ebs-avatar__img" src={img} alt="" />}

      <div className="ebs-avatar__short-alt">{shortAlt}</div>

      {status ? <div className={`ebs-avatar__status ebs-avatar__status--${status}`} /> : null}
    </div>
  );
};
