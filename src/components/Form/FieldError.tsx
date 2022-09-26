import * as React from 'react';

export const FieldError: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => (
  <ul className="ebs-form__field__explain ebs-form__field__error" {...props}>
    {React.Children.map(children, (child, index) => (
      <li key={index} role="alert">
        {child}
      </li>
    ))}
  </ul>
);
