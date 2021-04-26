import * as React from 'react';
import RCUpload, { UploadProps as RCUploadProps } from 'rc-upload';
import { Icon } from 'components/atoms';
import { GenericObject } from 'types';
import { isEqualArrays } from 'libs';

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload = React.forwardRef<any, RCUploadProps>((props, ref) => {
  const [data, setData] = React.useState<any>([]);
  const [files, setFiles] = React.useState<any>(() => {
    if (props.value) {
      const value = Array.isArray(props.value) ? props.value : [props.value];

      setData(value);

      return value;
    }

    return [];
  });
  const [progress, setProgress] = React.useState<GenericObject>({});
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    if (props.value) {
      const files = Array.isArray(props.value) ? props.value : [props.value];

      // If files exist, then progress is full
      const progresses = files.reduce((prev, curr) => ({ ...prev, [curr.name]: 100 }), {});
      setProgress(progresses);
    }
  }, [props.value]);

  // Trigger onChange
  React.useEffect(() => {
    const value = data.length > 0 ? data : undefined;

    if (
      props.onChange &&
      ((props.value && !value) ||
        (value && !props.value) ||
        (value && props.value && !isEqualArrays(value, props.value)))
    ) {
      props.onChange(value);
    }
  }, [data, props]);

  // Handlers
  const onError = (error): void => setError(error);

  const onSuccess = React.useCallback(
    (response, file, xhr) => {
      setProgress((prevState) => ({ ...prevState, [file.uid]: 100 }));

      setFiles((prevState) =>
        prevState.map((state) => {
          if (state.uid === file.uid) {
            state.id = response[0].id;
          }

          return state;
        }),
      );
      setData((prevState) => {
        const newData = props.multiple ? [...prevState, ...response] : response;

        // Internal save
        if (props.onSuccess) {
          props.onSuccess(newData, file, xhr);
        }

        return newData;
      });
    },
    [props],
  );

  const onProgress = React.useCallback(
    (event, file) => {
      setProgress((prevState) => ({ ...prevState, [file.uid]: Math.round(event.percent) }));

      if (props.onProgress) {
        props.onProgress(event, file);
      }
    },
    [props],
  );

  const onStart = (file): void => {
    setProgress({ [file.uid]: 0 });
    setFiles((prevState) =>
      props.multiple ? [...prevState.map((item) => (item.uid === file.uid ? file : item)), file] : [file],
    );
  };

  // Handle remove file
  const handleRemove = (i): void => {
    setFiles(files.filter((_, index) => index !== i));
    setData(data.filter((_, index) => index !== i));
  };

  return (
    <>
      <RCUpload
        ref={ref}
        {...{
          ...props,
          onSuccess,
          onProgress,
          onStart,
          onError,
        }}
      >
        {props.children}
      </RCUpload>

      {files.map(({ uid, url, name, size }, i) => {
        const fileProgress = progress[uid] || 100;

        return (
          <div key={uid}>
            <div className="upload__container">
              <div className="upload__file__remove" onClick={() => handleRemove(i)}>
                <Icon type="close" />
              </div>

              <div className="upload__file">
                <a href={url} target="_blank" rel="noopener noreferrer" className="upload__file__name">
                  {name}
                </a>

                <div className="upload__status">
                  {size && <div className="upload__file__size">{bytesToMegaBytes(size)} MB</div>}
                  <div className="upload__progress">
                    <span className="upload__progress__text">{fileProgress}%</span>
                    <span
                      className="upload__progress__bar"
                      style={{ width: `${fileProgress}%`, flexBasis: `${fileProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {files.length > 0 && error && <div className="upload__error">{error.message}</div>}
    </>
  );
});
