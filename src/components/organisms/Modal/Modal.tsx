import * as React from 'react';
import cn from 'classnames';
import { usePortal, useScrollToggler } from 'hooks';
import { Mask, Button } from 'components/atoms';
import { ModalContent, ModalContentProps } from './ModalContent';
import { ModalFooter, ModalFooterProps } from './ModalFooter';

export type ModalSize = 'small' | 'regular' | 'large';

export interface ModalComposition {
  Content: React.FC<ModalContentProps>;
  Footer: React.FC<ModalFooterProps>;
}

export interface ModalProps {
  open?: boolean;
  defaultOpen?: boolean;
  mask?: boolean;
  size?: ModalSize;
  header?: React.ReactNode;
  className?: string;
  title?: string;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> & ModalComposition = ({
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
  useScrollToggler();

  React.useEffect(() => setOpen(isOpen), [isOpen]);

  React.useEffect(() => {
    const event = ({ key }: React.KeyboardEvent): void => {
      if (['Escape'].includes(key) && props.onClose !== undefined) {
        props.onClose();
      }
    };

    window.addEventListener<any>('keydown', event);

    return (): void => {
      window.removeEventListener<any>('keydown', event);
    };
  }, []);

  const onClickOutside = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target = ev.target as HTMLDivElement;

    if (target && target.classList.contains('ebs-modal__wrapper')) {
      if (props.onClose !== undefined) {
        props.onClose();
      }

      setOpen(false);
    }
  };

  const showHeader = React.useMemo(() => header || title, [header, title]);

  return (
    <>
      {open &&
        createPortal(
          <>
            <Mask />

            <div
              className={cn(`ebs-modal__wrapper`, className)}
              {...(mask ? { onClick: closeOnClickOutside ? onClickOutside : undefined } : {})}
            >
              <div className={cn(`ebs-modal`, `ebs-modal__size--${size}`, { 'hide-header': !showHeader })}>
                {showHeader ? (
                  <div className="ebs-modal__header">
                    {title && <h2 className="ebs-modal__title">{title}</h2>}

                    <div className="ebs-modal__header--tool">{header}</div>
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

Modal.displayName = 'Modal';

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export { Modal };
