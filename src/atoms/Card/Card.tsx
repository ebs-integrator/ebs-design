import * as React from 'react';

import './Card.scss';

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`ebs-card ${className}`}>{children}</div>
);

interface HeaderProps {
  className?: string;
  title?: React.ReactNode;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  count?: number;
}

export const CardHeader: React.FC<HeaderProps> = ({ className = '', count = 0, title, leftSide, rightSide }) => (
  <div className={`ebs-card-header ${className}`}>
    <div className="ebs-card-header-side-left">
      {title && (
        <div className="ebs-card-header-title">
          {title}

          {count > 0 ? ` (${count})` : ''}
        </div>
      )}

      {leftSide}
    </div>

    {rightSide && <div className="ebs-card-header-side-right">{rightSide}</div>}
  </div>
);

interface FooterProps {
  className?: string;
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
  currentLabel?: string;
}

export const CardFooter: React.FC<FooterProps> = ({ className = '', leftSide, rightSide }) => (
  <div className={`ebs-card-footer ${className}`}>
    {leftSide && <div className="ebs-card-footer-side-left">{leftSide}</div>}

    {rightSide ? <div className="ebs-card-footer-side-right">{rightSide}</div> : null}
  </div>
);
