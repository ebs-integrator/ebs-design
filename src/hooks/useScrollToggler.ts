import * as React from 'react';

export const useScrollToggler = (active: boolean): void => {
  React.useEffect(() => {
    const prevOverflow = document.body.style.overflowY;
    document.body.style.overflowY = active ? 'hidden' : '';

    return () => {
      document.body.style.overflowY = prevOverflow;
    };
  }, [active]);
};
