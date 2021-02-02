import * as React from 'react';
import cn from 'classnames';
import { Space } from 'components/atoms';
import { SpaceDirection, SpaceSize } from 'components/atoms/Space/Space';
import { NotifyItem, NotifyItemProps } from './NotifyItem';

export interface NotifyProps {
  list?: NotifyItemProps[];
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
  direction?: SpaceDirection;
  size?: SpaceSize;
  timeout?: number;
}

export const Notify: React.FC<NotifyProps> = ({
  list: notifiesList = [],
  vertical = 'top',
  horizontal = 'right',
  size = 'medium',
  timeout = 3000,
}) => {
  const [list, setList] = React.useState(notifiesList);

  React.useEffect(() => {
    setList(notifiesList);
  }, [notifiesList]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        setList(list.splice(1, list.length));
      }
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [list]);

  const position = React.useMemo(() => `${vertical}-${horizontal}`, [vertical, horizontal]);

  const onClose = React.useCallback((i) => setList((v) => v.filter((_, x) => x !== i)), [setList]);

  return (
    <Space direction="vertical" size={size} className={cn('ebs-notify', `ebs-notify--${position}`)}>
      {list.map((props, i) => (
        <NotifyItem key={i} size={size} onClose={() => onClose(i)} {...props} />
      ))}
    </Space>
  );
};
