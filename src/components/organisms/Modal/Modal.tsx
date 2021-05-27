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
  mask?: boolean;
  size?: ModalSize;
  header?: React.ReactNode;
  className?: string;
  title?: string;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> & ModalComposition = ({
  mask = true,
  size = 'regular',
  header,
  className,
  title,
  children,
  ...props
}) => {
  const createPortal = usePortal();
  useScrollToggler();

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

    if (target && target.classList.contains('ebs-modal__wrapper') && props.onClose !== undefined) {
      props.onClose();
    }
  };

  const showHeader = React.useMemo(() => header || title, [header, title]);

  return createPortal(
    <>
      <Mask />

      <div className={cn(`ebs-modal__wrapper`, className)} {...(mask ? { onClick: onClickOutside } : {})}>
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
  );
};

Modal.displayName = 'Modal';

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export { Modal };
