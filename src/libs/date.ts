// eslint-disable-next-line import/default
import dayjs from 'dayjs';

export const today = dayjs();
export const dateFormat = 'YYYY-MM-DD';
export const dateTimeFormat = 'YYYY-MM-DD HH:mm';

export const format = (date?: Date | string, format?: string): string => dayjs(date).format(format || dateFormat);

export const toISO = (date: Date | string): string => new Date(date).toISOString();
export const getYear = (date: Date | string): string => dayjs(date).format('YYYY');
export const getMonth = (date: Date | string): string => dayjs(date).format('MMM');
export const getFullMonth = (date: Date | string): string => dayjs(date).format('MMMM');
export const getDay = (date: Date | string): string => dayjs(date).format('D');
export const getTime = (date: Date | string): string => dayjs(date).format('HH:mm');

export const isAfter = (date: Date | string): boolean => dayjs().isAfter(date);
export const isBefore = (date: Date | string): boolean => dayjs().isBefore(date);
export const add = (count: number): dayjs.Dayjs => dayjs().add(count, 'day');

export const tomorrow = dayjs().add(1, 'day');
export const yesterday = dayjs().subtract(1, 'day');
