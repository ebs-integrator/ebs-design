import React from 'react';

export const Info: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path
          d="M14.25 16.5h-.75A1.5 1.5 0 0112 15v-3.75a.75.75 0 00-.75-.75h-.75m1.125-3.75a.375.375 0 10.375.375.375.375 0 00-.375-.375h0"
          transform="scale(1.33333)"
        ></path>
        <path d="M.75 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0z" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
