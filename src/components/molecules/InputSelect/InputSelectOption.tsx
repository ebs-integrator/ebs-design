import React, { FC, ReactNode } from 'react';

export interface OptionProps {
  value: any;
  text: string;
  children?: ReactNode;
  className?: string;
}

export const Option: FC<OptionProps> = (props) => <span {...props} />;
