import * as React from 'react';
import cn from 'classnames';
import { useTabs } from './Tabs';

export interface TabProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  tabKey: string;
  label: React.ReactNode;
  disabled?: boolean;
  onClick?: (tabKey: string) => void;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab = ({ tabKey, disabled, label, className, onClick, ...props }: TabProps) => {
  const { activeTab, setActiveTab } = useTabs();

  const handleClick = (): void => {
    if (setActiveTab && !disabled) {
      setActiveTab(tabKey);
    }

    if (onClick) {
      onClick(tabKey);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(`ebs-tabs__item`, className, { active: activeTab === tabKey, disabled: disabled })}
      {...props}
    >
      {label}
    </div>
  );
};
