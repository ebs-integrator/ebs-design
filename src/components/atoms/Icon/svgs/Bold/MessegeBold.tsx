import React from 'react';

export const MessageBold: React.FC = (defaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 32 32"
      {...defaultProps}
    >
      <g stroke="none">
        <path
          d="M22 1H2a2 2 0 00-2 2v13.552A1.953 1.953 0 002 18.5h2.5V22a1 1 0 001.569.823l6.243-4.323H22a2 2 0 002-2V3a2 2 0 00-2-2zm0 15.25a.25.25 0 01-.25.25H12a1 1 0 00-.569.178L6.5 20.091V17.5a1 1 0 00-1-1H2.25a.25.25 0 01-.25-.25v-13A.25.25 0 012.25 3h19.5a.25.25 0 01.25.25z"
          transform="scale(1.33333)"
        ></path>
        <path
          d="M6 8.5h12a1 1 0 100-2H6a1 1 0 100 2zM6 13h12a1 1 0 000-2H6a1 1 0 000 2z"
          transform="scale(1.33333)"
        ></path>
      </g>
    </svg>
  );
};
