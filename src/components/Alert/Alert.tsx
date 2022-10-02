import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';

const bem = makeBEM('ebs-alert');

export type AlertType = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  message?: string;
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
  ...props
}) => {
  const [closed, setClosed] = React.useState(false);

  return (
    <div className={cn(bem(null, [type], { outlined, hidden: closed }), className)} {...props}>
      {icon && <Icon type={type} />}

      <div className={bem('content')}>
        <h3>{message}</h3>
        {children}
      </div>

      {closable ? (
        <Icon
          type="close"
          className={cn(bem(null, { hidden: closed }), 'ebs-icon-close')}
          onClick={() => {
            setClosed(true);
            if (typeof onClose === 'function') {
              onClose();
            }
          }}
        />
      ) : null}
    </div>
  );
};
