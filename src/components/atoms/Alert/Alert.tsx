import * as React from 'react';
import { Icon } from '../';

interface Props {
  type?: 'success' | 'info' | 'warning' | 'error';
  className?: string;
  message?: string;
}

export const Alert: React.FC<Props> = ({ type = 'success', message = '', className }) => {
  const ref = React.useRef<null | HTMLDivElement>(null);
  const getHeader = document.getElementsByClassName('ebs-layout__top-bar');

  React.useEffect(() => {
    if (message.length && ref.current && getHeader.length) {
      window.scrollTo(0, ref.current.offsetTop - getHeader[0].clientHeight - 1);
    }
  }, [message, getHeader]);

  return message.length ? (
    <div ref={ref} className={`ebs-alert ebs-alert__type--${type} ${className}`}>
      {type === 'success' && <Icon type="check" />}
      {type === 'info' && <Icon type="info" />}
      {type === 'warning' && <Icon type="warning" />}
      {type === 'error' && <Icon type="alert" />}

      {message}
    </div>
  ) : null;
};
