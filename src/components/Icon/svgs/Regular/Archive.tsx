import React from 'react';

export const Archive: React.FC = (defaultProps) => {
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
          d="M21.75 9.75v9a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-9m19.5-7.5H2.25a1.5 1.5 0 00-1.5 1.5v3h22.5v-3a1.5 1.5 0 00-1.5-1.5z"
          transform="scale(1.33333)"
        ></path>
        <path
          d="M15 11.25a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 011.5 1.5z"
          transform="scale(1.33333)"
        ></path>
      </g>
    </svg>
  );
};
