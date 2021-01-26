import React from 'react';
import cn from 'classnames';
import { Row, Col } from 'components/atoms';

export interface DetailsCardProps {
  headLeft: React.ReactNode;
  headRight?: React.ReactNode;
  footer?: React.ReactNode;
  footerContentAlign?: 'left' | 'right' | 'center' | 'between';
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  headLeft,
  headRight,
  footer,
  footerContentAlign = 'left',
  children,
}) => (
  <div className="ebs-details">
    <div className="ebs-details__header">
      <div className="ebs-details__header__side-left">{headLeft}</div>
      {headRight && <div className="ebs-details__header__side-right">{headRight}</div>}
    </div>
    <div className="ebs-details__body">{children}</div>
    {footer && <div className={cn('ebs-details__footer', `ebs-details__footer--${footerContentAlign}`)}>{footer}</div>}
  </div>
);

export interface HeadLeftProps {
  icon?: React.ReactNode;
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
}

export const HeadLeft: React.FC<HeadLeftProps> = ({ icon, title, subtitle }) => (
  <Row gx={0}>
    <Col>{icon && <div className="ebs-details__header__icon">{icon}</div>}</Col>

    <Col>
      <h2 className="ebs-details__header__title">{title}</h2>
      {subtitle && <span className="ebs-details__header__subtitle">{subtitle}</span>}
    </Col>
  </Row>
);
