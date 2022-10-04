import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { ReducerLayoutActionType, useLayoutDispatch } from 'components/Layout/context';
import { Item } from './Item';
import { TopSide, BottomSide } from './Sides';

const bem = makeBEM('ebs-sidebar');

const Options = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const dispatch = useLayoutDispatch();

  React.useEffect(() => {
    dispatch({ type: ReducerLayoutActionType.SET_TOGGLED, payload: true });
  }, [dispatch]);

  return (
    <div className={cn(bem('options'), 'ebs-optionsbar')} {...props}>
      {children}
    </div>
  );
};

export default Object.assign(Options, { TopSide, BottomSide, Item });
