import * as React from 'react';
import { useLayoutState } from 'components/Layout/context';

export const BottomSide = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { hasOptions, onSetHasOptions } = useLayoutState();

  React.useEffect(() => {
    if (!hasOptions && onSetHasOptions) {
      onSetHasOptions();
    }
  }, [hasOptions, onSetHasOptions]);

  return (
    <div className="ebs-optionsbar__bottom" {...props}>
      {children}
    </div>
  );
};
