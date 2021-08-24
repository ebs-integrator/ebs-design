import * as React from 'react';
import { NotifyItemProps } from '../components/molecules/Notify/NotifyItem';
import { NotifyContext } from '../';

export interface NotifyProps {
  error: (item: NotifyItemProps) => void;
  success: (item: NotifyItemProps) => void;
  info: (item: NotifyItemProps) => void;
  primary: (item: NotifyItemProps) => void;
  regular: (item: NotifyItemProps) => void;
  warning: (item: NotifyItemProps) => void;
}

export const useNotify = (): NotifyProps => {
  const { push } = React.useContext(NotifyContext);

  return {
    error: (item) => push({ type: 'danger', ...item }),
    success: (item) => push({ type: 'success', ...item }),
    info: (item) => push({ type: 'info', ...item }),
    primary: (item) => push({ type: 'primary', ...item }),
    regular: (item) => push({ type: 'regular', ...item }),
    warning: (item) => push({ type: 'warning', ...item }),
  };
};
