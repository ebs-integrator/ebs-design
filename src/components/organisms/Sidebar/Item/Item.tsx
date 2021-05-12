import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import cn from 'classnames';
import { Icon, Label } from 'components/atoms';

export const Item: React.FC<{
  className?: string;
  labelClass?: string;
  optionsClass?: string;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  invert?: boolean;
  text?: React.ReactNode;
  options?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}> = ({
  className,
  labelClass,
  optionsClass,
  label,
  active,
  prefix,
  invert,
  text,
  disabled,
  href,
  onClick,
  options,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onClickHandler = (): void => {
    if (!disabled) {
      if (options !== undefined) {
        setCollapsed((s) => !s);
      }

      if (onClick !== undefined) {
        onClick();
      }
    }
  };

  const props = {
    className: cn(`ebs-sidebar__item`, className, {
      invert: invert,
      active: active || collapsed,
      disabled: disabled,
      'has-options': options,
    }),
    children: (
      <>
        {prefix && <div className="ebs-sidebar__prefix">{prefix}</div>}
        {text}
        {options !== undefined && (
          <div className="ebs-sidebar__suffix">
            <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} />
          </div>
        )}
      </>
    ),
  };

  return (
    <>
      {label && <Label className={cn(`ebs-sidebar__label`, labelClass)} text={label} />}

      {href ? (
        <a href={href} {...props}>
          {props.children}
        </a>
      ) : (
        <div {...props} onClick={onClickHandler} />
      )}

      <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
        <div className={cn(`ebs-sidebar__options`, optionsClass)}>{options}</div>
      </AnimateHeight>
    </>
  );
};
