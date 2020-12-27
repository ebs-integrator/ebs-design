import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import cn from 'classnames';
import { Icon, Label } from 'components/atoms';

interface TabProps {
  className?: string;
  labelClass?: string;
  optionsClass?: string;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  invert?: boolean;
  text?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  options?: React.ReactNode;
}

export const SidebarItem: React.FC<TabProps> = ({
  className,
  labelClass,
  optionsClass,
  label,
  active,
  prefix,
  invert,
  text,
  disabled,
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

  return (
    <>
      {label && <Label className={cn(`ebs-sidebar__label`, labelClass)} text={label} />}

      <div
        className={cn(`ebs-sidebar__item`, className, {
          invert: invert,
          active: active || collapsed,
          disabled: disabled,
          'has-options': options,
        })}
        onClick={onClickHandler}
      >
        {prefix && <div className="ebs-sidebar__prefix">{prefix}</div>}

        <span className="ebs-sidebar__text">{text}</span>

        {options !== undefined && (
          <div className="ebs-sidebar__suffix">
            <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} />
          </div>
        )}
      </div>

      <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
        <div className={cn(`ebs-sidebar__options`, optionsClass)}>{options}</div>
      </AnimateHeight>
    </>
  );
};
