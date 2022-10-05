import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-label');

export type LabelType = 'regular' | 'fill' | 'ghost' | 'primary';

export type LabelStatus = 'success' | 'warning' | 'danger' | 'info';

export interface LabelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  type?: LabelType;
  circle?: boolean;
  status?: LabelStatus;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
  text?: React.ReactNode;
  onClick?: () => void;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
}

export const Label = ({
  className,
  type = 'regular',
  status,
  circle,
  icon,
  text,
  prefix,
  suffix,
  onClick,
  onClickPrefix,
  onClickSuffix,
  disabled,
  ...props
}: LabelProps) => {
  if (!text && !icon) {
    return null;
  }

  return (
    <div
      className={cn(
        bem(null, [type], {
          [status as string]: status,
          icon,
          circle,
          disabled,
          'icon-info': icon && icon.props && icon.props.type === 'info',
          'has-prefix': prefix,
          'has-suffix': suffix,
        }),
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {prefix && (
        <div className={bem('prefix')} onClick={onClickPrefix}>
          {prefix}
        </div>
      )}

      {text || icon}

      {suffix && (
        <div className={bem('suffix')} onClick={onClickSuffix}>
          {suffix}
        </div>
      )}
    </div>
  );
};
