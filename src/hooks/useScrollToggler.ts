import * as React from 'react';

export const useScrollToggler = (): void => {
  React.useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

    return () => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    };
  }, []);
};
