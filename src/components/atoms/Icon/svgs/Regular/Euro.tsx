import React from 'react';

export const Euro: React.FC = (defaultProps) => {
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
        d="M19.5 23.25a11.25 11.25 0 010-22.5m-15 9h12m-12 4.5h9"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
