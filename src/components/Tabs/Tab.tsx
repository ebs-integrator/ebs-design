import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { useTabs } from './Tabs';

const bem = makeBEM('ebs-tabs');

export interface TabProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  tabKey: string;
  label: React.ReactNode;
  disabled?: boolean;
  onClick?: (tabKey: string) => void;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<TabProps> = ({ tabKey, disabled, label, className, onClick, ...props }) => {
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
      className={cn(bem('item', { disabled, active: activeTab === tabKey }), className)}
      {...props}
    >
      {label}
    </div>
  );
};
