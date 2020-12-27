import * as React from 'react';
import DatePicker from 'react-datepicker';
import cn from 'classnames';
import { format, dateTimeFormat } from 'libs/date';
import { Extra, Label } from 'components/atoms';

import { DateState, LimitTimeState } from './Calendar.types';

export { registerLocale } from 'react-datepicker';

export type CalendarType = 'period' | 'date' | 'date-time';

interface Props {
  type: CalendarType;
  placeholder?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  className?: string;
  withTime?: boolean;
  onChange?: (state: { [key: string]: string | null }) => void;
  minDate?: Date;
  locale?: string;
  label?: React.ReactNode;
  extra?: React.ReactNode;
  hasError?: boolean;
  disabled?: boolean;

  from?: any;
  to?: any;
  date?: any;
}

export const Calendar: React.FC<Props> = ({
  type = 'period',
  placeholder = '',
  startPlaceholder = '',
  endPlaceholder = '',
  className,
  withTime,
  onChange,
  minDate,
  locale,
  label,
  extra,
  hasError,
  disabled,
  ...props
}) => {
  const [{ from, to, date }, setDate] = React.useState<DateState>({
    from: null,
    to: null,
    date: null,
  });

  React.useEffect(() => {
    if (onChange && from && (!props.from || (props.from && new Date(props.from).toString() !== from.toString()))) {
      onChange({
        start_date__gte: from ? format(from, withTime ? dateTimeFormat : undefined) : null,
      });
    }
  }, [from]);

  React.useEffect(() => {
    if (onChange && to && (!props.to || (props.to && new Date(props.to).toString() !== to.toString()))) {
      onChange({
        end_date__lte: to ? format(to, withTime ? dateTimeFormat : undefined) : null,
      });
    }
  }, [to]);

  React.useEffect(() => {
    if (onChange) {
      onChange({ date__gte: date ? format(date, type === 'date-time' ? dateTimeFormat : undefined) : null });
    }
  }, [date]);

  React.useEffect(() => {
    setDate((prevState) => {
      const newState: { [key: string]: any } = {};

      if (typeof props.from === 'string' || typeof props.to === 'string') {
        newState.from = props.from ? new Date(props.from) : props.from;
        newState.to = props.to ? new Date(props.to) : props.to;
      }

      if (props.date) {
        newState.date =
          !prevState.date && props.date
            ? new Date(format(props.date, type === 'date-time' ? dateTimeFormat : undefined))
            : prevState.date;
      }

      if (['from', 'to', 'date'].filter((i) => i in newState).length) {
        return { ...prevState, ...newState };
      }

      return prevState;
    });
  }, [props.from, props.to, props.date]);

  const onChangeDate = (value: Date | [Date, Date] | null): boolean | void =>
    !Array.isArray(value) &&
    setDate((prevState) => ({
      ...prevState,
      date:
        value && minDate && minDate > value
          ? new Date(new Date(minDate.setHours(value.getHours())).setMinutes(value.getMinutes()))
          : value,
    }));

  const onChangeFrom = (value: Date | [Date, Date] | null): boolean | void =>
    !Array.isArray(value) && setDate((prevState) => ({ ...prevState, from: value }));

  const onChangeTo = (value: Date | [Date, Date] | null): boolean | void =>
    !Array.isArray(value) && setDate((prevState) => ({ ...prevState, to: value }));

  const limitTime = React.useMemo(
    (): LimitTimeState => ({
      min: new Date(new Date(new Date().setHours(6)).setMinutes(0)),
      max: new Date(new Date(new Date().setHours(21)).setMinutes(0)),
    }),
    [],
  );

  return (
    <div
      className={cn(`ebs-calendar__wrapper`, `ebs-calendar__type-${type}`, className, {
        disabled: disabled,
        'has-error': hasError,
        active: from || to || date,
      })}
    >
      <Label text={label} disabled={disabled} />

      <div className="ebs-calendar__input-wrapper">
        {type === 'period' && (
          <>
            <DatePicker
              showTimeSelect={withTime}
              showYearDropdown
              scrollableYearDropdown
              dateFormat={withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
              minDate={minDate}
              minTime={withTime ? limitTime.min : undefined}
              maxTime={withTime ? limitTime.max : undefined}
              placeholderText={startPlaceholder || withTime ? `yyyy-mm-dd hh:mm` : `yyyy-mm-dd`}
              className={cn(`ebs-calendar`, from && `active`)}
              selected={from}
              onChange={onChangeFrom}
              selectsStart
              startDate={from}
              endDate={to}
              locale={locale}
              timeIntervals={5}
              disabled={disabled}
            />

            <DatePicker
              showTimeSelect={withTime}
              showYearDropdown
              scrollableYearDropdown
              dateFormat={withTime ? `yyyy-MM-dd HH:mm` : `yyyy-MM-dd`}
              minDate={from || minDate}
              minTime={limitTime.min}
              maxTime={limitTime.max}
              placeholderText={endPlaceholder || withTime ? `yyyy-mm-dd hh:mm` : `yyyy-mm-dd`}
              className={cn(`ebs-calendar`, to && `active`)}
              selected={to}
              onChange={onChangeTo}
              selectsEnd
              startDate={from}
              endDate={to}
              locale={locale}
              timeIntervals={5}
              showDisabledMonthNavigation={false}
              disabled={disabled}
            />
          </>
        )}

        {type === 'date' && (
          <DatePicker
            showYearDropdown
            scrollableYearDropdown
            minDate={minDate}
            className={cn(`ebs-calendar`, date && `active`)}
            dateFormat="yyyy-MM-dd"
            placeholderText={placeholder || 'yyyy-mm-dd'}
            selected={date}
            onChange={onChangeDate}
            locale={locale}
            disabled={disabled}
          />
        )}

        {type === 'date-time' && (
          <DatePicker
            showTimeSelect
            showYearDropdown
            scrollableYearDropdown
            minDate={minDate}
            minTime={limitTime.min}
            maxTime={limitTime.max}
            dateFormat="yyyy-MM-dd HH:mm"
            placeholderText={placeholder || 'yyyy-mm-dd hh:mm'}
            className={cn(`ebs-calendar`, date && `active`)}
            selected={date}
            onChange={onChangeDate}
            timeIntervals={5}
            locale={locale}
            showDisabledMonthNavigation={false}
            disabled={disabled}
          />
        )}
      </div>

      <Extra text={extra} status={hasError ? 'danger' : 'text'} disabled={disabled} />
    </div>
  );
};
