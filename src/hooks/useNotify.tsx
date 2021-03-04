import * as React from 'react';
import { GenericObject } from 'types';
import { NotifyItemProps } from '../components/molecules/Notify/NotifyItem';
import { NotifyContext } from '../';

export const useNotify = (): GenericObject => {
  const { push } = React.useContext(NotifyContext);

  return {
    error: (item: NotifyItemProps) => push({ type: 'danger', ...item }),
    success: (item: NotifyItemProps) => push({ type: 'success', ...item }),
    info: (item: NotifyItemProps) => push({ type: 'info', ...item }),
    primary: (item: NotifyItemProps) => push({ type: 'primary', ...item }),
    regular: (item: NotifyItemProps) => push({ type: 'regular', ...item }),
    warning: (item: NotifyItemProps) => push({ type: 'warning', ...item }),
  };
};
