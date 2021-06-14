import React from 'react';

export const BellBold: React.FC = (defaultProps) => {
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
        d="M14.236 21H9.764a.25.25 0 00-.248.222 2.319 2.319 0 00-.016.278 2.5 2.5 0 105 0 2.319 2.319 0 00-.016-.278.248.248 0 00-.248-.222zm7.21-1.724a16.366 16.366 0 01-1.746-7.332v-.768a9.114 9.114 0 00-3.866-7.622 6.379 6.379 0 00-2.334-.918V1.5a1.5 1.5 0 10-3 0v1.149a6.738 6.738 0 00-2.851 1.277 9.2 9.2 0 00-3.349 7.25v.768a16.366 16.366 0 01-1.746 7.332A.5.5 0 003 20h18a.5.5 0 00.446-.725z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
