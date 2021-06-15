import * as React from 'react';

import cn from 'classnames';
import { Icon } from '../';

export type AlertType = 'success' | 'info' | 'warning' | 'error';
export interface AlertProps {
  type?: AlertType;
  className?: string;
  message?: string;
  description?: string;
  closable?: boolean;
  outlined?: boolean;
  icon?: boolean;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'success',
  icon = true,
  outlined,
  message = '',
  onClose,
  closable,
  className,
  children,
}) => {
  const ref = React.useRef<null | HTMLDivElement>(null);
  const [closed, setClosed] = React.useState(false);

  const renderByType = React.useMemo(
    () => ({
      success: <Icon type="success" />,
      info: <Icon type="info" />,
      warning: <Icon type="warning" />,
      error: <Icon type="error" />,
    }),
    [],
  );

  return (
    <>
      <div
        ref={ref}
        className={cn(
          `ebs-alert`,
          `ebs-alert--${type}`,
          { 'ebs-alert--hidden': closed },
          { 'ebs-alert--outlined': outlined },
          className,
        )}
      >
        {icon && renderByType[type]}
        <div className="ebs-alert-content">
          <h3>{message}</h3>
          {children}
        </div>

        {closable ? (
          <Icon
            type="close"
            className={cn({ 'ebs-alert--hidden': closed }, 'ebs-icon-close')}
            onClick={() => {
              setClosed(true);
              if (typeof onClose === 'function') {
                onClose();
              }
            }}
          />
        ) : null}
      </div>
    </>
  );
};
