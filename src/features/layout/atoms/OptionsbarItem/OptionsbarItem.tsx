import * as React from 'react';

export interface Props {
  className?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  text?: React.ReactNode;
}

export const OptionsbarItem: React.FC<Props> = ({ className = '', onClick, active, disabled, text }) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`ebs-optionsbar-item${active ? ' active' : ''}${disabled ? ' disabled' : ''} ${className}`}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
