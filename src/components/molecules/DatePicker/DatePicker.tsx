import * as React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import cn from 'classnames';
import { format, dateTimeFormat } from 'libs/date';
import { Extra, Label } from 'components/atoms';
import { GenericObject } from 'types';

import { DateState, LimitTimeState, CalendarSize, CalendarType } from './types';

export { registerLocale } from 'react-datepicker';

type ValueType = Date | null | undefined;

interface DataPickerProps extends Partial<ReactDatePickerProps> {
  size?: CalendarSize;
}

export const DatePicker = React.forwardRef<ReactDatePicker, DataPickerProps>(
  (
    {
      // type = 'period',
      // placeholder = '',
      // startPlaceholder = '',
      // endPlaceholder = '',
      // iconAlign = 'right',
      size = 'medium',
      // className,
      // withTime,
      // onChange,
      // minDate,
      // locale,
      // label,
      // extra,
      // hasError,
      // disabled,
      ...props
    },
    ref,
  ) => {
    console.log('props :>> ', props);

    const handleChange = (date, event) => {
      if (props.onChange) {
        props.onChange(date, event);
      }
      console.log('date :>> ', date);
    };

    return (
      <ReactDatePicker
        {...props}
        ref={ref}
        onChange={handleChange}
        className={cn(`ebs-datepicker ebs-datepicker--${size}`, props.className)}
        selected={props?.value as ValueType}
        wrapperClassName={cn('ebs-datepicker__wrapper', props.wrapperClassName)}
        // showYearDropdown
        // scrollableYearDropdown
        // minDate={minDate}
        // locale={locale}
        // disabled={disabled}
        // className={cn(`ebs-calendar ebs-calendar--${size}`, { active: date })}
        // placeholderText={placeholder || withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
        // selected={date}
        // onChange={onChangeDate}
      />
    );

    // const [{ from, to, date }, setDate] = React.useState<DateState>({
    //   from: null,
    //   to: null,
    //   date: null,
    // });

    // // Period type
    // React.useEffect(() => {
    //   if (onChange && from && (!props.from || (props.from && new Date(props.from).toString() !== from.toString()))) {
    //     const startDate = from ? format(from, withTime ? dateTimeFormat : undefined) : undefined;

    //     onChange(startDate);
    //   }
    // }, [from]);

    // React.useEffect(() => {
    //   if (onChange && to && (!props.to || (props.to && new Date(props.to).toString() !== to.toString()))) {
    //     const endDate = to ? format(to, withTime ? dateTimeFormat : undefined) : undefined;

    //     onChange(endDate);
    //   }
    // }, [to]);

    // React.useEffect(() => {
    //   if (onChange) {
    //     const startDate = from ? format(from, withTime ? dateTimeFormat : undefined) : undefined;
    //     const endDate = to ? format(to, withTime ? dateTimeFormat : undefined) : undefined;

    //     onChange([startDate, endDate]);
    //   }
    // }, [from, to]);

    // // DateTime type
    // React.useEffect(() => {
    //   if (onChange) {
    //     const dateTime = date ? format(date, type === 'date-time' ? dateTimeFormat : undefined) : undefined;

    //     onChange(dateTime);
    //   }
    // }, [date]);

    // React.useEffect(() => {
    //   setDate((prevState) => {
    //     const newState: GenericObject = {};

    //     if (typeof props.from === 'string' || typeof props.to === 'string') {
    //       newState.from = props.from ? new Date(props.from) : props.from;
    //       newState.to = props.to ? new Date(props.to) : props.to;
    //     }

    //     if (props.date) {
    //       newState.date =
    //         !prevState.date && props.date
    //           ? new Date(format(props.date, type === 'date-time' ? dateTimeFormat : undefined))
    //           : prevState.date;
    //     }

    //     if (['from', 'to', 'date'].filter((i) => i in newState).length) {
    //       return { ...prevState, ...newState };
    //     }

    //     return prevState;
    //   });
    // }, [props.from, props.to, props.date]);

    // const onChangeDate = (value: Date | [Date, Date] | null): boolean | void =>
    //   !Array.isArray(value) &&
    //   setDate((prevState) => ({
    //     ...prevState,
    //     date:
    //       value && minDate && minDate > value
    //         ? new Date(new Date(minDate.setHours(value.getHours())).setMinutes(value.getMinutes()))
    //         : value,
    //   }));

    // const onChangeFrom = (value: Date | [Date, Date] | null): boolean | void =>
    //   !Array.isArray(value) && setDate((prevState) => ({ ...prevState, from: value }));

    // const onChangeTo = (value: Date | [Date, Date] | null): boolean | void =>
    //   !Array.isArray(value) && setDate((prevState) => ({ ...prevState, to: value }));

    // const limitTime = React.useMemo(
    //   (): LimitTimeState => ({
    //     min: new Date(new Date(new Date().setHours(6)).setMinutes(0)),
    //     max: new Date(new Date(new Date().setHours(21)).setMinutes(0)),
    //   }),
    //   [],
    // );

    // return (
    //   <div
    //     className={cn(`ebs-calendar__wrapper`, `ebs-calendar--${type}`, className, {
    //       'ebs-calendar--left': iconAlign === 'left',
    //       disabled: disabled,
    //       'has-error': hasError,
    //       active: from || to || date,
    //     })}
    //   >
    //     <Label text={label} disabled={disabled} />

    //     <div className="ebs-calendar__input-wrapper">
    //       {type === 'period' && (
    //         <>
    //           <ReactDatePicker
    //             ref={ref}
    //             showTimeSelect={withTime}
    //             showYearDropdown
    //             scrollableYearDropdown
    //             dateFormat={withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //             placeholderText={startPlaceholder || withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //             className={cn(`ebs-calendar ebs-calendar--${size}`, { active: from })}
    //             selected={from}
    //             onChange={onChangeFrom}
    //             selectsStart
    //             startDate={from}
    //             endDate={to}
    //             locale={locale}
    //             timeIntervals={5}
    //             disabled={disabled}
    //           />

    //           <ReactDatePicker
    //             ref={ref}
    //             showTimeSelect={withTime}
    //             showYearDropdown
    //             scrollableYearDropdown
    //             dateFormat={withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //             minDate={from || minDate}
    //             minTime={limitTime.min}
    //             maxTime={limitTime.max}
    //             placeholderText={endPlaceholder || withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //             className={cn(`ebs-calendar ebs-calendar--${size}`, { active: to })}
    //             selected={to}
    //             onChange={onChangeTo}
    //             selectsEnd
    //             startDate={from}
    //             endDate={to}
    //             locale={locale}
    //             timeIntervals={5}
    //             showDisabledMonthNavigation={false}
    //             disabled={disabled}
    //           />
    //         </>
    //       )}

    //       {type === 'date' && (
    //         <ReactDatePicker
    //           ref={ref}
    //           showYearDropdown
    //           scrollableYearDropdown
    //           minDate={minDate}
    //           className={cn(`ebs-calendar ebs-calendar--${size}`, { active: date })}
    //           placeholderText={placeholder || withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //           selected={date}
    //           onChange={onChangeDate}
    //           locale={locale}
    //           disabled={disabled}
    //         />
    //       )}

    //       {type === 'date-time' && (
    //         <ReactDatePicker
    //           ref={ref}
    //           showTimeSelect
    //           showYearDropdown
    //           scrollableYearDropdown
    //           minDate={minDate}
    //           minTime={limitTime.min}
    //           maxTime={limitTime.max}
    //           placeholderText={placeholder || withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
    //           className={cn(`ebs-calendar ebs-calendar--${size}`, { active: date })}
    //           selected={date}
    //           onChange={onChangeDate}
    //           timeIntervals={5}
    //           locale={locale}
    //           showDisabledMonthNavigation={false}
    //           disabled={disabled}
    //         />
    //       )}
    //     </div>

    //     <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
    //   </div>
    // );
  },
);
