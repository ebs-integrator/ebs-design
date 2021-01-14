import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Icon } from 'components/atoms';

interface CollapseProps {
  defaultActive?: boolean;
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ defaultActive = true, title, className, leftSide, rightSide, children }) => {
  const [active, setActive] = useState(defaultActive);

  const handleToggleCollapse = () => {
    setActive((s) => !s);
  };
  return (
    <div className={cn(`ebs-collapse`, className, !active && 'collapsed')}>
      <div className="ebs-collapse__header">
        <div className="ebs-collapse__header--side-left">
          {title && <div className="ebs-collapse__title" onClick={handleToggleCollapse}>
            {title}
          </div>}
          {leftSide}
        </div>
        <div className="ebs-collapse__header--side-right">
          {rightSide}
          <div className="ebs-collapse__header--action">
            <Icon onClick={handleToggleCollapse} type={active ? 'arrow-bottom' : 'arrow-left'} />
          </div>
        </div>
      </div>
      {active && <div className="ebs-collapse__content">
        {children}
      </div>}
    </div>
  );
};