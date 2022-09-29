import * as React from 'react';
import cn from 'classnames';

const Copyright = () => (
  <>
    Designed by <b>EBS Integrator</b>
  </>
);

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  fixed?: boolean;
}

const Footer = ({ label = <Copyright />, fixed, className, children, ...props }: FooterProps) => (
  <footer className={cn('ebs-layout__footer', className, { 'ebs-layout__footer--fixed': fixed })} {...props}>
    {children || <span>{label}</span>}
  </footer>
);

export { Footer };
