import * as React from 'react';
import { Input } from 'components/atoms';

import { Form, FormItem, FormItems } from './Form';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Form', 'organisms'),
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
