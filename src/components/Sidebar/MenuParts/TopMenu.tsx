import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { Icon } from 'components';
import { useLayoutState } from 'components/Layout/context';
import Item from '../Item';

const bem = makeBEM('ebs-sidebar');

export interface TopMenuProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  showToggle?: boolean;
  toggleText?: React.ReactNode;
}

export const TopMenu = ({
  className,
  showToggle = true,
  toggleText = 'Hide titles',
  children,
  ...props
}: React.PropsWithChildren<TopMenuProps>) => {
  const { toggled, onSetToggled } = useLayoutState();

  return (
    <div className={cn(bem('top'), className)} {...props}>
      {showToggle && onSetToggled !== undefined && (
        <Item
          className={bem('toggler')}
          invert
          prefix={<Icon type={`${toggled ? 'open' : 'close'}-sidebar`} />}
          text={toggleText}
          onClick={onSetToggled}
        />
      )}

      {children}
    </div>
  );
};
