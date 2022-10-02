import * as React from 'react';
import cn from 'classnames';

import { makeBEM } from 'libs';
import { usePopupClose, usePortal, useScrollToggler } from 'hooks';
import { Button, Mask } from 'components';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';

const bem = makeBEM('ebs-modal');

export type ModalSize = 'small' | 'regular' | 'large';

export interface ModalComposition {
  Content: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  mask?: boolean;
  size?: ModalSize;
  header?: React.ReactNode;
  title?: string;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open: isOpen = false,
  mask = true,
  size = 'regular',
  header,
  className,
  title,
  closeOnClickOutside = true,
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const createPortal = usePortal('modal-portal');
  useScrollToggler(open);

  const overlayRef = React.useRef<HTMLDivElement>(null);
  usePopupClose(overlayRef, () => {
    if (closeOnClickOutside) {
      props.onClose?.();
      setOpen(false);
    }
  });

  React.useEffect(() => setOpen(isOpen), [isOpen]);

  React.useEffect(() => {
    const event = ({ key }: KeyboardEvent): void => {
      if (['Escape'].includes(key) && props.onClose !== undefined) {
        props.onClose();
      }
    };

    window.addEventListener('keydown', event);

    return (): void => {
      window.removeEventListener('keydown', event);
    };
  }, []);

  const showHeader = React.useMemo(() => header || title, [header, title]);

  return (
    <>
      {open &&
        createPortal(
          <>
            <Mask />

            <div className={cn(bem('wrapper'), className)} ref={overlayRef} {...props}>
              <div className={bem(null, [size], { 'hide-header': !showHeader })}>
                {showHeader ? (
                  <div className={bem('header')}>
                    {title && <h2 className={bem('title')}>{title}</h2>}

                    <div className={props.onClose && bem('header-container')}>{header}</div>
                    {props.onClose && (
                      <Button
                        icon="close"
                        size="small"
                        className={bem('header--close')}
                        type="text"
                        onClick={props.onClose}
                      />
                    )}
                  </div>
                ) : null}

                {children}
              </div>
            </div>
          </>,
        )}
    </>
  );
};

const ModalComponent: React.FC<ModalProps> & ModalComposition = ({ ...props }) => <Modal {...props} />;

ModalComponent.displayName = 'Modal';

ModalComponent.Content = ModalContent;
ModalComponent.Footer = ModalFooter;

export { ModalComponent, Modal };
