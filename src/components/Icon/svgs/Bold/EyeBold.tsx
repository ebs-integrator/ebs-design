import React from 'react';

export const EyeBold = (defaultProps: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="0">
        <path
          d="M23.432 10.524C20.787 7.614 16.4 4.538 12 4.6 7.6 4.537 3.213 7.615.568 10.524a2.211 2.211 0 000 2.948C3.182 16.351 7.507 19.4 11.839 19.4h.308c4.347 0 8.671-3.049 11.288-5.929a2.21 2.21 0 00-.003-2.947zM7.4 12a4.6 4.6 0 114.6 4.6A4.6 4.6 0 017.4 12z"
          transform="scale(1.33333)"
        ></path>
        <path d="M10 12a2 2 0 104 0 2 2 0 10-4 0z" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
