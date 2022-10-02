import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Panel, PanelProps } from './Panel';
import { Tab, TabProps } from './Tab';

const bem = makeBEM('ebs-tabs');

export interface TabsComposition {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab?: string;
  contentClass?: string;
  setActiveTab?: (key: string) => void;
}

export interface TabsContext {
  activeTab?: string;
  setActiveTab?: (key: string) => void;
}

const TabsContext = React.createContext<TabsContext | undefined>(undefined);

const Tabs: React.FC<TabsProps> & TabsComposition = ({
  activeTab,
  setActiveTab,
  className,
  contentClass,
  children,
  ...props
}) => {
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab],
  );

  return (
    <TabsContext.Provider value={memoizedContextValue} {...props}>
      <div className={cn(bem(), className)}>
        {children &&
          React.Children.map(children, (child) => {
            if (child && (child as React.ReactElement).type === Tab) {
              return child;
            }
          })}
      </div>
      <div className={cn(bem('content'), contentClass)}>
        {children &&
          React.Children.map(children, (child) => {
            if (child && (child as React.ReactElement).type !== Tab) {
              return child;
            }
          })}
      </div>
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContext => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };
