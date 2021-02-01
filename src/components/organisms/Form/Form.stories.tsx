import * as React from 'react';
import { Input, Radio } from 'components/atoms';
import { Textarea, Checkbox, InputSelect, Calendar, InputSearch, InputPhone } from 'components/molecules';

import { Form } from './Form';
import { useForm } from './index';
import { exportStory } from '../../../libs';
import { Field } from 'rc-field-form';
import { Filled } from 'components/atoms/Label/Label.stories';

const { Field: FormField, Group: FormGroup } = Form;

export default {
  title: exportStory('Form', 'organisms'),
  subcomponents: { Form, FormField, FormGroup },
};

const tmpField = {
  touched: false,
  validating: false,
  errors: ['This is my custom error', 'My second custom error', 'And third big custom error'],
  name: 'firstName',
  value: 'nothing',
};

export const Regular = (): React.ReactNode => {
  const [form] = useForm();

  const handleFinish = (...params: any) => {
    console.log('finish :>> ', params);
    form.setFields([
      tmpField,
      {
        errors: ['Aged is my custom error'],
        name: 'age',
      },
    ]);
    form.getFieldError('firstName');
    console.log('object :>> ', form.getFieldValue('firstName'));
  };

  const handleFieldsChange = (errorInfo) => {
    console.log('field change :>> ', errorInfo);
  };

  return (
    <Form
      form={form}
      type="horizontal"
      onFinish={handleFinish}
      onFinishFailed={handleFieldsChange}
      fieldRow={{ gx: 1 }}
    >
      <Field>
        <Field.Label>First Name</Field.Label>
        <Field.Control name="firstName" initialValue="blue">
          <Input />
        </Field.Control>
        <Field.Extra>This is my extra</Field.Extra>
      </Field>


      <Form.Field.Label name="firstName" label="First Name" initialValue={'blue'} rules={[{ required: true }]}>
        <Input />
      </Form.Field>

      <Form.Field name="lastName" label="Last Name" extra="This field is required">
        <Input type="email" />
      </Form.Field>

      <Form.Field name="bio" label="Biography" extra="This field is required">
        <Textarea />
      </Form.Field>

      {/* <Form.Field name="age" label="Age" extra="This field is required">
        <InputSelect
          options={[
            { value: 10, text: '10' },
            { value: 15, text: '15' },
            { value: 20, text: '20' },
            { value: 'normal', text: 'Normal age' },
          ]}
        />
      </Form.Field> */}

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
        <Calendar type="date" />
      </Form.Field>

      {/* <Form.Field name="phone" label="Phone Nr:" extra="This field is required">
        <InputPhone />
      </Form.Field> */}

      <button type="submit">Submit</button>
    </Form>
  );
};

export const Inline = (): React.ReactNode => (
  <Form>
    <Form.Field name="field" label="Text">
      <Input />
    </Form.Field>

    <Form.Field name="field" label="Text" extra="This field is required">
      <Input />
    </Form.Field>

    <Form.Group>
      <Form.Field name="field" label="Text">
        <Input />
      </Form.Field>

      <Form.Field name="field" label="Text" extra="This field is required">
        <Input />
      </Form.Field>
    </Form.Group>
  </Form>
);
