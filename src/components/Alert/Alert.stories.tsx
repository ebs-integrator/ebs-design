import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { exportStory } from 'libs';
import { Alert } from './Alert';

export default {
  title: exportStory('Alert', 'feedback'),
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Regular: ComponentStory<typeof Alert> = (args) => <Alert icon message="Success" {...args} />;

Regular.args = {
  message: 'Message',
  icon: true,
  closable: true,
  outlined: false,
  type: 'success',
  onClose: () => console.log,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ratione!',
};
