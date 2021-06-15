import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';
import { CardContext } from './Card';

export interface CardHeaderProps {
  className?: string;
  bordered?: boolean;
  onClick?: () => void;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className, bordered, onClick, children }) => {
  const { collapsible, height, setHeight } = React.useContext(CardContext);

  // Card header classNames
  const classNames = cn(`ebs-card__header`, className, {
    'ebs-card__header__collapsible': collapsible,
    'ebs-card__header--bordered': bordered,
  });

  // Return simple card header
  if (!collapsible) {
    return <header className={classNames}>{children}</header>;
  }

  // Collapse card body
  const toggle = (): void => setHeight(height === 0 ? 'auto' : 0);

  const handleClick = (e: React.SyntheticEvent<HTMLElement>): void => {
    e.stopPropagation();

    // Do nothing if header was not directly clicked
    if (e.target !== e.currentTarget && e.target instanceof HTMLButtonElement) return;

    toggle();

    // Custom click
    if (onClick) {
      onClick();
    }
  };

  return (
    <header onClick={handleClick} className={classNames}>
      <div className="ebs-card__header__content">{children}</div>
      <div className="ebs-card__header__toggle" onClick={toggle}>
        <Icon type={height === 0 ? 'arrow-right' : 'arrow-bottom'} model="bold" />
      </div>
    </header>
  );
};
