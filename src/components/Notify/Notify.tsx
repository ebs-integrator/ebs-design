import * as React from 'react';

import { makeBEM } from 'libs';
import { usePortal } from 'hooks';
import { Space, SpaceDirection, SpaceSize } from 'components/Space/Space';
import { NotifyItem, NotifyItemProps } from './NotifyItem';

const bem = makeBEM('ebs-notify');

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

const NotifyContainer = ({ vertical = 'top', horizontal = 'right', size = 'medium', timeout = 3000 }: NotifyProps) => {
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
    <Space direction="vertical" size={size} className={bem(null, [position])}>
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
