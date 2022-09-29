import * as React from 'react';
import cn from 'classnames';
import { Height } from 'react-animate-height';
import { SizeType } from 'types';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SizeType;
  collapsible?: boolean;
  collapsed?: boolean;
}

interface ContextProps {
  height: Height;
  setHeight: (height: Height) => void;
  collapsible?: boolean;
}

const CardContext = React.createContext<ContextProps>({
  height: 'auto', // Default card body height
  setHeight: () => null,
});

const Card = ({
  size = 'medium',
  collapsible = false,
  collapsed = false,
  className,
  children,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  // Height is used for collapsible state
  const [height, setHeight] = React.useState<Height>(collapsed ? 0 : 'auto');

  return (
    <div className={cn(`ebs-card ebs-card--${size}`, className, { 'ebs-card--collapsed': height === 0 })} {...props}>
      <CardContext.Provider value={{ height, setHeight, collapsible }}>{children}</CardContext.Provider>
    </div>
  );
};

Card.displayName = 'Card';

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card, CardContext };
