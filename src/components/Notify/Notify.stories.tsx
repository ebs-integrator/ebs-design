import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { exportStory } from 'libs';
import { useNotify } from 'hooks';
import { Button, Label, Space } from 'components';
import { NotifyContainer, NotifyProvider } from './Notify';
import { NotifyItem, NotifyItemProps } from './NotifyItem';

export default {
  title: exportStory('Notify', 'feedback'),
  component: NotifyItem,
  subcomponents: { NotifyItem },
} as ComponentMeta<typeof NotifyItem>;

export const Regular: ComponentStory<typeof NotifyItem> = (args) => {
  const Notify: React.FC<NotifyItemProps> = ({ ...params }) => {
    const notify = useNotify();

    return (
      <Space justify="center">
        <Button size="small" type="fill" onClick={() => notify.regular(params)}>
          Regular
        </Button>
        <Button size="small" type="primary" onClick={() => notify.primary(params)}>
          Primary
        </Button>
        <Button type="text">
          <Label status="success" type="fill" text="Success" onClick={() => notify.success(params)} />
        </Button>
        <Button type="text">
          <Label status="danger" type="fill" text="Danger" onClick={() => notify.error(params)} />
        </Button>
        <Button type="text">
          <Label status="info" type="fill" text="Info" onClick={() => notify.info(params)} />
        </Button>
        <Button type="text">
          <Label status="warning" type="fill" text="Warning" onClick={() => notify.warning(params)} />
        </Button>
      </Space>
    );
  };

  return (
    <NotifyProvider>
      <NotifyContainer />
      <Notify {...args} />
    </NotifyProvider>
  );
};

Regular.args = {
  title: 'Example',
  description: 'This is an example component',
  size: 'medium',
  direction: 'vertical',
};
