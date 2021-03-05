export const debounce = <T extends (...args: any[]) => any>(
    callback: T,
    waitFor: number
  ) => {
    let timeout: any = 0;
    return (...args: Parameters<T>): ReturnType<T> => {
      let result: any;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        result = callback(...args);
      }, waitFor);
      return result;
    };
  };


/**
 * Throttling enforces a maximum number of times a function
 * can be called over time.
 *
 * @param func a function
 * @param timeout time
 */
export function throttle(func, timeout) {
  let ready = true;
  return (...args) => {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
}