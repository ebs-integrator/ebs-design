import React from 'react';

export const Success: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828" transform="scale(1.33333)"></path>
        <path d="M.75 11.999a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0z" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
