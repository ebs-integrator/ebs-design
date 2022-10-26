import * as React from 'react';

import { makeBEM } from 'libs';
import { Button, Icon } from 'components';
import { Space, SpaceDirection, SpaceSize } from 'components/Space/Space';

const bem = makeBEM('ebs-notify__item');

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

export const NotifyItem = ({
  type = 'success',
  title,
  description,
  icon,
  size,
  direction = 'vertical',
  onClose,
}: NotifyItemProps) => {
  if (!icon) {
    switch (type) {
      case 'success':
        icon = 'check';
        break;
      case 'danger':
        icon = 'error';
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
    <Space size={size} className={bem(null, [type])}>
      {icon && (
        <Icon
          type={typeof icon === 'string' ? (icon as string) : undefined}
          component={typeof icon !== 'string' ? icon : undefined}
        />
      )}
      <Space align="start" size="small" direction={direction} className={bem('icon')}>
        {title && <p className={bem('title')}>{title}</p>}
        {description && <p className={bem('message')}>{description}</p>}
      </Space>
      <Button type="text" className={bem('close')} onClick={onClose}>
        <Icon type="close" model="bold" />
      </Button>
    </Space>
  );
};
