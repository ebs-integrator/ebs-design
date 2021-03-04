import { GenericObject } from 'types';
import { LabelOptions, ControlOptions } from './interface';

export const combineProps = (...args): GenericObject => Object.assign({}, ...args);

// TODO: Find a better way
export const getLabelOptions = (type: string, labelOptions?: LabelOptions): LabelOptions => {
  if (type === 'vertical') {
    return {
      className: labelOptions?.className,
      align: labelOptions?.align ? labelOptions.align : 'center',
      justify: labelOptions?.justify ? labelOptions.justify : 'start',
      col: labelOptions?.col
        ? labelOptions.col
        : {
            size: 12,
          },
    };
  }

  return {
    className: labelOptions?.className,
    align: labelOptions?.align ? labelOptions.align : 'center',
    justify: labelOptions?.justify ? labelOptions.justify : 'end',
    col: labelOptions?.col
      ? labelOptions.col
      : {
          size: 4,
        },
  };
};

export const getControlOptions = (type: string, controlOptions?: ControlOptions): ControlOptions => {
  if (type === 'vertical') {
    return {
      className: controlOptions?.className,
      col: controlOptions?.col
        ? controlOptions.col
        : {
            size: 12,
          },
    };
  }

  return {
    className: controlOptions?.className,
    col: controlOptions?.col
      ? controlOptions.col
      : {
          size: 8,
        },
  };
};

// Check if field is required
export const checkRequired = (rules?): boolean =>
  !!(
    rules &&
    rules.some((rule) => {
      if (rule && typeof rule === 'object' && rule.required) {
        return true;
      }
      return false;
    })
  );
