import React from 'react';

export const Close: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M.75 23.249l22.5-22.5m0 22.5L.75.749"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
