import * as React from 'react';
import cn from 'classnames';
import { makeBEM } from 'libs';

const bem = makeBEM('ebs-optionsbar');

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Item: React.FC<ItemProps> = ({ className, onClick, active, disabled, text, ...props }) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };

  return (
    <div className={cn(bem('item', { active, disabled }), className)} onClick={onClickHandler} {...props}>
      {text}
    </div>
  );
};
