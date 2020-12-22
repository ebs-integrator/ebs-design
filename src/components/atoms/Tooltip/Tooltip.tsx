import * as React from 'react';
import { Icon } from 'components/atoms';
import TooltipTrigger from 'react-popper-tooltip';

const placements: { [key: string]: string } = {
  right: 'left',
  left: 'right',
  bottom: 'top',
  top: 'bottom',
};

export const Tooltip: React.FC<any> = ({ bodyClass = '', children, title, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: `ebs-tooltip-wrapper ebs-tooltip-${placement}`,
        })}
      >
        {!hideArrow && (
          <Icon
            type={`arrow-${placements[placement]}`}
            {...getArrowProps({
              ref: arrowRef,
              className: 'ebs-tooltip-arrow',
              'data-placement': placement,
            })}
          />
        )}

        <div className={`ebs-tooltip-body ${bodyClass}`}>
          {title && <div className="ebs-tooltip-body-title">{title}</div>}

          {tooltip}
        </div>
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <div
        {...getTriggerProps({
          ref: triggerRef,
          className: 'ebs-tooltip-trigger',
        })}
      >
        {children}
      </div>
    )}
  </TooltipTrigger>
);
