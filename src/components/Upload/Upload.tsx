import * as React from 'react';
import RCUpload, { UploadProps as RcUploadProps } from 'rc-upload';
import { RcFile } from 'rc-upload/lib/interface';

import { isEqual, makeBEM } from 'libs';
import { Icon } from 'components';

const bem = makeBEM('ebs-upload');

export interface UploadProps extends RcUploadProps {
  onRemove?: (file: RcFile, idx: number) => void;
}

export const Upload = React.forwardRef<RCUpload, UploadProps>((props, ref) => {
  // FIXME: Fix any type for files
  const [internalFiles, setFiles] = React.useState<any>([]);
  const [internalError, setError] = React.useState<Error>();
  const [progress, setProgress] = React.useState<{ [key: string]: number }>({});

  React.useEffect(() => {
    if (props.value) {
      const files = Array.isArray(props.value) ? props.value : [props.value];

      // If files exist, then progress is full
      const progresses = files.reduce((prev, curr) => ({ ...prev, [curr.name]: 100 }), {});
      setProgress(progresses);
      setFiles(files);
    }
  }, [props.value]);

  // Trigger onChange
  React.useEffect(() => {
    if (
      props.onChange &&
      ((props.value && (!internalFiles.length || !isEqual(props.value, internalFiles))) ||
        (!props.value && internalFiles.length))
    ) {
      props.onChange(internalFiles.length > 0 ? internalFiles : undefined);
    }
  }, [internalFiles, props]);

  // Handlers
  const onError = (error, ret, file): void => {
    setError(error);

    if (props.onError) {
      props.onError(error, ret, file);
    }
  };

  const onStart = (file): void => {
    setFiles((prevState) =>
      props.multiple ? [...prevState.map((item) => (item.uid === file.uid ? file : item)), file] : [file],
    );
    setProgress({ [file.uid]: 0 });

    props.onStart && props.onStart(file);
  };

  const onSuccess = (response, file, xhr): void => {
    setFiles((prevState) => {
      let files = Array.isArray(response) ? response : [response];

      // Save files into array on multiple prop
      if (props.multiple) {
        files = [
          ...prevState.filter((state) => file.uid !== state.uid),
          ...(Array.isArray(response) ? response : [response]),
        ];
      }

      // Internal save
      if (props.onSuccess) {
        props.onSuccess(response, file, xhr);
      }

      return files;
    });
  };

  const onProgress = (event, file): void => {
    setProgress((prevState) => ({ ...prevState, [file.uid]: Math.round(event.percent) }));

    if (props.onProgress) {
      props.onProgress(event, file);
    }
  };

  // Handle remove file
  const handleRemove = (file, idx): void => {
    setFiles((prevState) => prevState.filter((_, index) => index !== idx));

    props.onRemove && props.onRemove(file, idx);
  };

  const uploadProps = {
    ...props,
    onStart,
    onSuccess,
    onProgress,
    onError,
  };

  return (
    <>
      <RCUpload ref={ref} {...uploadProps}>
        {props.children}
      </RCUpload>

      {internalFiles.map((file, idx) => {
        const fileProgress = progress[file.uid] || 100;

        return (
          <div key={`${file?.name}-${idx}`} className={bem('container')}>
            <div className={bem('file-remove')} onClick={() => handleRemove(file, idx)}>
              <Icon type="close" model="bold" />
            </div>

            <div className={bem('file')}>
              <a href={file?.url} target="_blank" rel="noopener noreferrer" className={bem('file-name')}>
                {file?.name}
              </a>

              <div className={bem('status')}>
                <div className={bem('progress')}>
                  <span className={bem('progress-text')}>{fileProgress}%</span>
                  <span
                    className={bem('progress-bar')}
                    style={{ width: `${fileProgress}%`, flexBasis: `${fileProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {internalFiles.length > 0 && internalError && <div className={bem('error')}>{internalError.message}</div>}
    </>
  );
});
