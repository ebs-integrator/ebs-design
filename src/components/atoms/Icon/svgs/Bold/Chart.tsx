import React from 'react';

export const Chart: React.FC = (defaultProps) => {
  return (
    <svg viewBox="0 0 16 16" {...defaultProps}>
      <path
        d="M2.66667 12.6667H13.3333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66667 10L5.33333 6L8 7.33333L10.6667 4L13.3333 6.66667"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
