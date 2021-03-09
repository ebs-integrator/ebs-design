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

  const handleChange = (date) => {
    setV(date);
    console.log('date :>> ', date);
  };

  return (
    <div className="storybook-rows">
      <div className="storybook-row">
        <Form form={form}>
          <div className="storybook-header">Calendar</div>

          <div className="storybook-row-item">
            <div className="storybook-label">Inactive</div>
            <Form.Field name="test-cal" label="Test Calendar" rules={[{ required: true }]}>
              <DatePicker className="test-className" />
            </Form.Field>
          </div>

          <div className="storybook-row-item">
            <div className="storybook-label">Active</div>
            <DatePicker
              onChange={handleChange}
              value={v}
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={50}
              showYearPicker
            />
          </div>

          <button type="submit">submit</button>
        </Form>
      </div>
    </div>
  );
};

// export const Period = (): React.ReactElement => (
//   <div className="storybook-rows">
//     <div className="storybook-row">
//       <div className="storybook-header">Calendar</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar type="period" from="2020-10-11" to="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar hasError type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar disabled type="period" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" type="period" from="2020-10-11" to="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" hasError type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" disabled type="period" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar extra="Extra" type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar extra="Extra" type="period" from="2020-10-11" to="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar extra="Extra" hasError type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar extra="Extra" disabled type="period" />
//       </div>
//     </div>

//     <div className="storybook-row">
//       <div className="storybook-header">Calendar + Label & Extra</div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Inactive</div>
//         <Calendar label="Label" extra="Extra" type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Active</div>
//         <Calendar label="Label" extra="Extra" type="period" from="2020-10-11" to="2020-12-11" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Error</div>
//         <Calendar label="Label" extra="Extra" hasError type="period" />
//       </div>

//       <div className="storybook-row-item">
//         <div className="storybook-label">Disabled</div>
//         <Calendar label="Label" extra="Extra" disabled type="period" />
//       </div>
//     </div>
//   </div>
// );

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
