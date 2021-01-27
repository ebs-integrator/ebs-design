import * as React from 'react';
import cn from 'classnames';

export interface TabProps {
  tabKey: string;
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface PanelProps {
  tabKey: string;
  className?: string;
}

export interface TabsProps {
  Tab: React.FC<TabProps>;
  Panel: React.FC<PanelProps>;
}

export interface TabsMainProps {
  activeTab?: string;
  setActiveTab?: (key: string) => void;
  className?: string;
}

export interface TabsContext {
  activeTab?: string;
  setActiveTab?: (key: string) => void;
}

const TabsContext = React.createContext<TabsContext | undefined>(undefined);

const Tabs: React.FC<TabsMainProps> & TabsProps = (
  {
    activeTab,
    setActiveTab,
    className,
    children,
  },
) => {
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab],
  );

  return (
    <TabsContext.Provider value={memoizedContextValue}>
      <div className={cn(`ebs-tabs`, className)}>
        {
          children && React.Children.map(children, (child) => {
            if (child.type === Tab) {
              return child;
            }
          })
        }
      </div>
      <div className={`ebs-tabs__content`}>
        {
          children && React.Children.map(children, (child) => {
            if (child.type === Panel) {
              return child;
            }
          })
        }
      </div>
    </TabsContext.Provider>
  );
};

const useTabs = (): TabsContext => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};


/**
 * This component allows changing of the active Tab.
 */
const Tab: React.FC<TabProps> = ({ tabKey, disabled, label, className }) => {
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

/**
 * Individual panel component.
 */
const Panel: React.FC<PanelProps> = ({ tabKey, className, children }) => {
  const { activeTab } = useTabs();
  return activeTab === tabKey ? <div className={cn(className)}>{children}</div> : null;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };