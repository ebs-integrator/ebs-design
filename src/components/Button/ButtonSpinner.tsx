import React from 'react';
import { Loader } from 'components';
import { ButtonType, bem } from './Button';

interface ButtonSpinnerProps {
  type: ButtonType;
  absolute?: boolean;
}

export const ButtonSpinner = ({ type, absolute = false }: ButtonSpinnerProps) => (
  <Loader.Spinner size="small" className={bem('loader', [type], { absolute })} />
);
