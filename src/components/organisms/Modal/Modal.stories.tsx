import React from 'react';
import { Icon, Button, Space } from 'components';
import { Template } from 'components/storybook';

import { Modal as _Modal, ModalComponent as Modal, ModalProps } from './Modal';
import { exportStory } from '../../../libs';

const { Content, Footer } = Modal;

export default {
  title: exportStory('Modal', 'organisms'),
  component: _Modal,
  subcomponents: { Content, Footer },
  argTypes: {
    header: { control: 'text' },
  },
};

export const Regular: React.FC<ModalProps> & { args: ModalProps } = ({ children, ...props }) => (
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
