import React from 'react';

export const IndeterminateBold: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        d="M1.5 13.5h21a1.5 1.5 0 000-3h-21a1.5 1.5 0 000 3z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
