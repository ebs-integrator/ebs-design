import * as React from 'react';
import cn from 'classnames';

export const Item: React.FC<{
  className?: string;
  text?: React.ReactNode;
  active?: boolean;
  prefix?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}> = ({ className, onClick, active, disabled, text, prefix, href }) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined && !disabled) {
      onClick();
    }
  };
  const props = {
    className: cn(`ebs-optionsbar__item`, className, { active: active, disabled: disabled }),
  };

  return (
    <>
      {prefix && <div className="ebs-sidebar__prefix">{prefix}</div>}
      {href ? (
        <a href={href} {...props}>
          {text}
        </a>
      ) : (
        <div {...props} onClick={onClickHandler}>
          {text}
        </div>
      )}
    </>
  );
};
