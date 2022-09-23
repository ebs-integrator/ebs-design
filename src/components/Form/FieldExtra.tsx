import * as React from 'react';

export const FieldExtra: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className="ebs-form__field__explain ebs-form__field__extra" {...props}>
    {children}
  </div>
);
