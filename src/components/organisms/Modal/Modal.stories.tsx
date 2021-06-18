import React, { useState } from 'react';
import { Icon, Switch, Button, Space } from 'components/atoms';
import { Modal } from './Modal';
import { exportStory } from '../../../libs';

const { Content, Footer } = Modal;

export default {
  title: exportStory('Modal', 'organisms'),
  component: Modal,
  subcomponents: { Content, Footer },
};

export const WithNothing: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>
      <Modal open={open} onClose={onToggleHandler}>
        <Modal.Content>Example</Modal.Content>
      </Modal>
    </>
  );
};

export const WithTitle: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>
      <Modal open={open} onClose={onToggleHandler} title="Confirmă acceptare">
        <Modal.Content>Example</Modal.Content>
      </Modal>
    </>
  );
};

export const WithFooter: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>
      <Modal open={open} onClose={onToggleHandler}>
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
    </>
  );
};

export const WithHeaderAndFooter: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>
      <Modal open={open} onClose={onToggleHandler} title="Confirmă acceptare">
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
    </>
  );
};

export const CancelWithEscape: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const onToggleHandler = (): void => setOpen((s) => !s);

  return (
    <>
      <p>
        Toggle: <Switch checked={open} onChange={onToggleHandler} />
      </p>

      {open && (
        <Modal open={open} onClose={onToggleHandler} title="Confirmă acceptare">
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
