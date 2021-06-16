import React from 'react';

export const StarBold: React.FC = (defaultProps) => {
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
        d="M23.555 8.729a1.505 1.505 0 00-1.406-.98h-6.087a.5.5 0 01-.472-.334l-2.185-6.193a1.5 1.5 0 00-2.81 0l-.005.016-2.18 6.177a.5.5 0 01-.471.334H1.85A1.5 1.5 0 00.887 10.4l5.184 4.3a.5.5 0 01.155.543l-2.178 6.531a1.5 1.5 0 002.31 1.684l5.346-3.92a.5.5 0 01.591 0l5.344 3.919a1.5 1.5 0 002.312-1.683l-2.178-6.535a.5.5 0 01.155-.543l5.194-4.306a1.5 1.5 0 00.433-1.661z"
        transform="scale(1.33333)"
      ></path>
    </svg>
  );
};
