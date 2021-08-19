import * as React from 'react';
import cn from 'classnames';
import { useTabs } from './Tabs';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabKey: string;
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<PanelProps> = ({ tabKey, className, children, ...props }) => {
  const { activeTab } = useTabs();

  return activeTab === tabKey ? (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  ) : null;
};
