import * as React from 'react';
import { Tooltip, Icon } from 'components/atoms';

const Item: React.FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <div className="ebs-action__tooltip-item" onClick={onClick}>
      {children}
    </div>
  );
};

const Actions: React.FC<{ placement?: 'right' | 'left' | 'top' | 'bottom' }> = ({ placement = 'left', children }) => {
  return (
    <div className="ebs-action__wrapper">
      <Tooltip
        bodyClass="ebs-action__tooltip"
        trigger="click"
        placement={placement}
        tooltip={
          <>
            <div className="ebs-action__tooltip-title">Actions</div>

            <div className="ebs-action__tooltip-items">{children}</div>
          </>
        }
      >
        <Icon type="dots" className="ebs-action__tooltip-icon" />
      </Tooltip>
    </div>
  );
};

export default Object.assign(Actions, { Item });
