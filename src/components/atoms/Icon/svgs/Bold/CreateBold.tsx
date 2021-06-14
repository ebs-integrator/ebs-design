import React from 'react';

export const CreateBold: React.FC = (defaultProps) => {
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
        d="M12 23.5A11.5 11.5 0 10.5 12 11.513 11.513 0 0012 23.5zM6 11h4.75a.25.25 0 00.25-.25V6a1 1 0 012 0v4.75a.25.25 0 00.25.25H18a1 1 0 010 2h-4.75a.25.25 0 00-.25.25V18a1 1 0 01-2 0v-4.75a.25.25 0 00-.25-.25H6a1 1 0 010-2z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
