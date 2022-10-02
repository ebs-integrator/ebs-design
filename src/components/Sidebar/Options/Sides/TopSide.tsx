import * as React from 'react';
import { makeBEM } from 'libs';
import { useLayoutState } from 'components/Layout/context';

const bem = makeBEM('ebs-optionsbar');

export const TopSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { hasOptions, onSetHasOptions } = useLayoutState();

  React.useEffect(() => {
    if (!hasOptions && onSetHasOptions) {
      onSetHasOptions();
    }
  }, [hasOptions, onSetHasOptions]);

  return (
    <div className={bem('top')} {...props}>
      {children}
    </div>
  );
};
