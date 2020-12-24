import * as React from 'react';
import cn from 'classnames';

export interface Props {
  className?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  text?: React.ReactNode;
}

export const OptionsbarItem: React.FC<Props> = ({ className, onClick, active, disabled, text }) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={cn(`ebs-optionsbar__item`, className, active && `active`, disabled && ` disabled`)}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
