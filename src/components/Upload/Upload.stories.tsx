import * as React from 'react';
import { useForm } from 'rc-field-form';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Button, Form } from 'components';
import { Template } from 'components/storybook';
import { Upload } from './Upload';

export default {
  title: exportStory('Upload', 'form'),
  component: Upload,
} as ComponentMeta<typeof Upload>;

const ACTION_URL = 'your/url';
const TOKEN = 'your/token';

const uploaderProps = {
  name: 'files',
  action: ACTION_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
  beforeUpload(file) {
    console.log('beforeUpload', file);
    return true;
  },
  onStart: (file) => {
    console.log('onStart', file);
  },
  onSuccess(file) {
    console.log('onSuccess', file);
  },
  onProgress(step, file) {
    console.log('onProgress', Math.round(step.percent), file);
  },
  onError(err) {
    console.log('onError', err);
  },
};

export const Regular: ComponentStory<typeof Upload> = () => (
  <Template>
    <Upload {...uploaderProps}>
      <Button>Upload</Button>
    </Upload>
  </Template>
);

export const Multiple: ComponentStory<typeof Upload> = () => (
  <Template>
    <Upload multiple {...uploaderProps}>
      <Button>Upload</Button>
    </Upload>
  </Template>
);

export const WithForm: ComponentStory<typeof Upload> = () => {
  const [form] = useForm();

  return (
    <Template>
      <Form
        form={form}
        type="horizontal"
        onFinish={(values) => console.log('values', values)}
        onFieldsChange={(field, fields) => console.log('field', field)}
        labelOptions={{ col: { size: 2 } }}
        controlOptions={{ col: { size: 6 } }}
      >
        <Form.Field name="singleUpload" label="Single upload" rules={[{ required: true }]}>
          <Upload {...uploaderProps}>
            <Button>Upload</Button>
          </Upload>
        </Form.Field>

        <Form.Field
          name="multipleUpload"
          label="Multiple upload"
          extra="This field is required"
          rules={[{ required: true }]}
        >
          <Upload multiple {...uploaderProps}>
            <Button>Upload</Button>
          </Upload>
        </Form.Field>

        <button type="submit">Submit</button>
      </Form>
    </Template>
  );
};
