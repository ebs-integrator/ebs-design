import * as React from 'react';
import RCUpload, { UploadProps as RcUploadProps } from 'rc-upload';
import { RcFile } from 'rc-upload/lib/interface';

import { Icon } from 'components/atoms/Icon/Icon';
import { GenericObject } from 'types';
import { typedOmitKeys, isEqual } from 'libs';

export interface UploadProps extends Omit<RcUploadProps, 'value' | 'onChange' | 'onRemove'> {
  value?: RcFile[];
  onChange?: (files: RcFile[]) => void;

  // no need to remove file from props.value, it's handled in onChange
  onRemove?: (file: RcFile, idx: number) => void;
}

export const Upload: React.FC<UploadProps> = (props) => {
  //
  const [internalFiles, setFiles] = React.useState<RcFile[]>([]);
  const [internalError, setError] = React.useState<Error>();
  const [progress, setProgress] = React.useState<GenericObject<number>>({});

  React.useEffect(() => {
    const files = props.value;

    if (!files) {
      setFiles([]);
      setProgress({});
      setError(undefined);
    }

    if (files && !isEqual(files, internalFiles)) {
      // If files exist, then progress is full
      const progresses = files.reduce((prev, curr) => ({ ...prev, [curr.name]: 100 }), {});

      setProgress(progresses);
      setFiles(files);
      setError(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  // Trigger onChange
  React.useEffect(() => {
    const files = props.value;
    if (!files || !isEqual(files, internalFiles)) props.onChange && props.onChange(internalFiles);

    setError(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalFiles]);

  const uploadProps: RcUploadProps = typedOmitKeys(['value', 'onChange'], props);

  // Handlers
  uploadProps.onStart = (file): void => {
    setFiles((prevState) => (props.multiple ? [...prevState, file] : [file]));
    props.multiple ? setProgress((prev) => ({ ...prev, [file.uid]: 0 })) : setProgress({ [file.uid]: 0 });

    props.onStart && props.onStart(file);
  };

  uploadProps.onError = (error, ret, file): void => {
    setError(error);

    props.onError && props.onError(error, ret, file);
  };

  uploadProps.onSuccess = (response, file, xhr): void => {
    setFiles((prevState) =>
      // Save files into array on multiple prop
      props.multiple ? [file, ...prevState.filter((state) => file.uid !== state.uid)] : [file],
    );

    props.onSuccess && props.onSuccess(Array.isArray(response) ? response : [response], file, xhr);
  };

  uploadProps.onProgress = (event, file): void => {
    setProgress((prevState) => ({
      ...prevState,
      [file.uid]: event.percent,
    }));
    props.onProgress && props.onProgress(event, file);
  };

  // Handle remove file
  const handleRemove = (file: RcFile, idx: number): void => {
    setFiles((prevState) => prevState.filter((_, i) => idx !== i));

    props.onRemove && props.onRemove(file, idx);
  };

  return (
    <>
      <RCUpload {...uploadProps}>{props.children}</RCUpload>

      {internalFiles.map((file, idx) => {
        const fileProgress = Math.round(progress[file.uid] || 100);

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
};
