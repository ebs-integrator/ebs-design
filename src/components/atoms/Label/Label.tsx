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
  text?: React.ReactNode;
}

export const Label: React.FC<Props> = ({
  className,
  type = 'regular',
  status = 'text',
  style,
  onClick,
  prefix,
  onClickPrefix,
  suffix,
  onClickSuffix,
  disabled,
  text,
}) => {
  if (!text) {
    return null;
  }

  return (
    <div
      className={cn(`ebs-label`, `ebs-label-${type}`, `ebs-label__status--${status}`, className, {
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

      {text}

      {suffix && (
        <div className="ebs-label__suffix" onClick={onClickSuffix}>
          {suffix}
        </div>
      )}
    </div>
  );
};
