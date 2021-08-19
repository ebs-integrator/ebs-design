import * as React from 'react';
import { useLayoutState } from 'components/organisms/Layout/context';

export const TopSide: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const { hasOptions, onSetHasOptions } = useLayoutState();

  React.useEffect(() => {
    if (!hasOptions && onSetHasOptions) {
      onSetHasOptions();
    }
  }, [hasOptions, onSetHasOptions]);

  return (
    <div className="ebs-optionsbar__top" {...props}>
      {children}
    </div>
  );
};
