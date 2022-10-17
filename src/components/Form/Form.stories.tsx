import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'rc-field-form';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Checkbox, DatePicker, Input, InputPhone, Radio, Select, Textarea } from 'components';
import { Form as _Form, FormComponent as Form } from './Form';

const { Field: FormField, Group: FormGroup } = Form;

export default {
  title: exportStory('Form', 'form'),
  component: _Form,
  subcomponents: { FormField, FormGroup },
} as ComponentMeta<typeof _Form>;

export const Regular: ComponentStory<typeof _Form> = ({ children, ...args }) => {
  const [form] = useForm();

  return (
    <Template>
      <Form form={form} {...args}>
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
          <InputPhone country="md" />
        </Form.Field>

        <button type="submit">Submit</button>
      </Form>
    </Template>
  );
};

export const LabelInValidation: ComponentStory<typeof Form> = ({ children }) => {
  const [form] = useForm();
  return (
    <Template>
      <Form
        form={form}
        validateMessages={{
          // eslint-disable-next-line no-template-curly-in-string
          required: '${label} should not be empty 😡',
        }}
      >
        <Form.Field name="cool-name" label="Cool name" rules={[{ required: true }]} initialValue="Clear me">
          <Input />
        </Form.Field>
        <Form.Field
          name="cool-name"
          label="Override validation label"
          validationLabel="Name 😎"
          rules={[{ required: true }]}
          initialValue="Clear me"
        >
          <Input />
        </Form.Field>
        <button onClick={() => form.setFieldsValue({ 'cool-name': '' })}>clear field</button>
      </Form>
    </Template>
  );
};

Regular.args = {
  type: 'vertical',
  draft: false,
  labelOptions: { col: { size: 2 } },
  controlOptions: { col: { size: 6 } },
};
