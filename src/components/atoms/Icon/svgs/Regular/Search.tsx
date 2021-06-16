import React from 'react';

export const Search: React.FC = (defaultProps) => {
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
        d="M1.472 13.357a9.063 9.063 0 1016.682-7.09 9.063 9.063 0 10-16.682 7.09zm14.749 2.863l7.029 7.03"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
