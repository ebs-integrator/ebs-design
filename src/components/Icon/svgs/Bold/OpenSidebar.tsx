import React from 'react';

export const OpenSidebar: React.FC = (defaultProps) => {
  return (
    <svg viewBox="0 0 16 16" {...defaultProps}>
      <path
        d="M2.66667 4H13.3333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66667 8H9.33333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.54545 12H13.4545"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
