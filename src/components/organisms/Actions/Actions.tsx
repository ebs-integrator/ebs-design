import * as React from 'react';
import { Tooltip, Icon } from 'components/atoms';

const Item: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <div className="ebs-action__tooltip-item" onClick={onClick}>
      {children}
    </div>
  );
};

export interface ActionsProps {
  title?: string;
  showTitle?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

const Actions: React.FC<ActionsProps> = ({ title = 'Actions', showTitle = true, placement = 'left', children }) => {
  return (
    <div className="ebs-action__wrapper">
      <Tooltip
        bodyClass="ebs-action__tooltip"
        trigger="click"
        placement={placement}
        tooltip={
          <>
            {showTitle && <div className="ebs-action__tooltip-title">{title}</div>}

            <div className="ebs-action__tooltip-items">{children}</div>
          </>
        }
      >
        <Icon type="dots" model="bold" className="ebs-action__tooltip-icon" />
      </Tooltip>
    </div>
  );
};

export default Object.assign(Actions, { Item });
