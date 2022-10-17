import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';
import { CollapseContext } from './Collapse';

const bem = makeBEM('ebs-collapse__header');

export interface CollapseHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

export const CollapseHeader = ({ className, style, onClick, children, ...props }: CollapseHeaderProps) => {
  const { bordered, height, setHeight } = React.useContext(CollapseContext);

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
    <header
      className={cn(bem(null, { bordered, collapsed: height === 0 }), className)}
      onClick={handleClick}
      {...props}
    >
      <div className={bem('title')}>{children}</div>
      <div className={bem('toggle')} onClick={toggle}>
        <Icon type={height === 0 ? 'arrow-bottom' : 'arrow-top'} model="bold" />
      </div>
    </header>
  );
};
