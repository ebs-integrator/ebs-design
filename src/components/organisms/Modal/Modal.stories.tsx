import React, { useState } from 'react';
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';
import { Icon, Switch, Button } from 'components/atoms';
import { Modal, ModalFooterButton } from './Modal';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Modal', 'organisms'),
  component: Modal,
  subcomponents: { Modal, ModalFooterButton },
  parameters: {
    docs: {
      page: () => <ArgsTable story={PRIMARY_STORY} />,
    },
  },
};

export const WithNothing = (): React.ReactElement => <Modal>Example</Modal>;

export const WithTitle = (): React.ReactElement => <Modal title="Confirmă acceptare">Example</Modal>;

export const WithFooter = (): React.ReactElement => (
  <Modal
    footer={
      <ModalFooterButton>
        <Button>Refuză</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </ModalFooterButton>
    }
  >
    Example
  </Modal>
);
export const WithHeaderAndFooter = (): React.ReactElement => (
  <Modal
    title="Confirmă acceptare"
    footer={
      <ModalFooterButton>
        <Button>Refuză</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </ModalFooterButton>
    }
  >
    Example
  </Modal>
);

export const CancelWithEscape: React.FC = () => {
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
              <Button onClick={onToggleHandler}>Refuză</Button>

              <div>
                <Button type="ghost" prefix={<Icon type="check" />}>
                  Confirmă
                </Button>

                <Button type="primary" prefix={<Icon type="edit" />}>
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
