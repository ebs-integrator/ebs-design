import React from 'react';

export const Dots: React.FC = (defaultProps) => {
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
        d="M.75 12.023a2.625 2.625 0 105.25 0 2.625 2.625 0 10-5.25 0zm17.25 0a2.625 2.625 0 105.25 0 2.625 2.625 0 10-5.25 0zm-8.625 0a2.625 2.625 0 105.25 0 2.625 2.625 0 10-5.25 0z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
