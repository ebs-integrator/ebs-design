import type { ReactDatePickerProps } from 'react-datepicker';
import { SizeType } from 'types';

export type DateType = Date | [Date, Date] | string | /* for selectsRange */ null;
export type DateValueType = Date | null | undefined;

export interface DataPickerProps extends Partial<ReactDatePickerProps> {
  size?: SizeType;
  onChange?: (date: DateType, event?: React.SyntheticEvent<HTMLDivElement>) => void;
}
export interface RangePickerProps extends DataPickerProps {
  style?: React.CSSProperties;
  startProps?: DataPickerProps;
  endProps?: DataPickerProps;
  value?: any;
}

export interface DatePickerComposition
  extends React.ForwardRefExoticComponent<DataPickerProps & React.RefAttributes<HTMLElement>> {
  Range: React.FC<RangePickerProps>;
}
