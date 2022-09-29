import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { Template } from 'components/storybook';
import { Icon, Button, Space } from 'components';
import { Modal as _Modal, ModalComponent as Modal } from './Modal';

const { Content, Footer } = Modal;

export default {
  title: exportStory('Modal', 'utils'),
  component: _Modal,
  subcomponents: { Content, Footer },
  argTypes: {
    header: { control: 'text' },
  },
} as ComponentMeta<typeof _Modal>;

export const Regular: ComponentStory<typeof _Modal> = (args) => (
  <Template>
    <Modal {...args}>
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
