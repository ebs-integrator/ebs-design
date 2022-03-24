import * as React from 'react';
import cn from 'classnames';
import { usePopupClose, usePortal, useScrollToggler } from 'hooks';
import { Mask, Button } from 'components/atoms';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';

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

            <div className={cn(`ebs-modal__wrapper`, className)} ref={overlayRef} {...props}>
              <div className={cn(`ebs-modal`, `ebs-modal__size--${size}`, { 'hide-header': !showHeader })}>
                {showHeader ? (
                  <div className="ebs-modal__header">
                    {title && <h2 className="ebs-modal__title">{title}</h2>}

                    <div className={cn({ 'ebs-modal__header-container': props.onClose })}>{header}</div>
                    {props.onClose && (
                      <Button
                        icon="close"
                        size="small"
                        className="ebs-modal__header--close"
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
