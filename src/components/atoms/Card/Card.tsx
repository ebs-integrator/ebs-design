import * as React from 'react';
import cn from 'classnames';
import { SizeType } from 'types';
import { CardHeader, CardHeaderProps } from './CardHeader';
import { CardBody, CardBodyProps } from './CardBody';
import { CardFooter, CardFooterProps } from './CardFooter';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: SizeType;
  collapsible?: boolean;
  collapsed?: boolean;
}
export interface CardComposition {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
}

interface ContextProps {
  height: string | number;
  setHeight: (height: string | number) => void;
  collapsible?: boolean;
}

const CardContext = React.createContext<ContextProps>({
  height: 'auto', // Default card body height
  setHeight: () => null,
});

const Card: React.FC<CardProps> & CardComposition = ({
  size = 'medium',
  collapsible = false,
  collapsed = false,
  className,
  children,
  ...props
}) => {
  // Height is used for collapsible state
  const [height, setHeight] = React.useState<string | number>(collapsed ? 0 : 'auto');

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
