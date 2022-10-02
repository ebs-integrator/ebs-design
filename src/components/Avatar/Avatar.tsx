import * as React from 'react';
import cn from 'classnames';
import { colorFromString, firstLetters, makeBEM } from 'libs';

const bem = makeBEM('ebs-avatar');

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
  children,
  status,
  ...props
}) => {
  const shortAlt = React.useMemo(() => ($shortAlt ? $shortAlt : alt ? firstLetters(alt, shortLetters) : alt), [alt]);

  return (
    <div
      {...props}
      className={cn(bem(null, [size, type], { circle }), className)}
      style={{ backgroundColor: type === 'dynamic' ? colorFromString(alt) : undefined, ...props.style }}
    >
      {img ? (
        <img className={bem('img')} src={img} alt={alt} />
      ) : icon ? (
        icon
      ) : (
        shortAlt && <div className={bem('short-alt')}>{shortAlt}</div>
      )}

      {children}

      {status ? <div className={bem('status', [status])} /> : null}
    </div>
  );
};
