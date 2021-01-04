import * as React from 'react';
import { Input } from 'components/organisms';
import { Form, FormItem, FormItems } from './Form';

export default {
  title: 'Form',
  component: Form,
};

export const Regular = (): React.ReactNode => (
  <Form>
    <FormItem label="Text">
      <Input />
    </FormItem>

    <FormItem label="Text" extra="This field is required">
      <Input />
    </FormItem>

    <FormItems>
      <FormItem label="Text">
        <Input />
      </FormItem>

      <FormItem label="Text" extra="This field is required">
        <Input />
      </FormItem>
    </FormItems>
  </Form>
);

export const Inline = (): React.ReactNode => (
  <Form type="inline">
    <FormItem label="Text">
      <Input />
    </FormItem>

    <FormItem label="Text" extra="This field is required">
      <Input />
    </FormItem>

    <FormItems>
      <FormItem label="Text">
        <Input />
      </FormItem>

      <FormItem label="Text" extra="This field is required">
        <Input />
      </FormItem>
    </FormItems>
  </Form>
);
