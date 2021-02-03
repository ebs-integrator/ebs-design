import React, { useState } from 'react';
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks';
import { Icon, Switch, Button, Space } from 'components/atoms';
import { Modal } from './Modal';
import { exportStory } from '../../../libs';

const { Content, Footer } = Modal;

export default {
  title: exportStory('Modal', 'organisms'),
  component: Modal,
  subcomponents: { Content, Footer },
  parameters: {
    docs: {
      page: () => <ArgsTable story={PRIMARY_STORY} />,
    },
  },
};

export const WithNothing = (): React.ReactElement => (
  <Modal>
    <Modal.Content>Example</Modal.Content>
  </Modal>
);

export const WithTitle = (): React.ReactElement => (
  <Modal title="Confirmă acceptare">
    <Modal.Content>Example</Modal.Content>
  </Modal>
);

export const WithFooter = (): React.ReactElement => (
  <Modal>
    <Modal.Content>Example</Modal.Content>
    <Modal.Footer>
      <Space justify="space-between">
        <Button>Refuză</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </Space>
    </Modal.Footer>
  </Modal>
);
export const WithHeaderAndFooter = (): React.ReactElement => (
  <Modal title="Confirmă acceptare">
    <Modal.Content>Example</Modal.Content>
    <Modal.Footer>
      <Space justify="space-between">
        <Button>Refuză</Button>

        <Button type="primary" prefix={<Icon type="check" />}>
          Confirmă
        </Button>
      </Space>
    </Modal.Footer>
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
        <Modal onClose={onToggleHandler} title="Confirmă acceptare">
          <Modal.Content>Example</Modal.Content>
          <Modal.Footer>
            <Space justify="space-between">
              <Button onClick={onToggleHandler}>Refuză</Button>

              <Space>
                <Button type="ghost" prefix={<Icon type="check" />}>
                  Confirmă
                </Button>

                <Button type="primary" prefix={<Icon type="edit" />}>
                  Save
                </Button>
              </Space>
            </Space>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
