import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';
import { CardContext } from './Card';

const bem = makeBEM('ebs-card__header');

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  onClick?: () => void;
}

export const CardHeader = ({ className, bordered, onClick, children, ...props }: CardHeaderProps) => {
  const { collapsible, height, setHeight } = React.useContext(CardContext);

  // Card header classNames
  const classNames = cn(bem(null, { collapsible, bordered }), className);

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
    <header onClick={handleClick} className={classNames} {...props}>
      <div className={bem('content')}>{children}</div>
      <div className={bem('toggle')} onClick={toggle}>
        <Icon type={height === 0 ? 'arrow-right' : 'arrow-bottom'} model="bold" />
      </div>
    </header>
  );
};
