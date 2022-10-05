import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import cn from 'classnames';

import { isEqual, makeBEM } from 'libs';
import { RangePickerProps, DateValueType, DateType } from './types';
import { getDefaultDateFormat, getOutputDate, parseDate } from './utils';

const rangeBem = makeBEM('ebs-rangepicker');
const dateBem = makeBEM('ebs-datepicker');

const RangePicker = React.forwardRef<ReactDatePicker, RangePickerProps>(
  ({ size = 'medium', startProps, endProps, value, onChange, className, disabled, ...props }, ref) => {
    const [startDate, setStartDate] = React.useState<DateValueType>();
    const [endDate, setEndDate] = React.useState<DateValueType>();
    const [loaded, setLoaded] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const dateFormat = React.useMemo(
      () => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect),
      [props.dateFormat, props.showTimeSelect],
    );

    const dateRange = React.useMemo(() => {
      const outputStartDate = getOutputDate(startDate, dateFormat);
      const outputEndDate = getOutputDate(endDate, dateFormat);
      let range: null | DateType[] = [outputStartDate, outputEndDate];

      // It's used to trigger the form field error
      if (range.filter((r) => r === null).length === range.length) {
        range = null;
      }

      return range;
    }, [startDate, endDate]);

    React.useEffect(() => {
      if (value && !isEqual(dateRange, value) && !loaded) {
        setStartDate(parseDate(value[0], dateFormat));
        setEndDate(parseDate(value[1], dateFormat));
        setLoaded(true);
      }
    }, [value]);

    React.useEffect(() => {
      if (onChange) {
        onChange(dateRange as DateType);
      }
    }, [dateRange]);

    return (
      <div className={cn(rangeBem(null, { disabled, 'is-open': isOpen }), className)} style={props.style}>
        <ReactDatePicker
          value={value as any}
          {...props}
          title={`${dateRange?.[0] || ''}`}
          {...startProps}
          ref={ref}
          selected={startDate}
          onChange={(date) => setStartDate(date as DateValueType)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={cn(dateBem(null, [size]), startProps?.className)}
          wrapperClassName={cn(dateBem('wrapper'), startProps?.wrapperClassName)}
          popperClassName={cn(dateBem('popper'), startProps?.popperClassName)}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
        />

        <ReactDatePicker
          value={value as any}
          {...props}
          minDate={startDate}
          title={`${dateRange?.[1] || ''}`}
          {...endProps}
          ref={ref}
          selected={endDate}
          onChange={(date) => setEndDate(date as DateValueType)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          className={cn(dateBem(null, [size]), endProps?.className)}
          wrapperClassName={cn(dateBem('wrapper'), endProps?.wrapperClassName)}
          popperClassName={cn(dateBem('popper'), endProps?.popperClassName)}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
);

export default RangePicker;
