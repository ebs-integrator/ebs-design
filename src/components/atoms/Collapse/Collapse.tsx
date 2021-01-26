import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Icon } from 'components/atoms';

export interface CollapseProps {
  defaultActive?: boolean;
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  defaultActive = true,
  title,
  className,
  leftSide,
  rightSide,
  children,
}) => {
  const [active, setActive] = useState(defaultActive);

  const handleToggleCollapse = (): void => {
    setActive((s) => !s);
  };

  return (
    <div className={cn(`ebs-collapse`, className, { collapsed: !active })}>
      <div className="ebs-collapse__header" onClick={handleToggleCollapse}>
        <div className="ebs-collapse__header__side-left">
          {title && <div className="ebs-collapse__title">{title}</div>}
          {leftSide}
        </div>
        <div className="ebs-collapse__header__side-right">
          {rightSide}
          <div className="ebs-collapse__header-action">
            <Icon type={active ? 'arrow-bottom' : 'arrow-left'} />
          </div>
        </div>
      </div>
      <div className="ebs-collapse__content">{children}</div>
    </div>
  );
};

export const CollapseGroup: React.FC<CollapseProps> = ({ title, leftSide, rightSide, children, className }) => (
  <div className={cn(`ebs-collapse`, `ebs-collapse__group`, className)}>
    <div className="ebs-collapse__header">
      <div className="ebs-collapse__header__side-left">
        {title && (
          <div className="ebs-collapse__title">
            {title} ({React.Children.toArray(children).length})
          </div>
        )}
        {leftSide}
      </div>
      <div className="ebs-collapse__header__side-right">{rightSide}</div>
    </div>
    {children}
  </div>
);
