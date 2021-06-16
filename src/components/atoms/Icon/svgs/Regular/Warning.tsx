import React from 'react';

export const Warning: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5a.375.375 0 10.375.375A.375.375 0 0012 16.5h0"
          transform="scale(1.33333)"
        ></path>
        <path strokeLinecap="round" d="M12 13.5V5.25" transform="scale(1.33333)"></path>
        <path d="M.75 12a11.25 11.25 0 1022.5 0 11.25 11.25 0 10-22.5 0z" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
