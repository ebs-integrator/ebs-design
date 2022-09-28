import * as React from 'react';
import cn from 'classnames';
import { useTabs } from './Tabs';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabKey: string;
}

/**
 * Individual panel component.
 */
export const Panel = ({ tabKey, className, children, ...props }: PanelProps) => {
  const { activeTab } = useTabs();

  return activeTab === tabKey ? (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  ) : null;
};
