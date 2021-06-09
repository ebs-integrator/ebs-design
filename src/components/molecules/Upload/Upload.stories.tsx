import * as React from 'react';
import { Button } from 'components/atoms';
import { Form, useForm } from 'components/organisms';
import { Upload } from './Upload';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Upload', 'molecules'),
  component: Upload,
};

const ACTION_URL = 'https://fs.api.dev.ebs.io/file/upload/';
const TOKEN = 'your/token';

const uploaderProps = {
  name: 'file',
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

export const Regular = (): React.ReactElement => (
  <Upload {...uploaderProps}>
    <Button>Upload</Button>
  </Upload>
);

export const Multiple = (): React.ReactElement => (
  <Upload multiple {...uploaderProps}>
    <Button>Upload</Button>
  </Upload>
);

export const WithForm = (): React.ReactNode => {
  const [form] = useForm();

  return (
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
  );
};
