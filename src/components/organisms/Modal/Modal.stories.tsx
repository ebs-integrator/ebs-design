import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, Button, Space } from 'components/atoms';
import { Template } from 'components/storybook';

import { Modal as _Modal, ModalComponent as Modal, ModalProps } from './Modal';
import { exportStory } from '../../../libs';

const { Content, Footer } = Modal;

const includedControls: (keyof ModalProps)[] = ['open', 'title', 'size', 'closeOnClickOutside', 'mask', 'header'];

export default {
  title: exportStory('Modal', 'organisms'),
  component: _Modal,
  subcomponents: { Content, Footer },
  argTypes: {
    header: { control: 'text' },
  },
  parameters: {
    controls: { include: includedControls },
  },
} as ComponentMeta<typeof Modal>;

export const Regular: ComponentStory<typeof Modal> = ({ children, ...props }) => (
  <Template>
    <Modal {...props}>
      <Modal.Content>Content</Modal.Content>
      <Modal.Footer>
        <Space justify="space-between">
          <Button>Cancel</Button>

          <Button type="primary" prefix={<Icon type="check" />}>
            Confirm
          </Button>
        </Space>
      </Modal.Footer>
    </Modal>
  </Template>
);

Regular.args = {
  title: 'Example',
  open: true,
  defaultOpen: false,
  size: 'regular',
  closeOnClickOutside: true,
  mask: true,
};

export const MultipleOpenSameTime: ComponentStory<typeof Modal> = (args) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const close1 = (): void => setOpen1(false);
  const close2 = (): void => setOpen2(false);
  const close3 = (): void => setOpen3(false);
  const close4 = (): void => setOpen4(false);

  return (
    <Template>
      <Button onClick={() => setOpen1(true)}>Open first modal</Button>
      <Modal {...args} open={open1} onClose={close1}>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            <Button onClick={close1}>Cancel</Button>

            <Button type="primary" onClick={() => setOpen2(true)}>
              Open second
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
      <Modal {...args} open={open2} onClose={close2}>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            <Button onClick={close2}>Cancel</Button>

            <Button type="primary" onClick={() => setOpen3(true)}>
              Open third
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
      <Modal {...args} open={open3} onClose={close3}>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            <Button onClick={close3}>Cancel</Button>

            <Button type="primary" onClick={() => setOpen4(true)}>
              Open fourth
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
      <Modal {...args} open={open4} onClose={close4}>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer>
          <Button onClick={close4}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </Template>
  );
};

MultipleOpenSameTime.parameters = { controls: { exclude: ['open'] } };
