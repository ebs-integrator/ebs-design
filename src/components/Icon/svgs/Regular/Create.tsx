import React from 'react';

export const Create: React.FC = (defaultProps) => {
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
        d="M12 7.5v9M7.5 12h9M.75 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
