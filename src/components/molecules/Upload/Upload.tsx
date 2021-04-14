import * as React from 'react';
import RCUpload, { UploadProps } from 'rc-upload';
import { Icon } from 'components/atoms';
import { isEqualArrays, isArray } from 'libs';
import { GenericObject } from 'types';

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload = React.forwardRef<any, UploadProps>((props, ref) => {
  const [files, setFiles] = React.useState<any>([]);
  const [progress, setProgress] = React.useState<GenericObject>({});
  const [errors, setErrors] = React.useState<{ [key: string]: Error }>({});

  React.useEffect(() => {
    if (props.value) {
      if (isArray(props.value) && (props.value as []).length && !isEqualArrays(props.value, files)) {
        setFiles(props.value);

        (props.value as []).forEach(({ uid, id }) => setProgress((i) => ({ ...i, [uid || id]: 100 })));
      } else if (!isArray(props.value) && !progress[(props.value as GenericObject).id]) {
        setFiles([props.value]);
        setProgress((i) => ({ ...i, [(props.value as GenericObject).id]: 100 }));
      }
    }
  }, [props, files, progress]);

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
      setProgress((i) => ({ ...i, [file.uid || file.id]: 100 }));
      setFiles((i) => {
        if (props.onChange) {
          props.onChange(i);
        }

        return i;
      });

      // Internal save
      if (props.onSuccess) {
        props.onSuccess(response, file, xhr);
      }
    },
    [props],
  );

  const onProgress = React.useCallback(
    (event, file) => {
      setProgress((i) => ({ ...i, [file.uid || file.id]: Math.round(event.percent) }));
      setFiles((i) => [...i, file]);

      if (props.onProgress) {
        props.onProgress(event, file);
      }
    },
    [props],
  );

  // Handle remove file
  const handleRemove = React.useCallback(
    (value) =>
      setFiles((i) => {
        const data = i.filter(({ uid, id }) => (uid || id) !== value);

        if (props.onChange) {
          props.onChange(data);
        }

        return data;
      }),
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
      >
        {props.children}
      </RCUpload>

      {files.map(({ uid, id, url, name, size }) => (
        <div key={uid || id}>
          <div className="upload__container">
            <div className="upload__file__remove" onClick={() => handleRemove(uid || id)}>
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

          {errors[uid || id] && <div className="upload__error">{errors[uid || id].message}</div>}
        </div>
      ))}
    </>
  );
});
