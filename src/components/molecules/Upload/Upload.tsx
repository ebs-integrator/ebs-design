import * as React from 'react';
import RCUpload, { UploadProps as RcUploadProps } from 'rc-upload';
import { RcFile } from 'rc-upload/lib/interface';

import { Icon } from 'components/atoms/Icon/Icon';
import { GenericObject } from 'types';

export interface UploadProps extends RcUploadProps {
  onFileRemove?: (file: RcFile, idx: number) => void;
  onFilesChange?: (files: RcFile[]) => void;
  files?: RcFile[];
}

export const Upload = React.forwardRef<RCUpload, UploadProps>((props, ref) => {
  const [internalFiles, setFiles] = React.useState<RcFile[]>([]);
  const [internalError, setError] = React.useState<Error>();
  const [progress, setProgress] = React.useState<GenericObject<number>>({});

  React.useEffect(() => {
    const files = props.files;
    if (files && !files?.every((value, i) => internalFiles[i] === value)) {
      // If files exist, then progress is full
      const progresses = files.reduce((prev, curr) => ({ ...prev, [curr.name]: 100 }), {});

      setProgress(progresses);
      setFiles(files);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.files]);

  // Trigger onChange
  React.useEffect(() => {
    props.onFilesChange && props.onFilesChange(internalFiles);
    setError(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalFiles, props.onFilesChange]);

  const uploadProps: RcUploadProps = {
    ...props,
  };

  // Handlers
  uploadProps.onStart = (file): void => {
    setFiles((prevState) =>
      props.multiple ? [...prevState.map((item) => (item.uid === file.uid ? file : item)), file] : [file],
    );
    setProgress({ [file.uid]: 0 });

    props.onStart && props.onStart(file);
  };

  uploadProps.onError = (error, ret, file): void => {
    setError(error);

    props.onError && props.onError(error, ret, file);
  };

  uploadProps.onSuccess = (response, file, xhr): void => {
    let files = Array.isArray(response) ? response : [response];

    setFiles((prevState) => {
      // Save files into array on multiple prop
      if (props.multiple) {
        files = [
          ...prevState.filter((state) => file.uid !== state.uid),
          ...(Array.isArray(response) ? response : [response]),
        ];
      }

      return files;
    });

    props.onSuccess && props.onSuccess(files, file, xhr);
  };

  uploadProps.onProgress = (event, file): void => {
    setProgress((prevState) => ({
      ...prevState,
      [file.uid]: Math.round(event.percent),
    }));

    props.onProgress && props.onProgress(event, file);
  };

  // Handle remove file
  const handleRemove = (file: RcFile, idx: number): void => {
    setFiles((prevState) => prevState.filter((_, i) => idx !== i));
    props.onFileRemove && props.onFileRemove(file, idx);
  };

  return (
    <>
      <RCUpload ref={ref} {...uploadProps}>
        {props.children}
      </RCUpload>

      {internalFiles.map((file, idx) => {
        const fileProgress = progress[file.uid] || 100;

        return (
          <div key={`${file?.name}-${idx}`} className="upload__container">
            <div className="upload__file__remove" onClick={() => handleRemove(file, idx)}>
              <Icon type="close" />
            </div>

            <div className="upload__file">
              <a href={(file as any)?.url} target="_blank" rel="noopener noreferrer" className="upload__file__name">
                {file?.name}
              </a>

              <div className="upload__status">
                <div className="upload__progress">
                  <span className="upload__progress__text">{fileProgress}%</span>
                  <span
                    className="upload__progress__bar"
                    style={{
                      width: `${fileProgress}%`,
                      flexBasis: `${fileProgress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {internalFiles.length > 0 && internalError && <div className="upload__error">{internalError.message}</div>}
    </>
  );
});
