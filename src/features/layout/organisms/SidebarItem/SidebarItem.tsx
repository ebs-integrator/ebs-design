import * as React from 'react';
import AnimateHeight from 'react-animate-height';
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
  className = '',
  labelClass = '',
  optionsClass = '',
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

  const classNames = React.useMemo(
    () =>
      `ebs-sidebar-item${options !== undefined ? ' has-options' : ''}${invert ? ' invert' : ''}${
        disabled ? ' disabled' : ''
      }${active || collapsed ? ' active' : ''} ${className}`,
    [disabled, collapsed, invert, options],
  );

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
      {label && <Label className={`ebs-sidebar-label ${labelClass}`} text={label} />}

      <div className={classNames} onClick={onClickHandler}>
        {prefix && <div className="ebs-sidebar-prefix">{prefix}</div>}

        <span className="ebs-sidebar-text">{text}</span>

        {options !== undefined && (
          <div className="ebs-sidebar-suffix">
            <Icon type={`arrow-${collapsed ? 'bottom' : 'left'}`} />
          </div>
        )}
      </div>

      <AnimateHeight duration={150} height={collapsed ? 'auto' : 0}>
        <div className={`ebs-sidebar-options ${optionsClass}`}>{options}</div>
      </AnimateHeight>
    </>
  );
};
