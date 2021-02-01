import * as React from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';
import { SizeType } from 'types';
import { Icon } from 'components/atoms';
import { CollapseGroup, CollapseGroupProps } from './CollapseGroup';

export interface CollapseProps {
  collapsed?: boolean;
  className?: string;
  classNameBody?: string;
  title?: React.ReactNode;
  size?: SizeType;
  style?: React.CSSProperties;
  bordered?: boolean;
  onClick?: (collapsed?: boolean) => void;
}

export interface CollapseComposition {
  Group: React.FC<CollapseGroupProps>;
}

const Collapse: React.FC<CollapseProps> & CollapseComposition = ({
  size = 'medium',
  collapsed = false,
  bordered = false,
  title,
  className,
  classNameBody,
  style,
  onClick,
  children,
}) => {
  const [height, setHeight] = React.useState<string | number>(collapsed ? 0 : 'auto');

  // Collapse card body
  const toggle = (): void => setHeight(height === 0 ? 'auto' : 0);

  const handleClick = (e: React.SyntheticEvent<HTMLElement>): void => {
    e.stopPropagation();

    toggle();

    // Custom click
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cn(`ebs-collapse ebs-collapse--${size}`, className)} style={style}>
      <header
        className={cn('ebs-collapse__header', {
          'ebs-collapse__header--collapsed': height === 0,
          'ebs-collapse__header--bordered': bordered,
        })}
        onClick={handleClick}
      >
        <div className="ebs-collapse__header__title">{title}</div>
        <div className="ebs-collapse__header__toggle" onClick={toggle}>
          <Icon type={height === 0 ? 'arrow-right' : 'arrow-bottom'} />
        </div>
      </header>

      <div className={cn(`ebs-collapse__body`, classNameBody, { 'py-0': height === 0 })}>
        <AnimateHeight duration={400} height={height}>
          {children}
        </AnimateHeight>
      </div>
    </div>
  );
};

Collapse.displayName = 'Collapse';

Collapse.Group = CollapseGroup;

export { Collapse };
