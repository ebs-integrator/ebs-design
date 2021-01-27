import * as React from 'react';
import { Icon } from 'components/atoms';
import RCUpload, { UploadProps } from 'rc-upload';

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload = React.forwardRef<any, UploadProps>((props, ref) => {
  const [internalFile, setFile] = React.useState<any>();
  const [internalError, setError] = React.useState<Error>();
  const [progress, setProgress] = React.useState(0);

  // FIXME: Implement multiple files
  const normalizeFile = (value: unknown): unknown => {
    if (Array.isArray(value) && value.length > 0) {
      // HACK: This is a hack to get first file, should be fixed
      return value[0];
    }

    return value;
  };

  React.useEffect(() => {
    if (props.value) {
      setFile(normalizeFile(props.value));

      // If file exist, then progress is full
      setProgress(100);
    }
  }, [props.value]);

  // Handlers
  const onError = (error, ret, file): void => {
    setError(error);

    if (props.onError) {
      props.onError(error, ret, file);
    }
  };

  const onSuccess = (response, file, xhr): void => {
    const resFile = normalizeFile(response);
    setFile(resFile);

    // Internal save
    if (props.onSuccess) {
      props.onSuccess(response, file, xhr);
    }

    if (props.onChange) {
      props.onChange(resFile as any);
    }
  };

  const onProgress = (event, file): void => {
    setProgress(Math.round(event.percent));
    // Set file for progress
    setFile(file);

    if (props.onProgress) {
      props.onProgress(event, file);
    }
  };

  // Handle remove file
  const handleRemove = (): void => {
    setFile(undefined);

    if (props.onChange) {
      props.onChange(undefined as any);
    }
  };

  const uploadProps = {
    ...props,
    onSuccess,
    onProgress,
    onError,
  };

  return (
    <>
      <RCUpload ref={ref} {...uploadProps}>
        {props.children}
      </RCUpload>

      {internalFile && (
        <div className="upload__container">
          <div className="upload__file__remove" onClick={handleRemove}>
            <Icon type="close" />
          </div>

          <div className="upload__file">
            <a href={internalFile?.url} target="_blank" rel="noopener noreferrer" className="upload__file__name">
              {internalFile?.name}
            </a>

            <div className="upload__status">
              {internalFile.size && <div className="upload__file__size">{bytesToMegaBytes(internalFile.size)} MB</div>}
              <div className="upload__progress">
                <span className="upload__progress__text">{progress}%</span>
                <span className="upload__progress__bar" style={{ width: `${progress}%`, flexBasis: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {internalFile && internalError && <div className="upload__error">{internalError.message}</div>}
    </>
  );
});
