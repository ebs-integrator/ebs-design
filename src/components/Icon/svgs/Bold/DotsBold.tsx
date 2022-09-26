import React from 'react';

export const DotsBold: React.FC = (defaultProps) => {
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
        d="M0 12a3.25 3.25 0 106.5 0A3.25 3.25 0 100 12zm8.75 0a3.25 3.25 0 106.5 0 3.25 3.25 0 10-6.5 0zm8.75 0a3.25 3.25 0 106.5 0 3.25 3.25 0 10-6.5 0z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
