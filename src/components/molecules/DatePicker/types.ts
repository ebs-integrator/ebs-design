import type { ReactDatePickerProps } from 'react-datepicker';
import { SizeType } from 'types';

export type DateType = Date | [Date, Date] | string | /* for selectsRange */ null;
export type DateValueType = Date | null | undefined;

export interface DatePickerProps extends Partial<ReactDatePickerProps> {
  // Value is used by form field and value can be other than string
  value?: any;
  size?: SizeType;
  onChange?: (date: DateType, event?: React.SyntheticEvent<HTMLDivElement>) => void;
}
export interface RangePickerProps extends DatePickerProps {
  style?: React.CSSProperties;
  startProps?: DatePickerProps;
  endProps?: DatePickerProps;
}

export interface DatePickerComposition
  extends React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLElement>> {
  Range: React.FC<RangePickerProps>;
  RangeInput: React.FC<DatePickerProps>;
}
