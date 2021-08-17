import * as React from 'react';
import { Template } from 'components/storybook';

import { Alert, AlertProps } from './Alert';
import { exportStory } from '../../../libs';

export default {
  title: exportStory('Alert', 'atoms'),
  component: Alert,
};

export const Regular: React.FC<AlertProps> & { args: AlertProps } = ({ children, ...props }) => (
  <Template>
    <Alert icon message="Success" {...props}>
      {children}
    </Alert>
  </Template>
);

Regular.args = {
  message: 'Message',
  icon: true,
  closable: true,
  outlined: false,
  type: 'success',
  onClose: () => console.log,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ratione!',
};
