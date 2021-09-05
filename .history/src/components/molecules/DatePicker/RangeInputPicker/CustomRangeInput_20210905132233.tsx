import * as React from 'react';
import type { ReactDatePickerProps } from 'react-datepicker';
import { omitKeys } from 'libs';
import { getOutputDate } from '../utils';

const keysToOmit = ['autoComplete', 'autoFocus', 'dateFormat', 'endDate', 'startDate', 'value'] as const;

const CustomRangeInput = React.forwardRef<HTMLInputElement, Partial<ReactDatePickerProps>>((props, ref) => {
  const range = [getOutputDate(props.startDate, props.dateFormat), getOutputDate(props.endDate, props.dateFormat)];
  const value = range.filter((r) => !r).length === range.length ? '' : range.join(' - ');

  return <input ref={ref} {...omitKeys(props, keysToOmit)} title={value} value={value} />;
});

export default CustomRangeInput;
