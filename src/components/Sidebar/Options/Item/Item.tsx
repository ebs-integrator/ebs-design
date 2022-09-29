import * as React from 'react';
import cn from 'classnames';

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Item = ({ className, onClick, active, disabled, text, ...props }: ItemProps) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={cn(`ebs-optionsbar__item`, className, { active: active, disabled: disabled })}
      onClick={onClickHandler}
      {...props}
    >
      {text}
    </div>
  );
};
