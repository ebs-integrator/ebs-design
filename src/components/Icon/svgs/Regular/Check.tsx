import React from 'react';

export const Check = (defaultProps: React.HTMLAttributes<HTMLOrSVGElement>) => {
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
        d="M23.25.749L8.158 22.308a2.2 2.2 0 01-3.569.059L.75 17.249"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
