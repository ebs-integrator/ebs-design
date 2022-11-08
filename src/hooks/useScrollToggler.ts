import * as React from 'react';

/**
 * Toggles overflowY: hidden to document.body depending on opened popups
 */
export const useScrollToggler = (() => {
  /**
   * Counts how many popups(modals) are currently open
   */
  let instanceCnt = 0;

  let initialBodyOverflow = document.body.style.overflowY;

  return (active: boolean): void => {
    React.useEffect(() => {
      if (active) {
        if (instanceCnt === 0) initialBodyOverflow = document.body.style.overflowY;

        instanceCnt++;

        document.body.style.overflowY = 'hidden';

        return () => {
          instanceCnt--;

          if (instanceCnt === 0) {
            document.body.style.overflowY = initialBodyOverflow;
          }
        };
      }
    }, [active]);
  };
})();
