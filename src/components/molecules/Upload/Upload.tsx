import * as React from 'react';
import RCUpload, { UploadProps as RCUploadProps } from 'rc-upload';
import { Icon } from 'components/atoms';
import { isEqualArrays } from 'libs';
import { GenericObject } from 'types';

export interface UploadProps extends Omit<RCUploadProps, 'value'> {
  value?: GenericObject | GenericObject[];
}

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload = React.forwardRef<any, UploadProps>((props, ref) => {
  const [, setData] = React.useState<GenericObject[]>([]);
  const [files, setFiles] = React.useState<GenericObject[]>([]);
  const [progress, setProgress] = React.useState<GenericObject>({});
  const [errors, setErrors] = React.useState<{ [key: string]: Error }>({});

  const { value } = props;

  React.useEffect(() => {
    if (Array.isArray(value) && !isEqualArrays(value, files)) {
      setFiles(value);

      value.forEach(({ uid, id }) => setProgress((i) => ({ ...i, [uid || id]: 100 })));
    } else if (value && !Array.isArray(value) && !progress[value.id]) {
      setFiles([value]);
      setProgress((prevState) => ({ ...prevState, [value.id]: 100 }));
    } else if (!value && files.length) {
      setFiles([]);
      setProgress({});
    }
  }, [value, files, progress]);

  // Handlers
  const onError = React.useCallback(
    (error, ret, file) => {
      setErrors({ [file.uid || file.id]: error });

      if (props.onError) {
        props.onError(error, ret, file);
      }
    },
    [props],
  );

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

        if (props.onChange) {
          props.onChange(newData);
        }

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
      setFiles((prevState) => [...prevState, file]);

      if (props.onProgress) {
        props.onProgress(event, file);
      }
    },
    [props],
  );

  // Handle remove file
  const handleRemove = React.useCallback(
    (uid, id) => {
      setFiles((prevState) => prevState.filter((state) => state.uid !== uid));

      setData((prevState) => {
        const data = prevState.filter((state) => state.id !== id);

        if (props.onChange) {
          props.onChange(data as any);
        }

        return data;
      });
    },
    [props, files],
  );

  return (
    <>
      <RCUpload
        ref={ref}
        {...{
          ...props,
          onSuccess,
          onProgress,
          onError,
        }}
        value={value as any}
      >
        {props.children}
      </RCUpload>

      {files.map(({ uid, id, url, name, size }) => (
        <div key={uid}>
          <div className="upload__container">
            <div className="upload__file__remove" onClick={() => handleRemove(uid, id)}>
              <Icon type="close" />
            </div>

            <div className="upload__file">
              <a href={url} target="_blank" rel="noopener noreferrer" className="upload__file__name">
                {name}
              </a>

              <div className="upload__status">
                {size && <div className="upload__file__size">{bytesToMegaBytes(size)} MB</div>}
                <div className="upload__progress">
                  <span className="upload__progress__text">{progress[uid || id]}%</span>
                  <span
                    className="upload__progress__bar"
                    style={{ width: `${progress[uid || id]}%`, flexBasis: `${progress[uid || id]}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {errors[uid] && <div className="upload__error">{errors[uid].message}</div>}
        </div>
      ))}
    </>
  );
});
