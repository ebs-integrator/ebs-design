import * as React from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import cn from 'classnames';
import { DataPickerProps, DatePickerComposition } from './types';
import { getDefaultDateFormat, parseDate, getOutputDate } from './utils';
import RangePicker from './RangePicker';

const InternalDatePicker = React.forwardRef<ReactDatePicker, DataPickerProps>(({ size = 'medium', ...props }, ref) => {
  const dateFormat = React.useMemo(() => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect), [
    props.dateFormat,
    props.showTimeSelect,
  ]);

  const handleChange = (date, event): void => {
    const outputDate = getOutputDate(date, dateFormat);

    if (props.onChange) {
      props.onChange(outputDate, event);
    }
  };

  const selectedDate = parseDate(props?.value, dateFormat);

  return (
    <ReactDatePicker
      showYearDropdown
      {...props}
      ref={ref}
      onChange={handleChange}
      selected={selectedDate}
      className={cn(`ebs-datepicker ebs-datepicker--${size}`, props.className)}
      wrapperClassName={cn('ebs-datepicker__wrapper', props.wrapperClassName)}
      popperClassName={cn('ebs-datepicker__popper', props.popperClassName)}
    >
      {props.children}
    </ReactDatePicker>
  );
});

const DatePicker = InternalDatePicker as DatePickerComposition;

DatePicker.Range = RangePicker;

export { DatePicker, registerLocale };
