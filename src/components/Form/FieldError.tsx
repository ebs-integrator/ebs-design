import * as React from 'react';

export const FieldError = ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="ebs-form__field__explain ebs-form__field__error" {...props}>
    {React.Children.map(children, (child, index) => (
      <li key={index} role="alert">
        {child}
      </li>
    ))}
  </ul>
);
