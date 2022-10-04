import * as React from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { DatePickerProps, DatePickerComposition, DateType } from './types';
import { getDefaultDateFormat, parseDate, getOutputDate } from './utils';
import RangePicker from './RangePicker';
import RangeInputPicker from './RangeInputPicker';

const bem = makeBEM('ebs-datepicker');

const InternalDatePicker = React.forwardRef<ReactDatePicker, DatePickerProps>(
  (
    { size = 'medium', value, className, wrapperClassName, popperClassName, calendarClassName, children, ...props },
    ref,
  ) => {
    const [val, setVal] = React.useState<DateType>('');

    React.useEffect(() => {
      if (value !== val) {
        setVal(value || null);
      }
    }, [value]);

    const dateFormat = React.useMemo(
      () => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect),
      [props.dateFormat, props.showTimeSelect],
    );

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
        onChangeRaw={(e) => handleChange(e.target.valueAsDate, e)}
        selected={parseDate(val, dateFormat)}
        className={cn(bem(null, [size]), className)}
        wrapperClassName={cn(bem('wrapper'), wrapperClassName)}
        popperClassName={cn(bem('popper'), popperClassName)}
        calendarClassName={cn(bem('calendar'), calendarClassName)}
      >
        {children}
      </ReactDatePicker>
    );
  },
);

const DatePicker = InternalDatePicker as DatePickerComposition;

DatePicker.Range = RangePicker;
DatePicker.RangeInput = RangeInputPicker;

export { InternalDatePicker, DatePicker, registerLocale };
