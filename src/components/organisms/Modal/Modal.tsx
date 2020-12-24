import * as React from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import { useScrollToggler } from 'hooks';
import { Mask } from 'components/atoms';
import { Button } from 'components/organisms';

export type ModalSize = 'small' | 'regular' | 'large';

interface Props {
  mask?: boolean;
  size?: ModalSize;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  contentClass?: string;
  title?: string;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({
  mask = true,
  size = 'regular',
  header,
  footer,
  className,
  contentClass,
  title,
  ...props
}) => {
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
        <div className={cn(`ebs-modal`, `ebs-modal__size-${size}`, !showHeader && `hide-header`)}>
          {showHeader ? (
            <div className="ebs-modal__header">
              {title && <h2 className="ebs-modal__title">{title}</h2>}

              <div className="ebs-modal__header__tool">{header}</div>
              <Button icon="close" size="small" className="ebs-modal__header__close" type="text" />
            </div>
          ) : null}

          <ModalContent className={cn(contentClass)}>{props.children}</ModalContent>

          {footer && <div className="ebs-modal__footer">{footer}</div>}
        </div>
      </div>
    </>,

    document.getElementById('root') as HTMLElement,
  );
};

export const ModalContent: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={cn(`ebs-modal__content`, className)}>{children}</div>
);

export const ModalFooterButton: React.FC<{ justify?: 'space-between' | 'center' }> = ({
  justify = 'space-between',
  children,
}) => <div className={cn(`ebs-modal__footer__button`, `ebs-modal__footer__button-${justify}`)}>{children}</div>;
