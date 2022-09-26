import React from 'react';

export const Lock: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M3.75 9.75h16.5v13.5H3.75zm3 0V6a5.25 5.25 0 0110.5 0v3.75" transform="scale(1.33333)"></path>
        <path d="M9.75 16.5a2.25 2.25 0 104.5 0 2.25 2.25 0 10-4.5 0z" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
