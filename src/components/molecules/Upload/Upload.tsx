import * as React from 'react';
import { Icon } from 'components/atoms';
import RCUpload, { UploadProps } from 'rc-upload';

interface Props extends UploadProps {
  file?: any;
}

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload = React.forwardRef<any, Props>((props, ref) => {
  const [internalFile, setFile] = React.useState<any>(null);
  const [internalError, setError] = React.useState<Error>();
  const [progress, setProgress] = React.useState(0);

  // Handlers
  const onError = (error, ret, file): void => {
    setError(error);

    if (props.onError) {
      props.onError(error, ret, file);
    }
  };

  const onSuccess = (response, file, xhr): void => {
    setFile(file);

    if (props.onSuccess) {
      props.onSuccess(response, file, xhr);
    }
  };

  const onProgress = (event, file): void => {
    setProgress(Math.round(event.percent));

    if (props.onProgress) {
      props.onProgress(event, file);
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
          <div className="upload__file__remove" onClick={() => setFile(null)}>
            <Icon type="close" />
          </div>

          <div className="upload__file">
            <div className="upload__file__name">{internalFile?.name}</div>

            <div className="upload__status">
              <div className="upload__file__size">{bytesToMegaBytes(internalFile.size)} MB</div>
              <div className="upload__progress">
                <span className="upload__progress__text">{progress}%</span>
                <span className="upload__progress__bar" style={{ width: `${progress}%`, flexBasis: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {internalError && <div className="upload__error">{internalError.message}</div>}
    </>
  );
});
