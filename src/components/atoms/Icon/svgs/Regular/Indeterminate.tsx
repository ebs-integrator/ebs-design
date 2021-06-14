import React from 'react';

export const Indeterminate: React.FC = (defaultProps) => {
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
        d="M.75 12.038h22.5"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
