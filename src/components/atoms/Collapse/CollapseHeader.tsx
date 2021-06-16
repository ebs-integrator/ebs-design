import * as React from 'react';
import cn from 'classnames';
import { Icon } from 'components/atoms';
import { CollapseContext } from './Collapse';

export interface CollapseHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CollapseHeader: React.FC<CollapseHeaderProps> = ({ className, style, onClick, children }) => {
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
      className={cn('ebs-collapse__header', className, {
        'ebs-collapse__header--collapsed': height === 0,
        'ebs-collapse__header--bordered': bordered,
      })}
      onClick={handleClick}
      style={style}
    >
      <div className="ebs-collapse__header__title">{children}</div>
      <div className="ebs-collapse__header__toggle" onClick={toggle}>
        <Icon type={height === 0 ? 'arrow-top' : 'arrow-bottom'} model="bold" />
      </div>
    </header>
  );
};
