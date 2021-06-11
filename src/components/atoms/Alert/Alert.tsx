import * as React from 'react';

import cn from 'classnames';
import { Icon } from '../';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  type?: AlertType;
  icon?: React.ReactNode;
  fill?: boolean;
  className?: string;
  message?: string;
}

export const Alert: React.FC<AlertProps> = ({ type = 'success', message = '', fill, className, icon }) => {
  const ref = React.useRef<null | HTMLDivElement>(null);
  const getHeader = document.getElementsByClassName('ebs-layout__top-bar');

  const renderByType = React.useMemo(
    () => ({
      success: <Icon type="check" />,
      info: <Icon type="info" />,
      warning: <Icon type="warning" />,
      error: <Icon type="alert" />,
    }),
    [],
  );

  React.useEffect(() => {
    if (message.length && ref.current && getHeader.length) {
      window.scrollTo(0, ref.current.offsetTop - getHeader[0].clientHeight - 1);
    }
  }, [message, getHeader]);

  return message.length ? (
    <div
      ref={ref}
      className={cn(`ebs-alert`, `ebs-alert--${type}`, className, {
        'ebs-alert--fill': fill,
      })}
    >
      {icon || renderByType[type]}
      {message}
    </div>
  ) : null;
};
