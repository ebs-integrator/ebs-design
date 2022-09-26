import React from 'react';

export const Globe: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M.75 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0z" transform="scale(1.33333)"></path>
        <path
          d="M9.289 22.921C7.767 20.689 6.75 16.633 6.75 12S7.767 3.311 9.289 1.079M.75 12h22.5M2.482 18h19.036M2.482 6h19.036M14.711 1.079C16.233 3.311 17.25 7.367 17.25 12s-1.017 8.689-2.539 10.921"
          transform="scale(1.33333)"
        ></path>
      </g>
    </svg>
  );
};
