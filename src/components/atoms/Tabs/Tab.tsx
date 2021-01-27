import * as React from 'react';
import cn from 'classnames';
import { useTabs } from './Tabs';


export interface TabProps {
  tabKey: string;
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<TabProps> = ({ tabKey, disabled, label, className }) => {
  const { activeTab, setActiveTab } = useTabs();

  const handleClick = () => {
    if (setActiveTab && !disabled) {
      setActiveTab(tabKey);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(`ebs-tabs__item`, className, { active: activeTab === tabKey, disabled: disabled })}>
      {label}
    </div>
  );
};