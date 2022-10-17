import * as React from 'react';
import cn from 'classnames';
import { Height } from 'react-animate-height';

import { SizeType } from 'types';
import { makeBEM } from 'libs';
import { CollapseGroup } from './CollapseGroup';
import { CollapseHeader } from './CollapseHeader';
import { CollapseBody } from './CollapseBody';

const bem = makeBEM('ebs-collapse');

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  size?: SizeType;
  bordered?: boolean;
}

interface ContextProps {
  height: Height;
  setHeight: (height: Height) => void;
  bordered: boolean;
}

const CollapseContext = React.createContext<ContextProps>({
  height: 'auto', // Default card body height
  setHeight: () => null,
  bordered: false,
});

const Collapse = ({
  size = 'medium',
  collapsed = false,
  bordered = false,
  className,
  children,
  ...props
}: CollapseProps) => {
  const [height, setHeight] = React.useState<Height>(collapsed ? 0 : 'auto');

  React.useEffect(() => {
    setHeight(collapsed ? 0 : 'auto');
  }, [collapsed]);

  return (
    <div className={cn(bem(null, [size], { bordered }), className)} {...props}>
      <CollapseContext.Provider value={{ height, setHeight, bordered }}>{children}</CollapseContext.Provider>
    </div>
  );
};

Collapse.displayName = 'Collapse';

Collapse.Group = CollapseGroup;
Collapse.Header = CollapseHeader;
Collapse.Body = CollapseBody;

export { Collapse, CollapseContext };
