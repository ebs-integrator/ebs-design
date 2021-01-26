import * as React from 'react';
import cn from 'classnames';
import { $Object } from 'libs/object/object.types';

export type LabelType = 'regular' | 'fill' | 'ghost' | 'primary';

export type LabelStatus = 'success' | 'warning' | 'danger' | 'info';

export interface Props {
  className?: string;
  type?: LabelType;
  circle?: boolean;
  status?: LabelStatus;
  style?: $Object;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
  text?: React.ReactNode;
  onClick?: () => void;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
}

export const Label: React.FC<Props> = ({
  className,
  type = 'regular',
  status,
  circle,
  icon,
  text,
  style,
  prefix,
  suffix,
  onClick,
  onClickPrefix,
  onClickSuffix,
  disabled,
}) => {
  if (!text && !icon) {
    return null;
  }

  return (
    <div
      className={cn(`ebs-label`, `ebs-label--${type}`, className, {
        'ebs-label--icon': icon,
        'ebs-label--icon-info': icon && icon.props && icon.props.type === 'info',
        [`ebs-label--${status}`]: status,
        'ebs-label--circle': circle,
        'has-prefix': prefix,
        'has-suffix': suffix,
        disabled: disabled,
      })}
      style={style}
      onClick={onClick}
    >
      {prefix && (
        <div className="ebs-label__prefix" onClick={onClickPrefix}>
          {prefix}
        </div>
      )}

      {text || icon}

      {suffix && (
        <div className="ebs-label__suffix" onClick={onClickSuffix}>
          {suffix}
        </div>
      )}
    </div>
  );
};
