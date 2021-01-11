import * as React from 'react';
import { Icon } from '../';

export type AlertType = 'success' | 'info' | 'warning' | 'error';

interface Props {
  type?: AlertType;
  className?: string;
  message?: string;
}

export const Alert: React.FC<Props> = ({ type = 'success', message = '', className }) => {
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
    <div ref={ref} className={`ebs-alert ebs-alert__type--${type} ${className}`}>
      {renderByType[type]}
      {message}
    </div>
  ) : null;
};
