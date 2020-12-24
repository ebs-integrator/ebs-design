import React, { useState } from 'react';
import { Icon, Switch } from 'components/atoms';
import { Button } from 'components/organisms';
import { Modal, ModalFooterButton } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const withNothing = (): React.ReactElement => <Modal>Example</Modal>;

export const withTitle = (): React.ReactElement => <Modal title="Confirmă acceptare">Example</Modal>;

export const withFooter = (): React.ReactElement => (
  <Modal
    footer={
      <ModalFooterButton>
        <Button size="medium">Refuză</Button>

        <Button size="medium" type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </ModalFooterButton>
    }
  >
    Example
  </Modal>
);
export const withHeaderAndFooter = (): React.ReactElement => (
  <Modal
    title="Confirmă acceptare"
    footer={
      <ModalFooterButton>
        <Button size="medium">Refuză</Button>

        <Button size="medium" type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </ModalFooterButton>
    }
  >
    Example
  </Modal>
);

export const cancelWithEscape: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(true);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>

      {open && (
        <Modal
          onClose={onToggleHandler}
          title="Confirmă acceptare"
          footer={
            <ModalFooterButton>
              <Button size="medium" onClick={onToggleHandler}>
                Refuză
              </Button>

              <div>
                <Button size="medium" type="ghost" prefix={<Icon type="check" />}>
                  Confirmă
                </Button>

                <Button size="medium" type="primary" prefix={<Icon type="edit" />}>
                  Save
                </Button>
              </div>
            </ModalFooterButton>
          }
        >
          Example
        </Modal>
      )}
    </>
  );
};
