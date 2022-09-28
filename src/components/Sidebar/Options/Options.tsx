import * as React from 'react';
import cn from 'classnames';
import { ReducerLayoutActionType, useLayoutDispatch } from 'components/Layout/context';

import { Item } from './Item';
import { TopSide, BottomSide } from './Sides';

const Options = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const dispatch = useLayoutDispatch();

  React.useEffect(() => {
    dispatch({ type: ReducerLayoutActionType.SET_TOGGLED, payload: true });
  }, [dispatch]);

  return (
    <div className={cn(`ebs-optionsbar`, 'ebs-sidebar__options')} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(Options, { TopSide, BottomSide, Item });
