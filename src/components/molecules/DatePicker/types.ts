export interface DateState {
  from: Date | null;
  to: Date | null;
  date: Date | null;
}

export interface LimitTimeState {
  min: Date | undefined;
  max: Date | undefined;
}

export type CalendarSize = 'small' | 'medium' | 'large';
export type CalendarType = 'period' | 'date' | 'date-time';