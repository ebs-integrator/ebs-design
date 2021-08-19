import * as React from 'react';
import cn from 'classnames';
import { usePortal } from 'hooks';
import { Space } from 'components/atoms';
import { SpaceDirection, SpaceSize } from 'components/atoms/Space/Space';

import { NotifyItem, NotifyItemProps } from './NotifyItem';

interface ContextProps {
  list: NotifyItemProps[];
  push: (value: NotifyItemProps) => void;
  remove: (value: number) => void;
}

const NotifyContext = React.createContext<ContextProps>({
  list: [],
  push: () => null,
  remove: () => null,
});

export interface NotifyProps {
  list?: NotifyItemProps[];
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
  direction?: SpaceDirection;
  size?: SpaceSize;
  timeout?: number;
}

const NotifyContainer: React.FC<NotifyProps> = ({
  vertical = 'top',
  horizontal = 'right',
  size = 'medium',
  timeout = 3000,
}) => {
  const createPortal = usePortal('notify-portal');
  const { list, remove } = React.useContext(NotifyContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        remove(0);
      }
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [list]);

  const position = React.useMemo(() => `${vertical}-${horizontal}`, [vertical, horizontal]);

  const onClose = React.useCallback((i) => remove(i), []);

  return createPortal(
    <Space direction="vertical" size={size} className={cn('ebs-notify', `ebs-notify--${position}`)}>
      {list.map((props, i) => (
        <NotifyItem key={i} size={size} onClose={() => onClose(i)} {...props} />
      ))}
    </Space>,
  );
};

// Provider
const NotifyProvider = ({ children }): React.ReactElement => {
  const [list, setList] = React.useState<NotifyItemProps[]>([]);

  const push = React.useCallback((item: NotifyItemProps) => setList((i) => [...i, item]), [setList]);
  const remove = React.useCallback((i: number) => setList((y) => y.filter((_, x) => x !== i)), [setList]);

  return <NotifyContext.Provider value={{ list, push, remove }}>{children}</NotifyContext.Provider>;
};

export { NotifyContainer, NotifyContext, NotifyProvider };
