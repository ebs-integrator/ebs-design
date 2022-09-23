import React from 'react';

export const Arrow: React.FC = (defaultProps) => {
  return (
    <svg viewBox="0 0 10 5" {...defaultProps}>
      <path
        fill="currentColor"
        d="M4.646.354a.5.5 0 01.708 0l3.792 3.792A.5.5 0 018.793 5H1.207a.5.5 0 01-.353-.854L4.646.354z"
      ></path>
    </svg>
  );
};
