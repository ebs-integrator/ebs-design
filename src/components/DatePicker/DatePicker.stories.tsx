import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { DatePickerProps, RangePickerProps } from './types';
import { DatePicker } from './DatePicker';

export default {
  title: exportStory('DatePicker', 'form'),
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

export const Regular: ComponentStory<typeof DatePicker> = (args) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, updateArgs] = useArgs();

  return (
    <Template>
      <DatePicker {...args} onChange={(value) => updateArgs({ value })} />
    </Template>
  );
};

Regular.args = {
  size: 'medium',
  adjustDateOnChange: undefined,
  allowSameDay: undefined,
  ariaLabelClose: '',
  ariaLabelledBy: '',
  autoComplete: undefined,
  autoFocus: true,
  calendarClassName: '',
  chooseDayAriaLabelPrefix: '',
  className: '',
  clearButtonTitle: undefined,
  closeOnScroll: undefined,
  customInput: undefined,
  customInputRef: undefined,
  customTimeInput: undefined,
  dateFormat: undefined,
  dateFormatCalendar: undefined,
  disabledDayAriaLabelPrefix: undefined,
  disabled: undefined,
  disabledKeyboardNavigation: undefined,
  dropdownMode: 'scroll',
  endDate: null,
  excludeDates: [],
  excludeTimes: [],
  fixedHeight: undefined,
  forceShowMonthNavigation: true,
  highlightDates: [],
  id: undefined,
  includeDates: [],
  includeTimes: [],
  injectTimes: [],
  inline: false,
  isClearable: true,
  focusSelectedMonth: undefined,
  locale: 'en',
  maxDate: undefined,
  maxTime: undefined,
  minDate: undefined,
  minTime: undefined,
  monthsShown: undefined,
  name: undefined,
  nextMonthButtonLabel: undefined,
  nextYearButtonLabel: undefined,
  open: undefined,
  openToDate: undefined,
  peekNextMonth: undefined,
  placeholderText: 'Date field',
  popperClassName: '',
  popperModifiers: undefined,
  popperPlacement: undefined,
  popperProps: {},
  preventOpenOnFocus: undefined,
  previousMonthButtonLabel: undefined,
  previousYearButtonLabel: undefined,
  readOnly: undefined,
  required: undefined,
  scrollableMonthYearDropdown: undefined,
  scrollableYearDropdown: undefined,
  selected: null,
  selectsEnd: undefined,
  selectsStart: undefined,
  selectsRange: undefined,
  shouldCloseOnSelect: undefined,
  showDisabledMonthNavigation: undefined,
  showFullMonthYearPicker: undefined,
  showMonthDropdown: undefined,
  showMonthYearDropdown: undefined,
  showMonthYearPicker: undefined,
  showPopperArrow: undefined,
  showPreviousMonths: undefined,
  showQuarterYearPicker: undefined,
  showTimeInput: undefined,
  showTimeSelect: undefined,
  showTimeSelectOnly: undefined,
  showTwoColumnMonthYearPicker: undefined,
  showWeekNumbers: undefined,
  showYearDropdown: true,
  showYearPicker: undefined,
  startDate: null,
  startOpen: undefined,
  strictParsing: undefined,
  tabIndex: undefined,
  timeCaption: undefined,
  timeFormat: undefined,
  timeInputLabel: undefined,
  timeIntervals: undefined,
  title: undefined,
  todayButton: undefined,
  useShortMonthInDropdown: undefined,
  useWeekdaysShort: undefined,
  weekAriaLabelPrefix: undefined,
  value: undefined,
  weekLabel: undefined,
  withPortal: undefined,
  portalId: undefined,
  wrapperClassName: '',
  yearDropdownItemNumber: undefined,
  excludeScrollbar: undefined,
  enableTabLoop: undefined,
  yearItemNumber: undefined,
};

export const RangeInput: React.FC<DatePickerProps> & { args: DatePickerProps } = ({ children, ...props }) => (
  <Template>
    <DatePicker.RangeInput {...props} />
  </Template>
);

RangeInput.args = Regular.args;

export const Range: React.FC<RangePickerProps> & { args: RangePickerProps } = ({ children, ...props }) => (
  <Template>
    <DatePicker.Range {...props} />
  </Template>
);

Range.args = Regular.args;
