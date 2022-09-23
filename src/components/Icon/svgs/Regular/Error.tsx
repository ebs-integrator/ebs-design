import React from 'react';

export const Error: React.FC = (defaultProps) => {
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
        d="M.748 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0zm6.75 4.5l8.999-9m.001 9l-9.001-9"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
