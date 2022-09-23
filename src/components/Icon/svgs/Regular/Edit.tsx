import React from 'react';

export const Edit: React.FC = (defaultProps) => {
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
          d="M13.045 14.136l-3.712.531.53-3.713 9.546-9.546a2.25 2.25 0 013.182 3.182zm5.303-11.667l3.182 3.182"
          transform="scale(1.33333)"
        ></path>
        <path
          d="M18.75 14.25v7.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h7.5"
          transform="scale(1.33333)"
        ></path>
      </g>
    </svg>
  );
};
