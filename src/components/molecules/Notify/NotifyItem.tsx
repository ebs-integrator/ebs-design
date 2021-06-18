import * as React from 'react';
import cn from 'classnames';
import { Button, Space, Icon } from 'components/atoms';
import { SpaceDirection, SpaceSize } from 'components/atoms/Space/Space';

export interface NotifyItemType {
  type?: 'regular' | 'primary' | 'success' | 'danger' | 'info' | 'warning';
}

export interface NotifyItemProps extends NotifyItemType {
  title: string;
  description?: string;
  icon?: 'string' | React.ReactNode;
  direction?: SpaceDirection;
  size?: SpaceSize;
  onClose?: () => void;
}

export const NotifyItem: React.FC<NotifyItemProps> = ({
  type = 'success',
  title,
  description,
  icon,
  size,
  direction = 'vertical',
  onClose,
}) => {
  if (!icon) {
    switch (type) {
      case 'success':
        icon = 'check';
        break;
      case 'danger':
        icon = 'alert';
        break;
      case 'info':
        icon = 'info';
        break;
      case 'warning':
        icon = 'warning';
        break;
    }
  }

  return (
    <Space size={size} className={cn('ebs-notify__item', `ebs-notify__item--${type}`)}>
      {icon && (
        <Icon
          type={typeof icon === 'string' ? (icon as string) : undefined}
          component={typeof icon !== 'string' ? icon : undefined}
        />
      )}
      <Space align="start" size="small" direction={direction} className="ebs-notify__item-icon">
        {title && <p className="ebs-notify__item-title">{title}</p>}
        {description && <p className="ebs-notify__item-message">{description}</p>}
      </Space>
      <Button type="text" className="ebs-notify__item-close" onClick={onClose}>
        <Icon type="close" model="bold" />
      </Button>
    </Space>
  );
};
