import * as React from 'react';
import { Icon, Button } from 'components/atoms';

interface Props {
  file?: File | string;
  onChange?: (newValue: File | null) => void;
}

interface FileTarget {
  files: [File];
}

const bytesToMegaBytes = (bytes: number): string => (bytes / (1024 * 1024)).toFixed(2);

export const Upload: React.FC<Props> = ({ file, onChange }) => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = React.useState<'error' | 'empty' | 'pending' | 'success'>('empty');
  const [name, setName] = React.useState('');
  const [size, setSize] = React.useState('');

  React.useEffect(() => {
    if (typeof file === 'string' && !file.length) {
      setName('');
      setSize('');
      setStatus('empty');
    }
  }, [file]);

  const onUploadFile = (event: any): void => {
    setStatus('pending');

    const target = event.target as FileTarget;

    const file = target.files[0];

    if (file) {
      const reader = new FileReader();

      if (file.name) {
        setName(file.name);
      }

      if (file.size) {
        setSize(bytesToMegaBytes(file.size));
      }

      reader.readAsDataURL(file);

      reader.onload = ({ target: $target }) => {
        setStatus($target !== null && $target.result !== null ? 'success' : 'error');
      };

      reader.onloadend = async () => {
        if (onChange !== undefined) {
          onChange(file);
        }
      };
    }
  };

  const onAddFile = (): void => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const onClose = (): void => {
    setStatus('empty');

    if (onChange !== undefined) {
      onChange(null);
    }
  };

  return (
    <>
      <div className="file-upload" style={status === 'empty' ? { display: 'none' } : undefined}>
        {/* {['error', 'empty'].includes(status) ? (
          <div className="file-upload-unactive">
            <input ref={ref} type="file" className="file-upload-mask" onChange={onUploadFile} />

            <Info primary label={t('addFile')} icon={<Icon type="file" />} />

            <div className="file-upload-data">
              <span />

              <Progressbar finished={false} />
            </div>
          </div>
        ) : (
          <div className="file-upload-active">
            <Info primary label={name} icon={<Icon type="file" />} />

            <div className="file-upload-data">
              {size && (
                <span>
                  {size} {t('mb')}
                </span>
              )}

              <Progressbar finished={status === 'success'} />
            </div>
          </div>
        )} */}

        {status === 'success' && <Icon type="close" onClick={onClose} />}
      </div>
      {status !== 'success' && (
        <Button
          prefix={<Icon type="attach" />}
          className={status !== 'empty' ? 'mt-20' : undefined}
          onClick={status !== 'pending' ? onAddFile : undefined}
          disabled={status === 'pending'}
        >
          Attach File
        </Button>
      )}
    </>
  );
};
