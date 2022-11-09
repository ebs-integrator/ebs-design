import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';
import { Icon } from 'components';

const bem = makeBEM('ebs-chip');

type ChipType = 'filled' | 'outlined';
type ChipSize = 'small' | 'medium';
type ChipColor = 'default' | 'primary';

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  type?: ChipType;
  size?: ChipSize;
  color?: ChipColor;
  prefix?: React.ReactNode;
  text?: React.ReactNode;
  disabled?: boolean;
  onDelete?: () => void;
  deleteIcon?: React.ReactNode;
}

export const Chip = ({
  className,
  size = 'medium',
  type = 'outlined',
  color = 'primary',
  text,
  prefix,
  disabled,
  deleteIcon,
  onClick,
  onDelete,
  ...props
}: ChipProps) => {
  return (
    <div
      className={cn(bem(null, [size, color]), className)}
      role="button"
      onClick={onClick}
      data-type={type}
      {...(onDelete && { 'data-removable': true })}
      {...(onClick && { 'data-clickable': true })}
      {...(disabled && { 'data-disabled': true })}
      {...props}
    >
      {prefix && <div className={bem('prefix')}>{prefix}</div>}

      {text}

      {onDelete && (
        <div className={bem('delete')} onClick={onDelete}>
          {deleteIcon ? deleteIcon : <Icon type="error" />}
        </div>
      )}
    </div>
  );
};
