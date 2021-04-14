import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { SizeType } from 'types';

type Modify<T, R> = Omit<T, keyof R> & R;
export type DateType = Date | [Date, Date] | string | /* for selectsRange */ null;
export type DateValueType = Date | null | undefined;

export type DatePickerProps = Modify<
  ReactDatePickerProps,
  {
    size?: SizeType;
    value?: any; // Value is used by form field and value can be other than string
    onChange?: (date: DateType, event?: React.SyntheticEvent<HTMLDivElement>) => void;
  }
>;

export type RangePickerProps = {
  style?: React.CSSProperties;
  startProps?: DatePickerProps;
  endProps?: DatePickerProps;
} & DatePickerProps;

export interface DatePickerComposition
  extends React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<ReactDatePicker>> {
  Range: React.ForwardRefExoticComponent<RangePickerProps & React.RefAttributes<ReactDatePicker>>;
  RangeInput: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<ReactDatePicker>>;
}
