import React, { useRef } from 'react';

export function usePopupClose(overlayRef: React.RefObject<Element>, callback: () => void): void {
  // Need a ref to callback so it calls the up to date argument
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  React.useEffect(() => {
    let mousedownTarget: EventTarget | null = null;

    const mouseDownListener = (e: Event): void => {
      mousedownTarget = e.target;
    };
    const mouseUpListener = (e: Event): void => {
      if (e.target === overlayRef.current && mousedownTarget === e.target) callbackRef.current();
      mousedownTarget = null;
    };
    document.addEventListener('mousedown', mouseDownListener);
    document.addEventListener('mouseup', mouseUpListener);

    return () => {
      document.removeEventListener('mousedown', mouseDownListener);
      document.removeEventListener('mouseup', mouseUpListener);
    };
  }, []);
}
