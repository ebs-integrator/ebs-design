import React from 'react';

export const Calendar: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path
          d="M6.75 12.75h.75a.75.75 0 01.75.75v5.25m-1.5 0h3m4.082-6h1.918a.751.751 0 01.7 1.014l-1.87 4.986"
          transform="scale(1.33333)"
        ></path>
        <path d="M.75 3.75h22.5v19.5H.75zm0 6h22.5M6.75 6V.75M17.25 6V.75" transform="scale(1.33333)"></path>
      </g>
    </svg>
  );
};
