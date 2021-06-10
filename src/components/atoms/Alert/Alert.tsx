import * as React from 'react';

import cn from 'classnames';
import { Icon } from '../';

export type AlertType = 'success' | 'info' | 'warning' | 'error';
export type AlertSize = 'small' | 'medium' | 'large';
export type BorderType = 'dashed' | 'solid';

export interface AlertProps {
  type?: AlertType;
  className?: string;
  message?: string;
  description?: string;
  size?: AlertSize;
  closable?: boolean;
  borderType?: BorderType;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'success',
  message = '',
  description = '',
  size = 'medium',
  closable = true,
  borderType = 'solid',
  className,
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

  return message.length ? (
    <>
      <div
        ref={ref}
        className={cn(
          `ebs-alert`,
          `ebs-alert--${type}`,
          `ebs-alert--${size}`,
          `ebs-alert--${type}--${borderType}`,
          { 'ebs-alert--hidden': closed },
          className,
        )}
      >
        {renderByType[type]}
        <div className="ebs-alert-content">
          <h3>{message}</h3>
          <p>{description}</p>
        </div>

        {closable ? (
          <Icon
            type="close"
            className={cn({ 'ebs-alert--hidden': closed }, 'ebs-icon-alert')}
            onClick={() => setClosed(true)}
          />
        ) : null}
      </div>
    </>
  ) : null;
};
