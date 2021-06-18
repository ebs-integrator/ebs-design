import * as React from 'react';
import { Input, Radio } from 'components/atoms';
import { Textarea, Checkbox, Select, DatePicker, InputPhone } from 'components/molecules';

import { Form } from './Form';
import { useForm } from './index';
import { exportStory } from '../../../libs';

const { Field: FormField, Group: FormGroup } = Form;

export default {
  title: exportStory('Form', 'organisms'),
  subcomponents: { Form, FormField, FormGroup },
};

export const Regular = (): React.ReactNode => {
  const [form] = useForm();

  return (
    <Form form={form} type="horizontal" labelOptions={{ col: { size: 2 } }} controlOptions={{ col: { size: 6 } }}>
      <Form.Field name="firstName" label="First Name" initialValue={'blue'} rules={[{ required: true }]}>
        <Input size="small" />
      </Form.Field>

      <Form.Field name="lastName" label="Last Name" extra="This field is required" rules={[{ required: true }]}>
        <Input type="email" />
      </Form.Field>

      <Form.Field name="bio" label="Biography" extra="This field is required">
        <Textarea />
      </Form.Field>

      <Form.Field name="age" label="Age" extra="This field is required" rules={[{ required: true }]}>
        <Select
          options={[
            { value: '2%', text: '0-60' },
            { value: 3, text: '60-90' },
            { value: 4, text: '90-120' },
            { value: 'normal', text: 'Normal age' },
          ]}
        />
      </Form.Field>

      <Form.Field name="sex" label="Sex" extra="This field is required">
        <Radio
          options={[
            { text: 'Male', value: 'm' },
            { text: 'Female', value: 'f' },
          ]}
        />
      </Form.Field>

      <Form.Field name="education" label="Education" extra="This field is required">
        <Checkbox text="BAC" />
      </Form.Field>

      <Form.Field name="birthday" label="Birthday" extra="This field is required">
        <DatePicker />
      </Form.Field>

      <Form.Field name="phone" label="Phone Nr:" extra="This field is required">
        <InputPhone />
      </Form.Field>

      <button type="submit">Submit</button>
    </Form>
  );
};

export const Vertical = (): React.ReactNode => (
  <Form>
    <Form.Field name="field1" label="Text">
      <Input />
    </Form.Field>

    <Form.Field name="field2" label="Text" extra="This field is required">
      <Input />
    </Form.Field>

    <Form.Field name="field3" label="Text">
      <Input />
    </Form.Field>

    <Form.Field name="field4" label="Text" extra="This field is required">
      <Input />
    </Form.Field>
  </Form>
);
