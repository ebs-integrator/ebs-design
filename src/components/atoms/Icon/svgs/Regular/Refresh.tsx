import React from 'react';

export const Refresh: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="M5.25 14.248v4.5H.75m18-9v-4.5h4.5" transform="scale(1.33333)"></path>
        <path
          d="M19.032 5.245A9.752 9.752 0 018.246 21m-3.279-2.249A9.753 9.753 0 0115.754 3"
          transform="scale(1.33333)"
        ></path>
      </g>
    </svg>
  );
};
