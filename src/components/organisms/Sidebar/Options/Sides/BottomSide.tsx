import * as React from 'react';
import { useLayoutState } from 'components/organisms/Layout/context';

export const BottomSide: React.FC = ({ children }) => {
  const { hasOptions, onSetHasOptions } = useLayoutState();

  React.useEffect(() => {
    if (!hasOptions && onSetHasOptions) {
      onSetHasOptions();
    }
  }, [hasOptions, onSetHasOptions]);

  return <div className="ebs-optionsbar__bottom">{children}</div>;
};
