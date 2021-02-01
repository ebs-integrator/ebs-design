import * as React from 'react';
import cn from 'classnames';
import { SizeType } from 'types';
import { CollapseGroup, CollapseGroupProps } from './CollapseGroup';
import { CollapseHeader, CollapseHeaderProps } from './CollapseHeader';
import { CollapseBody, CollapseBodyProps } from './CollapseBody';

export interface CollapseProps {
  collapsed?: boolean;
  className?: string;
  size?: SizeType;
  style?: React.CSSProperties;
  bordered?: boolean;
  onClick?: (collapsed?: boolean) => void;
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
  style,
  children,
}) => {
  const [height, setHeight] = React.useState<string | number>(collapsed ? 0 : 'auto');

  return (
    <div className={cn(`ebs-collapse ebs-collapse--${size}`, className)} style={style}>
      <CollapseContext.Provider value={{ height, setHeight, bordered }}>{children}</CollapseContext.Provider>
    </div>
  );
};

Collapse.displayName = 'Collapse';

Collapse.Group = CollapseGroup;
Collapse.Header = CollapseHeader;
Collapse.Body = CollapseBody;

export { Collapse, CollapseContext };
