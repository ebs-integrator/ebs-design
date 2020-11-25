import * as React from 'react';

export type LabelType = 'regular' | 'circle';

export type LabelStatus = 'success' | 'warning' | 'danger' | 'info' | 'text' | 'primary';

export interface Props {
  className?: string;
  type?: LabelType;
  status?: LabelStatus;
  onClick?: () => void;
  prefix?: React.ReactNode;
  onClickPrefix?: () => void;
  suffix?: React.ReactNode;
  onClickSuffix?: () => void;
  disabled?: boolean;
  text?: React.ReactNode;
}

export const Label: React.FC<Props> = ({
  className = '',
  type = 'regular',
  status = 'text',
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
      className={`ebs-label ebs-label-${type} ebs-label-status-${status}${disabled ? ' disabled' : ''}${
        prefix ? ' has-prefix' : ''
      }${suffix ? ' has-suffix' : ''} ${className}`}
      onClick={onClick}
    >
      {prefix && (
        <div className="ebs-label-prefix" onClick={onClickPrefix}>
          {prefix}
        </div>
      )}

      {text}

      {suffix && (
        <div className="ebs-label-suffix" onClick={onClickSuffix}>
          {suffix}
        </div>
      )}
    </div>
  );
};
