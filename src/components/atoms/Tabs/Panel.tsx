import * as React from 'react';
import cn from 'classnames';
import { useTabs } from './Tabs';

export interface PanelProps {
  tabKey: string;
  className?: string;
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<PanelProps> = ({ tabKey, className, children }) => {
  const { activeTab } = useTabs();

  return activeTab === tabKey ? <div className={cn(className)}>{children}</div> : null;
};
