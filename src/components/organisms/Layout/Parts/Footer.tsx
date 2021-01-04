import * as React from 'react';

export const Footer: React.FC = ({ children }) => (
  <div className="ebs-layout__footer">
    {children || (
      <span>
        Designed by <b>EBS Integrator</b>
      </span>
    )}
  </div>
);
