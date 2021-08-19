import * as React from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import cn from 'classnames';
import { DatePickerProps, DatePickerComposition, DateType } from './types';
import { getDefaultDateFormat, parseDate, getOutputDate } from './utils';
import RangePicker from './RangePicker';
import RangeInputPicker from './RangeInputPicker';

const InternalDatePicker = React.forwardRef<ReactDatePicker, DatePickerProps>(
  ({ size = 'medium', value, ...props }, ref) => {
    const [val, setVal] = React.useState<DateType>('');

    React.useEffect(() => {
      if (value !== val) {
        setVal(value || null);
      }
    }, [value]);

    const dateFormat = React.useMemo(() => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect), [
      props.dateFormat,
      props.showTimeSelect,
    ]);

    const handleChange = (date, event): void => {
      const outputDate = getOutputDate(date, dateFormat);

      setVal(date);

      if (
        props.onChange &&
        (!event?.currentTarget?.value || (event.currentTarget && event.currentTarget.value.length >= dateFormat.length))
      ) {
        props.onChange(outputDate, event);
      }
    };

    return (
      <ReactDatePicker
        showYearDropdown
        {...props}
        ref={ref}
        value={val as any}
        onChange={handleChange}
        selected={parseDate(val, dateFormat)}
        className={cn(`ebs-datepicker ebs-datepicker--${size}`, props.className)}
        wrapperClassName={cn('ebs-datepicker__wrapper', props.wrapperClassName)}
        popperClassName={cn('ebs-datepicker__popper', props.popperClassName)}
        calendarClassName={cn('ebs-datepicker__calendar', props.calendarClassName)}
      >
        {props.children}
      </ReactDatePicker>
    );
  },
);

const DatePicker = InternalDatePicker as DatePickerComposition;

DatePicker.Range = RangePicker;
DatePicker.RangeInput = RangeInputPicker;

export { InternalDatePicker, DatePicker, registerLocale };
