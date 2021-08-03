import * as React from 'react';
import cn from 'classnames';
import { usePopperTooltip } from 'react-popper-tooltip';

import { Icon } from 'components/atoms';

export type TooltipTriggerType = 'click' | 'right-click' | 'hover' | 'focus';

export type TooltipPlacement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type TooltipConfig = Partial<{
  //                             // default value
  closeOnOutsideClick: boolean; // true
  closeOnTriggerHidden: boolean; // false
  defaultVisible: boolean; // false
  delayHide: number; // 0
  delayShow: number; // 0
  followCursor: boolean; // false
  interactive: boolean;
  mutationObserverOptions: MutationObserverInit; // { attributes: true, childList: true, subtree: true }
  offset: [number, number]; // [0, 0]
  onVisibleChange: (state: boolean) => void;
  placement: TooltipPlacement;
  trigger: TooltipTriggerType; // 'hover'
  visible: boolean;
}>;

export interface TooltipProps extends TooltipConfig {
  bodyClass?: string;
  title?: React.ReactNode;
  tooltip?: React.ReactNode;
  hideArrow?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  bodyClass,
  children,
  title,
  tooltip,
  hideArrow,
  ...tooltipConfig
}) => {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    ...tooltipConfig,
  });

  const { placement } = tooltipConfig;

  return (
    <div style={{ position: 'relative' }}>
      <div className="ebs-tooltip__trigger" ref={setTriggerRef}>
        {children}
      </div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className: `ebs-tooltip__wrapper ebs-tooltip--${placement}`,
          })}
        >
          {!hideArrow && (
            <div
              {...getArrowProps({
                className: 'ebs-tooltip__arrow',
                'data-placement': placement,
              })}
            >
              <Icon type="arrow-top" />
            </div>
          )}

          <div className={cn(`ebs-tooltip__body`, bodyClass)}>
            {title && <div className="ebs-tooltip__body-title">{title}</div>}

            {tooltip}
          </div>
        </div>
      )}
    </div>
  );
};
