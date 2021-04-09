import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import { DateType } from './types';

export const defaultDateFormat = 'yyyy-MM-dd';
export const defaultTimeFormat = 'HH:mm';

export const getDefaultDateFormat = (showTime?: boolean): string =>
  showTime ? `${defaultDateFormat} ${defaultTimeFormat}` : defaultDateFormat;

export const parseDate = (value, dateFormat): Date | undefined => {
  if (value && isValid(value)) {
    return value;
  }

  const d = typeof value === 'string' ? parse(value, dateFormat, new Date()) : undefined;

  return isValid(d) ? d : undefined;
};

export const getOutputDate = (date, dateFormat): DateType => {
  return date && !Array.isArray(dateFormat) ? format(date, dateFormat) : date;
};
