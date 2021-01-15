import * as React from 'react';
import cn from 'classnames';
import { $Object } from 'libs/object/object.types';

export type LabelType = 'regular' | 'circle' | 'fill';

export type LabelStatus = 'success' | 'warning' | 'danger' | 'info' | 'text' | 'primary';

export interface Props {
  className?: string;
  type?: LabelType;
  status?: LabelStatus;
  style?: $Object;
  onClick?: () => void;
  prefix?: React.ReactNode;
  onClickPrefix?: () => void;
  suffix?: React.ReactNode;
  onClickSuffix?: () => void;
  disabled?: boolean;
  icon?: React.ReactElement;
  text?: React.ReactNode;
}

export const Label: React.FC<Props> = ({
  className,
  type = 'regular',
  status = 'text',
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
  console.log('icon', icon && icon.props);
  return (
    <div
      className={cn(`ebs-label`, `ebs-label-${type}`, `ebs-label__status--${status}`, className, {
        'has-prefix': prefix,
        'has-suffix': suffix,
        'is-icon': icon,
        'is-icon-info': icon && icon.props && icon.props.type === 'info',
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
