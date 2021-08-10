import * as React from 'react';
import SizeSwitcher from 'components/SizeSwitcher';

import { DatePicker } from './DatePicker';
import { exportStory } from '../../../libs';
import { Button } from '../../atoms';
import { Form, useForm } from '../../organisms/Form';
import { SizeType } from 'types';

export default {
  title: exportStory('DatePicker', 'molecules'),
  component: DatePicker,
};

export const Regular = (): React.ReactElement => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [range, setRange] = React.useState();

  return (
    <SizeSwitcher>
      {(size) => (
        <div className="storybook-rows">
          <div className="storybook-row" style={{ maxWidth: 250 }}>
            <div className="storybook-header">DatePicker</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Date</div>
              <DatePicker
                size={size as SizeType}
                placeholderText="Date placeholder"
                value={date}
                onChange={(v) => setDate(v as string)}
                isClearable
                dateFormat="dd-MM-yyyy"
              />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Time</div>
              <DatePicker
                size={size as SizeType}
                showTimeSelect
                placeholderText="Time placeholder"
                dateFormat="yy/MMMM/d HH"
                value={time}
                onChange={(v) => setTime(v as string)}
              />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Range</div>
              <DatePicker.Range
                size={size as SizeType}
                dateFormat="MM-dd-yyyy"
                value={range}
                onChange={(v) => setRange(v as any)}
              />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Range Input</div>
              <DatePicker.RangeInput
                size={size as SizeType}
                dateFormat="MM-dd-yyyy"
                value={range}
                onChange={(v) => setRange(v as any)}
              />
            </div>
          </div>
        </div>
      )}
    </SizeSwitcher>
  );
};

export const WithForm = (): React.ReactElement => {
  const [form] = useForm();

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <div className="storybook-rows">
          <div className="storybook-row">
            <Form
              form={form}
              initialValues={{
                date: '10/10/2025',
                time: '15-11-2020 11:30',
                range: ['09-10-2029', '10-10-2029'],
              }}
              onFinish={handleChange}
            >
              <div className="storybook-header">DatePicker</div>

              <div className="storybook-row-item">
                <div className="storybook-label">Date</div>
                <Form.Field name="date" label="Date" rules={[{ required: true }]}>
                  <DatePicker size={size as SizeType} placeholderText="Birthday" isClearable dateFormat="dd-MM-yyyy" />
                </Form.Field>
              </div>

              <div className="storybook-row-item">
                <div className="storybook-label">Time</div>
                <Form.Field name="time" label="Time" rules={[{ required: true }]}>
                  <DatePicker
                    size={size as SizeType}
                    showTimeSelect
                    placeholderText="Birthday"
                    isClearable
                    dateFormat="yy/MMMM/d HH"
                  />
                </Form.Field>
              </div>

              <div className="storybook-row-item">
                <div className="storybook-label">Range</div>
                <Form.Field name="range" label="Range" rules={[{ required: true }]}>
                  <DatePicker.Range size={size as SizeType} dateFormat="MM-dd-yyyy" isClearable />
                </Form.Field>
              </div>

              <Button submit type="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </SizeSwitcher>
  );
};

export const Range = (): React.ReactElement => {
  const [value, setValue] = React.useState();

  const handleChange = (date): void => {
    setValue(date);
  };

  return (
    <SizeSwitcher>
      {(size) => (
        <div className="storybook-rows">
          <div className="storybook-row">
            <div className="storybook-header">Calendar</div>

            <div className="storybook-row-item">
              <div className="storybook-label">Range</div>
              <DatePicker.Range size={size as SizeType} />
            </div>

            <div className="storybook-row-item">
              <div className="storybook-label">Range Input</div>
              <DatePicker.RangeInput
                size={size as SizeType}
                onChange={handleChange}
                value={value}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
        </div>
      )}
    </SizeSwitcher>
  );
};
