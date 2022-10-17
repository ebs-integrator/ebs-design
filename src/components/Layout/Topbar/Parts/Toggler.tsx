import * as React from 'react';
import { Icon } from 'components';

import { makeBEM } from 'libs';
import { useLayoutState } from '../../context';

const bem = makeBEM('ebs-layout');

export const Toggler = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { onSetOpened } = useLayoutState();

  return (
    <div className={bem('top-bar-mobile')} {...props}>
      <div className={bem('top-bar-mobile', ['toggler'])} onClick={onSetOpened}>
        {children || <Icon type="menu-fold" model="bold" />}
      </div>
    </div>
  );
};
