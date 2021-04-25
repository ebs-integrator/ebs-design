import * as React from 'react';
import { Button } from 'components/atoms';
import { Form, useForm } from 'components/organisms';
import { Upload } from './Upload';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Upload', 'molecules'),
  component: Upload,
};

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

// FIXME: TEST FILES, DELETE AFTER IMPLEMENTATION
const attachments = [
  {
    id: 787,
    file_name: 'c83f32f9aa4124b22e2efa6dbd683f05',
    name: 'EAA003120953_Triomac.xml',
    mime_type: '',
    url: 'https://fs.primecapital.devebs.net/media/c83f32f9aa4124b22e2efa6dbd683f05.xml',
    type: 'OTHER',
    width: '0.000',
    height: '0.000',
    sign_data: null,
    signed: false,
    signed_timestamp: null,
  },
  {
    id: 784,
    file_name: 'ab1bb5b8d0233e819162d0917e03f337',
    name: 'EAA004386264_Petrom.xml',
    mime_type: '',
    url: 'http://10.1.1.186:3408/media/ab1bb5b8d0233e819162d0917e03f337.xml',
    type: 'CONTRACT',
    width: '0.000',
    height: '0.000',
    sign_data: null,
    signed: false,
    signed_timestamp: null,
  },
];

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
      initialValues={{ multipleUpload: attachments }}
      onFinish={(values) => console.log('values', values)}
      // onFieldsChange={(field, fields) => console.log('field', field)}
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
