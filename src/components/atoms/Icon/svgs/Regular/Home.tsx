import React from 'react';

export const Home: React.FC = (defaultProps) => {
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
        d="M3.753 13.944v8.25h6v-6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v6h6v-8.25m-19.5-1.5L10.942 2.255a1.5 1.5 0 012.122 0l10.189 10.189"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
