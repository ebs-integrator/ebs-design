import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-form__field');

export const FieldError: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => (
  <ul className={cn(bem('explain'), bem('error'))} {...props}>
    {React.Children.map(children, (child, index) => (
      <li key={index} role="alert">
        {child}
      </li>
    ))}
  </ul>
);
