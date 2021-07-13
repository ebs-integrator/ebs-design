import * as React from 'react';
import { Button } from 'components/atoms';
import { Form, useForm } from 'components/organisms';
import { Upload, UploadProps } from './Upload';
import { exportStory } from '../../../libs';
import { Loader } from '../Loader/Loader';

export default {
  title: exportStory('Upload', 'molecules'),
  component: Upload,
};

const ACTION_URL = 'https://fs.api.dev.ebs.io/file/upload/';
// const TOKEN = '';

const uploadProps: UploadProps = {
  name: 'file',
  action: ACTION_URL,
  headers: {
    // Authorization: `Bearer ${TOKEN}`,
  },
  beforeUpload(file) {
    console.log('beforeUpload', file);
    return true;
  },
  onStart: (file) => {
    console.log('onStart', file);
  },
  onSuccess(files, file) {
    console.log('onSuccess', files, file);
  },
  onProgress(step, file) {
    console.log('onProgress', Math.round(step.percent), file);
  },
  onError(err) {
    console.log('onError', err);
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useUpload = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  return {
    isLoading,
    uploadProps: {
      ...uploadProps,
      onStart: (file) => {
        console.log('onStart', file);
        setIsLoading(true);
      },
      onSuccess(files, file) {
        console.log('onSuccess', files, file);
        setIsLoading(false);
      },
      onError(err) {
        console.log('onError', err);
        setIsLoading(false);
      },
    } as UploadProps,
  };
};

export const Regular = (): React.ReactElement => {
  const { isLoading, uploadProps } = useUpload();
  return (
    <>
      <Upload {...uploadProps}>
        <Button>Upload</Button>
      </Upload>
      {isLoading && <Loader.Inline></Loader.Inline>}
    </>
  );
};

export const Multiple = (): React.ReactElement => {
  const { isLoading, uploadProps } = useUpload();
  return (
    <>
      <Upload multiple {...uploadProps}>
        <Button>Upload</Button>
      </Upload>
      {isLoading && <Loader.Inline></Loader.Inline>}
    </>
  );
};

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
      <Form.Field name="singleUpload" label="Single upload" rules={[{ required: true }]} initialValue={[]}>
        <Upload {...uploadProps}>
          <Button>Upload</Button>
        </Upload>
      </Form.Field>

      <Form.Field
        name="multipleUpload"
        label="Multiple upload"
        extra="This field is required"
        rules={[{ required: true }]}
        initialValue={[]}
      >
        <Upload multiple {...uploadProps}>
          <Button>Upload</Button>
        </Upload>
      </Form.Field>

      <button type="submit">Submit</button>
    </Form>
  );
};

/*

> Example of an upload hook with request cancelation using axios' CancelToken


import React from "react";

import { Attachment } from "types";
import { RcFile, UploadRequestOption } from "rc-upload/lib/interface";
import $axios, { CancelTokenSource } from "axios";
import { attachments } from "api";

function useAttachmentUpload() {
  //
  const [cts, setCts] = React.useState<CancelTokenSource>();
  const [attachment, setAttachment] = React.useState<Attachment>();
  const [files, setFiles] = React.useState<RcFile[]>([]);
  const [isUploading, setIsUploading] = React.useState(false);

  const reset = React.useCallback(() => {
    setAttachment(undefined);
    setIsUploading(false);
    setFiles([]);
  }, []);

  return {
    attachment,
    isUploading,
    reset,
    uploadProps: {
      customRequest: (option: UploadRequestOption) => {
        const newCts = $axios.CancelToken.source();
        setCts(newCts);
        setIsUploading(true);
        return attachments.post(option, newCts.token);
      },
      onFilesChange: setFiles,
      onFileRemove: () => {
        cts?.cancel("Upload canceled");
        reset();
      },
      files,
      onSuccess: (data: any) => {
        data && data[0] && setAttachment(data[0]);
        setIsUploading(false);
      },
      onError: () => {
        setIsUploading(false);
      },
    },
  };
}

*/
