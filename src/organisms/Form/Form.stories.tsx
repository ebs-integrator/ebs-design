import * as React from 'react';
import { Input } from 'organisms';
import { Form, FormItem, FormItems } from './Form';

export default {
  title: 'Form',
  component: Form,
};

export const regular = (): React.ReactNode => (
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

export const inline = (): React.ReactNode => (
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
