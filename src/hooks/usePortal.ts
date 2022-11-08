import { useRef } from 'react';
import { createPortal } from 'react-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePortal = (id = 'portal') => {
  const wrapperRef = useRef<HTMLElement | null>(document.getElementById(id));

  if (wrapperRef.current === null && typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.id = id;

    wrapperRef.current = div;
    document.body.appendChild(wrapperRef.current);
  }

  return (children) => wrapperRef.current && createPortal(children, wrapperRef.current);
};
