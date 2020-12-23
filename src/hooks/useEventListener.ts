import * as React from 'react';

export function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  handler: Function,
  element?: React.RefObject<T>,
): void {
  // Create a ref that stores handler
  const savedHandler = React.useRef<Function>();

  React.useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = (element && element.current) || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }
    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event): void => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (savedHandler && !!savedHandler.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}
