import * as React from 'react';
import { Icon } from '../';

export enum AlertType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

interface Props {
  type?: AlertType;
  className?: string;
  message?: string;
}

export const Alert: React.FC<Props> = ({ type = AlertType.SUCCESS, message = '', className }) => {
  const ref = React.useRef<null | HTMLDivElement>(null);
  const getHeader = document.getElementsByClassName('ebs-layout__top-bar');

  const renderByType = React.useMemo(
    () => ({
      [AlertType.SUCCESS]: <Icon type="check" />,
      [AlertType.INFO]: <Icon type="info" />,
      [AlertType.WARNING]: <Icon type="warning" />,
      [AlertType.ERROR]: <Icon type="alert" />,
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
