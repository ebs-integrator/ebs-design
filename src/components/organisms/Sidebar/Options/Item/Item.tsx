import * as React from 'react';
import cn from 'classnames';

export const Item: React.FC<{
  className?: string;
  text?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}> = ({ className, onClick, active, disabled, text }) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={cn(`ebs-optionsbar__item`, className, { active: active, disabled: disabled })}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};
