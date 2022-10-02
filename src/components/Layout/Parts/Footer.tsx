import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-layout');

const Copyright: React.FC = () => (
  <>
    Designed by <b>EBS Integrator</b>
  </>
);

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  fixed?: boolean;
}

const Footer: React.FC<FooterProps> = ({ label = <Copyright />, fixed, className, children, ...props }) => (
  <footer className={cn(bem('footer', { fixed }), className)} {...props}>
    {children || <span>{label}</span>}
  </footer>
);

export { Footer };
