import * as React from 'react';

import { DatePicker } from './DatePicker';
import { exportStory } from '../../../libs';
import { Button } from '../../atoms';
import { Form, useForm } from '../../organisms/Form';

export default {
  title: exportStory('DatePicker', 'molecules'),
  component: DatePicker,
};

export const Regular = (): React.ReactElement => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [range, setRange] = React.useState();

  return (
    <div className="storybook-rows">
      <div className="storybook-row" style={{ maxWidth: 250 }}>
        <div className="storybook-header">DatePicker</div>

        <div className="storybook-row-item">
          <div className="storybook-label">Date</div>
          <DatePicker
            placeholderText="Date placeholder"
            value={date}
            onChange={(v) => setDate(v as string)}
            isClearable
            dateFormat="dd-MM-YYYY"
          />
        </div>

        <div className="storybook-row-item">
          <div className="storybook-label">Time</div>
          <DatePicker
            showTimeSelect
            placeholderText="Time placeholder"
            dateFormat="YY/MMMM/d HH"
            value={time}
            onChange={(v) => setTime(v as string)}
          />
        </div>

        <div className="storybook-row-item">
          <div className="storybook-label">Range</div>
          <DatePicker.Range dateFormat="MM-dd-YYYY" value={range} onChange={(v) => setRange(v as any)} />
        </div>

        <div className="storybook-row-item">
          <div className="storybook-label">Range Input</div>
          <DatePicker.RangeInput dateFormat="MM-dd-YYYY" value={range} onChange={(v) => setRange(v as any)} />
        </div>
      </div>
    </div>
  );
};

export const WithForm = (): React.ReactElement => {
  const [form] = useForm();

  const handleChange = (values): void => {
    console.log('values :>> ', values);
  };

  return (
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
              <DatePicker placeholderText="Birthday" isClearable dateFormat="dd-MM-YYYY" />
            </Form.Field>
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Time</div>
            <Form.Field name="time" label="Time" rules={[{ required: true }]}>
              <DatePicker showTimeSelect placeholderText="Birthday" isClearable dateFormat="YY/MMMM/d HH" />
            </Form.Field>
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Range</div>
            <Form.Field name="range" label="Range" rules={[{ required: true }]}>
              <DatePicker.Range dateFormat="MM-dd-YYYY" isClearable />
            </Form.Field>
          </div>

          <Button submit type="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export const Range = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Calendar</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Range</div>
        <DatePicker.Range />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Range Input</div>
        <DatePicker.RangeInput size="small" value={['2020-10-11', '2020-12-11']} dateFormat="YYYY-MM-dd" />
      </div>
    </div>
  </div>
);
