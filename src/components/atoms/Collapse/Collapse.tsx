import * as React from 'react';
import cn from 'classnames';
import { SizeType } from 'types';
import { CollapseGroup, CollapseGroupProps } from './CollapseGroup';
import { CollapseHeader, CollapseHeaderProps } from './CollapseHeader';
import { CollapseBody, CollapseBodyProps } from './CollapseBody';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  className?: string;
  size?: SizeType;
  bordered?: boolean;
}

export interface CollapseComposition {
  Group: React.FC<CollapseGroupProps>;
  Header: React.FC<CollapseHeaderProps>;
  Body: React.FC<CollapseBodyProps>;
}

interface ContextProps {
  height: string | number;
  setHeight: (height: string | number) => void;
  bordered: boolean;
}

const CollapseContext = React.createContext<ContextProps>({
  height: 'auto', // Default card body height
  setHeight: () => null,
  bordered: false,
});

const Collapse: React.FC<CollapseProps> & CollapseComposition = ({
  size = 'medium',
  collapsed = false,
  bordered = false,
  className,
  children,
  ...props
}) => {
  const [height, setHeight] = React.useState<string | number>(collapsed ? 0 : 'auto');

  React.useEffect(() => {
    setHeight(collapsed ? 0 : 'auto');
  }, [collapsed]);

  return (
    <div className={cn(`ebs-collapse ebs-collapse--${size}`, className)} {...props}>
      <CollapseContext.Provider value={{ height, setHeight, bordered }}>{children}</CollapseContext.Provider>
    </div>
  );
};

Collapse.displayName = 'Collapse';

Collapse.Group = CollapseGroup;
Collapse.Header = CollapseHeader;
Collapse.Body = CollapseBody;

export { Collapse, CollapseContext };
