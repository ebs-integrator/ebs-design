import * as React from 'react';
import AnimateHeight from 'react-animate-height';
import cn from 'classnames';

import { GenericObject } from 'types';
import { makeBEM } from 'libs';
import { Icon, Label, Tooltip } from 'components';
import { useLayoutState } from 'components/Layout/context';

const bem = makeBEM('ebs-sidebar');

export interface ItemProps extends Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, 'onClick'> {
  labelClass?: string;
  optionsClass?: string;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  invert?: boolean;
  text?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Item = ({
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
  children,
}: ItemProps) => {
  const { toggled } = useLayoutState();
  const [collapsed, setCollapsed] = React.useState(false);

  React.useEffect(() => {
    if (toggled) {
      setCollapsed(false);
    }
  }, [toggled]);

  React.useEffect(() => {
    setCollapsed(active || false);

    React.Children?.forEach(children as GenericObject[], (child) => {
      child?.props?.children?.forEach((element) => {
        if (element?.props?.children?.props?.active) {
          setCollapsed(true);
        }
      });
    });
  }, [children]);

  const onClickHandler = (): void => {
    if (!disabled) {
      if (children) {
        setCollapsed((s) => !s);
      }

      if (!children && onClick !== undefined) {
        onClick();
      }
    }
  };

  return (
    <>
      {label && <Label className={cn(bem('label'), labelClass)} text={label} />}

      <div className="relative">
        <Tooltip
          bodyClass="p-0"
          placement="right"
          trigger={toggled && children ? 'click' : undefined}
          visible={toggled && collapsed}
          tooltip={toggled ? <div className={bem('options')}>{children}</div> : undefined}
        >
          <div className="relative">
            <div
              className={cn(bem('item', { invert, active, collapsed, disabled, 'has-options': children }), className)}
              onClick={onClickHandler}
            >
              {prefix && <div className="ebs-sidebar__prefix">{prefix}</div>}
              <span className={cn('ebs-sidebar__text', { 'px-0': typeof text !== 'string' })}>{text}</span>
            </div>

            {children && (
              <div className="ebs-sidebar__suffix">
                <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} model="bold" />
              </div>
            )}
          </div>
        </Tooltip>

        {!toggled && (
          <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
            <div className={cn(`ebs-sidebar__options`, optionsClass)}>{children}</div>
          </AnimateHeight>
        )}
      </div>
    </>
  );
};
