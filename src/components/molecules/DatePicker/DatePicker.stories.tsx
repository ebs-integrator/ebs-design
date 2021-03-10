import * as React from 'react';

import { DatePicker } from './DatePicker';
import { exportStory } from '../../../libs';
import { Form, useForm } from '../../organisms/Form';

export default {
  title: exportStory('DatePicker', 'molecules'),
  component: DatePicker,
};

export const WithForm = (): React.ReactElement => {
  const [form] = useForm();
  const [v, setV] = React.useState();

  const handleChange = (values): void => {
    setV(values);
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
          <div className="storybook-header">Calendar</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Date</div>
            <Form.Field name="date" label="Test Calendar" rules={[{ required: true }]}>
              <DatePicker placeholderText="Birthday" isClearable dateFormat="dd-MM-yyyy" />
            </Form.Field>
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Time</div>
            <Form.Field name="time" label="Test Calendar" rules={[{ required: true }]}>
              <DatePicker showTimeSelect placeholderText="Birthday" dateFormat="yy/MMMM/d HH" />
            </Form.Field>
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Range</div>
            <Form.Field name="range" label="Test Calendar" rules={[{ required: true }]}>
              <DatePicker.Range dateFormat="MM-dd-yyyy" className="range-test-className" />
            </Form.Field>
          </div>

          <button type="submit">submit</button>
        </Form>

        <div className="storybook-row-item">
          <div className="storybook-label">Not in form</div>
          <DatePicker dateFormat="MM-dd-yyyy" value={v} onChange={handleChange} className="range-test-className" />
        </div>
      </div>
    </div>
  );
};

export const Range = (): React.ReactElement => (
  <div className="storybook-rows">
    <div className="storybook-row">
      <div className="storybook-header">Calendar</div>

      <div className="storybook-row-item">
        <div className="storybook-label">Inactive</div>
        <DatePicker.Range />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Active</div>
        <DatePicker.Range value={['2020-10-11', '2020-12-11']} dateFormat="yyyy-MM-dd" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Error</div>
        <DatePicker.Range className="has-error" />
      </div>

      <div className="storybook-row-item">
        <div className="storybook-label">Disabled</div>
        <DatePicker.Range disabled />
      </div>
    </div>
  </div>
);

// export const Date = (): React.ReactElement => (
//   <div className="storybook-rows">
//     <div className="storybook-row">
//       <div className="storybook-header">Calendar</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar type="date" date="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar hasError type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar disabled type="date" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" type="date" date="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" hasError type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" disabled type="date" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar extra="Extra" type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar extra="Extra" type="date" date="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar extra="Extra" hasError type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar extra="Extra" disabled type="date" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label & Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" extra="Extra" type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" extra="Extra" type="date" date="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" extra="Extra" hasError type="date" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" extra="Extra" disabled type="date" />
//       </div>
//     </div>
//   </div>
// );

// export const DateTime = (): React.ReactElement => (
//   <div className="storybook-rows">
//     <div className="storybook-row">
//       <div className="storybook-header">Calendar</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar type="date-time" date="2020-12-11 11:30" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar hasError type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar disabled type="date-time" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" type="date-time" date="2020-12-11 11:30" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" hasError type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" disabled type="date-time" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar extra="Extra" type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar extra="Extra" type="date-time" date="2020-12-11 11:30" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar extra="Extra" hasError type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar extra="Extra" disabled type="date-time" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label & Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" extra="Extra" type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" extra="Extra" type="date-time" date="2020-12-11 11:30" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" extra="Extra" hasError type="date-time" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" extra="Extra" disabled type="date-time" />
//       </div>
//     </div>
//   </div>
// );
