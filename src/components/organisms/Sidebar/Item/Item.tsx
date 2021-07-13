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
  url?: string;
  options?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
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
  url,
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

      if (!options && onClick !== undefined) {
        onClick();
      }
    }
  };

  const textRender = (
    <div
      className={cn(`ebs-sidebar__item`, className, {
        'ebs-sidebar__item--invert': invert,
        'ebs-sidebar__item--active': active || collapsed,
        'ebs-sidebar__item--disabled': disabled,
        'has-options': options,
      })}
      onClick={onClickHandler}
    >
      {prefix && <div className="ebs-sidebar__prefix">{prefix}</div>}
      <span className="ebs-sidebar__text">{text}</span>
    </div>
  );

  return (
    <>
      {label && <Label className={cn(`ebs-sidebar__label`, labelClass)} text={label} />}

      <div className="relative">
        <div className="relative">
          {url ? <a href={url}>{textRender}</a> : textRender}

          {options !== undefined && (
            <div className="ebs-sidebar__suffix">
              <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} model="bold" />
            </div>
          )}
        </div>

        <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
          <div className={cn(`ebs-sidebar__options`, optionsClass)}>{options}</div>
        </AnimateHeight>
      </div>
    </>
  );
};
