import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import cn from 'classnames';
import { RangePickerProps, DateValueType, DateType } from './types';
import { getDefaultDateFormat, getOutputDate, parseDate } from './utils';

const RangePicker = React.forwardRef<ReactDatePicker, RangePickerProps>(
  ({ size = 'medium', startProps, endProps, ...props }, ref) => {
    const [startDate, setStartDate] = React.useState<DateValueType>(undefined);
    const [endDate, setEndDate] = React.useState<DateValueType>(undefined);
    const [isOpen, setIsOpen] = React.useState(false);

    const dateFormat = React.useMemo(() => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect), [
      props.dateFormat,
      props.showTimeSelect,
    ]);

    React.useEffect(() => {
      if (props.value && Array.isArray(props.value)) {
        if (!startDate || !endDate) {
          setStartDate(parseDate(props.value[0], dateFormat));
          setEndDate(parseDate(props.value[1], dateFormat));
        }
      }
    }, [props]);

    React.useEffect(() => {
      const outputStartDate = getOutputDate(startDate, dateFormat);
      const outputEndDate = getOutputDate(endDate, dateFormat);
      const range = [outputStartDate, outputEndDate];

      if (props.onChange) {
        props.onChange(range as DateType);
      }
    }, [startDate, endDate]);

    return (
      <div
        className={cn('ebs-rangepicker', props.className, { 'is-opened': isOpen, disabled: props.disabled })}
        style={props.style}
      >
        <ReactDatePicker
          disabled={props.disabled}
          {...startProps}
          ref={ref}
          selected={startDate}
          onChange={(date) => setStartDate(date as DateValueType)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className={cn(`ebs-datepicker ebs-datepicker--${size}`, startProps?.className)}
          wrapperClassName={cn('ebs-datepicker__wrapper', startProps?.wrapperClassName)}
          popperClassName={cn('ebs-datepicker__popper', startProps?.popperClassName)}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
        />

        <ReactDatePicker
          disabled={props.disabled}
          {...endProps}
          ref={ref}
          selected={endDate}
          onChange={(date) => setEndDate(date as DateValueType)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className={cn(`ebs-datepicker ebs-datepicker--${size}`, endProps?.className)}
          wrapperClassName={cn('ebs-datepicker__wrapper', endProps?.wrapperClassName)}
          popperClassName={cn('ebs-datepicker__popper', endProps?.popperClassName)}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
);

export default RangePicker;
