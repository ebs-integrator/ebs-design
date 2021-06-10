import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import cn from 'classnames';
import { isEqual } from 'libs';

import { DatePickerProps, DateValueType, DateType } from '../types';
import { getDefaultDateFormat, getOutputDate, parseDate } from '../utils';
import CustomRangeInput from './CustomRangeInput';

const RangeInputPicker = React.forwardRef<ReactDatePicker, DatePickerProps>(
  ({ size = 'medium', value, onChange, ...props }, ref) => {
    const [startDate, setStartDate] = React.useState<DateValueType>();
    const [endDate, setEndDate] = React.useState<DateValueType>();

    const dateFormat = React.useMemo(() => props?.dateFormat || getDefaultDateFormat(props?.showTimeSelect), [
      props.dateFormat,
      props.showTimeSelect,
    ]);

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

    // Handle change for selectsRange
    const handleChange = (dates): void => {
      setStartDate(dates ? dates[0] : null);
      setEndDate(dates ? dates[1] : null);
    };

    React.useEffect(() => {
      if (value && Array.isArray(value) && !isEqual(dateRange, value)) {
        setStartDate(parseDate(value[0], dateFormat));
        setEndDate(parseDate(value[1], dateFormat));
      }
    }, [value]);

    React.useEffect(() => {
      if (onChange) {
        onChange(dateRange as DateType);
      }
    }, [dateRange]);

    return (
      <ReactDatePicker
        ref={ref}
        // FIXME: CloseOnSelect doesn't work properly
        shouldCloseOnSelect={dateRange?.some((r) => r)}
        {...props}
        selectsRange
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        customInput={<CustomRangeInput startDate={startDate} endDate={endDate} dateFormat={dateFormat} />}
        className={cn(`ebs-datepicker ebs-datepicker--${size}`, props?.className)}
        wrapperClassName={cn('ebs-datepicker__wrapper', props?.wrapperClassName)}
        popperClassName={cn('ebs-datepicker__popper', props?.popperClassName)}
      />
    );
  },
);

export default RangeInputPicker;
