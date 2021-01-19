import * as React from 'react';
import { Input } from 'components/atoms';

import { Form, FormItem, FormItems } from './Form';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Form', 'organisms'),
  component: Form,
  subcomponents: { FormItem, FormItems },
};

export const Regular = (): React.ReactNode => (
  <Form>
    <FormItem name="field" label="Text">
      <Input />
    </FormItem>

    <FormItem name="field" label="Text" extra="This field is required">
      <Input />
    </FormItem>

    <FormItems>
      <FormItem name="field" label="Text">
        <Input />
      </FormItem>

      <FormItem name="field" label="Text" extra="This field is required">
        <Input />
      </FormItem>
    </FormItems>
  </Form>
);

export const Inline = (): React.ReactNode => (
  <Form>
    <FormItem name="field" label="Text">
      <Input />
    </FormItem>

    <FormItem name="field" label="Text" extra="This field is required">
      <Input />
    </FormItem>

    <FormItems>
      <FormItem name="field" label="Text">
        <Input />
      </FormItem>

      <FormItem name="field" label="Text" extra="This field is required">
        <Input />
      </FormItem>
    </FormItems>
  </Form>
);
