import * as React from 'react';
import { useTabs } from './Tabs';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tabKey: string;
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<PanelProps> = ({ tabKey, children, ...props }) => {
  const { activeTab } = useTabs();

  return activeTab === tabKey ? <div {...props}>{children}</div> : null;
};
