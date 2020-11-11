import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import { Icon } from 'atoms';

import './SidebarItem.scss';

interface TabProps {
  className?: string;
  prefix?: React.ReactNode;
  invert?: boolean;
  text?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  options?: React.ReactNode;
}

export const SidebarItem: React.FC<TabProps> = ({
  className = '',
  active,
  prefix,
  invert,
  text,
  disabled,
  onClick,
  options,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const classNames = React.useMemo(
    () =>
      `ebs-sidebar-item${options !== undefined ? ' has-options' : ''}${invert ? ' invert' : ''}${
        disabled ? ' disabled' : ''
      }${active || collapsed ? ' active' : ''} ${className}`,
    [disabled, collapsed, invert, options],
  );

  const onClickHandler = (): void => {
    if (options !== undefined) {
      setCollapsed((s) => !s);
    }

    if (onClick !== undefined) {
      onClick();
    }
  };

  return (
    <>
      <div className={classNames} onClick={onClickHandler}>
        {prefix && <div className="ebs-sidebar-prefix">{prefix}</div>}

        <span className="ebs-sidebar-text">{text}</span>

        {options !== undefined && (
          <div className="ebs-sidebar-suffix">
            <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} />
          </div>
        )}
      </div>

      <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
        <div className="ebs-sidebar-options">{options}</div>
      </AnimateHeight>
    </>
  );
};
