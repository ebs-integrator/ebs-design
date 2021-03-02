import * as React from 'react';
import cn from 'classnames';
import { GenericObject } from 'types';

const Copyright: React.FC = () => (
  <>
  Designed by <b>EBS Integrator</b>
  </>
)

export interface FooterProps {
  label?: React.ReactNode;
  fixed?: boolean;
}

const Footer: React.FC<FooterProps> & GenericObject = ({ label = <Copyright />, fixed, children }) => (
  <footer className={cn('ebs-layout__footer', { 'ebs-layout__footer--fixed': fixed })}>
    {children || (
      <span>
        {label}
      </span>
    )}
  </footer>
);

export { Footer };
