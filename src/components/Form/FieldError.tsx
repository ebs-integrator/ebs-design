import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-form__field');

export const FieldError = ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className={cn(bem('explain'), bem('error'))} {...props}>
    {React.Children.map(children, (child, index) => (
      <li key={index} role="alert">
        {child}
      </li>
    ))}
  </ul>
);
