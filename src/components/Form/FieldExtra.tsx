import * as React from 'react';

export const FieldExtra = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="ebs-form__field__explain ebs-form__field__extra" {...props}>
    {children}
  </div>
);
